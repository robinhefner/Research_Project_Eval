document.addEventListener('DOMContentLoaded', () => {
    // --- Supabase Setup ---
    // BITTE HIER IHRE SUPABASE DATEN EINTRAGEN:
    const SUPABASE_URL = 'https://kanfloefkfezsbadtlcu.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_4fgeYxrBBxSJYe0qDm4uxw_GEnCvrqD';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // --- Configuration ---
    // List of PDFs (In future, this can be dynamically generated or expanded to 100)
    const pdfFiles = [
        'data/Anna_Schmidt_2ed066c9.pdf',
        'data/Clara_Keller_26a10a56.pdf',
        'data/Clara_Klein_94cf6cf6.pdf'
    ];

    // Prototype Evaluation Criteria (Likert 1-5)
    const criteria = [
        { id: 'c1', title: '1. Klinische Plausibilität', minLabel: 'Sehr unplausibel', maxLabel: 'Sehr plausibel' },
        { id: 'c2', title: '2. Vollständigkeit der Historie', minLabel: 'Unvollständig', maxLabel: 'Sehr vollständig' },
        { id: 'c3', title: '3. Realismus der Medikation', minLabel: 'Unrealistisch', maxLabel: 'Sehr realistisch' },
        { id: 'c4', title: '4. Konsistenz der Diagnosen', minLabel: 'Inkonsistent', maxLabel: 'Sehr konsistent' },
        { id: 'c5', title: '5. Gesamteindruck', minLabel: 'Schlecht', maxLabel: 'Hervorragend' }
    ];

    // --- State ---
    let state = {
        doctorName: '',
        remainingPdfs: [],
        totalPdfs: pdfFiles.length
    };

    // --- DOM Elements ---
    const screens = {
        start: document.getElementById('start-screen'),
        eval: document.getElementById('eval-screen'),
        end: document.getElementById('end-screen')
    };

    const startForm = document.getElementById('start-form');
    const doctorNameInput = document.getElementById('doctor-name'); // This is now a <select>

    const pdfViewer = document.getElementById('pdf-viewer');
    const progressIndicator = document.getElementById('progress-indicator');
    const progressBar = document.getElementById('progress-bar');

    const evalForm = document.getElementById('evaluation-form');
    const criteriaContainer = document.getElementById('criteria-container');
    const btnPrev = document.getElementById('btn-prev');
    const btnRestart = document.getElementById('btn-restart');
    
    // Wir verstecken/entfernen den CSV Download Button, da der Forscher die Daten direkt aus Supabase exportiert.
    const btnDownloadCsv = document.getElementById('btn-download-csv');
    if(btnDownloadCsv) btnDownloadCsv.style.display = 'none';

    // --- Initialization ---
    initApp();

    function initApp() {
        renderCriteriaForm();
        showScreen('start');
    }

    function renderCriteriaForm() {
        criteriaContainer.innerHTML = '';
        criteria.forEach(c => {
            const group = document.createElement('div');
            group.className = 'criterion-group';

            let radiosHtml = '';
            for (let i = 1; i <= 5; i++) {
                radiosHtml += `
                    <div class="likert-item">
                        <input type="radio" name="${c.id}" id="${c.id}-${i}" value="${i}" required>
                        <label class="likert-label" for="${c.id}-${i}">${i}</label>
                    </div>
                `;
            }

            group.innerHTML = `
                <div class="criterion-title">${c.title}</div>
                <div class="likert-scale">
                    ${radiosHtml}
                </div>
                <div class="likert-legend">
                    <span>${c.minLabel}</span>
                    <span>${c.maxLabel}</span>
                </div>
            `;
            criteriaContainer.appendChild(group);
        });
    }

    // --- Navigation & UI ---
    function showScreen(screenName) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[screenName].classList.add('active');
    }

    function loadCurrentPatient() {
        const currentPdf = state.remainingPdfs[0];

        // Update UI
        pdfViewer.src = currentPdf + '#toolbar=0&navpanes=0';

        const evaluatedCount = state.totalPdfs - state.remainingPdfs.length;
        const currentPatientNum = evaluatedCount + 1;
        progressIndicator.textContent = `Patient ${currentPatientNum} von ${state.totalPdfs}`;
        progressBar.style.width = `${(currentPatientNum / state.totalPdfs) * 100}%`;

        evalForm.reset();

        // Hide prev button as we don't allow going back to already saved ones in cloud mode
        btnPrev.style.display = 'none';
    }

    // --- Event Listeners ---
    startForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = doctorNameInput.value.trim();
        if (!name) return;

        const btnSubmit = startForm.querySelector('button[type="submit"]');
        const originalText = btnSubmit.textContent;
        btnSubmit.textContent = 'Lade Fortschritt...';
        btnSubmit.disabled = true;

        try {
            // Fetch evaluated PDFs for this doctor
            const { data, error } = await supabase
                .from('evaluations')
                .select('pdf_filename')
                .eq('doctor_name', name);

            if (error) throw error;

            const evaluatedFilenames = data.map(row => row.pdf_filename);

            // Filter pdfFiles to get remaining ones
            let remaining = pdfFiles.filter(pdfPath => {
                const filename = pdfPath.split('/').pop();
                return !evaluatedFilenames.includes(filename);
            });

            // Randomize the order (Fisher-Yates Shuffle)
            for (let i = remaining.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
            }

            state.remainingPdfs = remaining;

            state.doctorName = name;

            if (state.remainingPdfs.length === 0) {
                showScreen('end');
            } else {
                showScreen('eval');
                loadCurrentPatient();
            }
        } catch (err) {
            console.error("Fehler beim Laden:", err);
            alert("Fehler beim Laden des Fortschritts aus der Cloud.");
        } finally {
            btnSubmit.textContent = originalText;
            btnSubmit.disabled = false;
        }
    });

    evalForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btnNext = document.getElementById('btn-next');
        const originalText = btnNext.textContent;
        btnNext.textContent = 'Speichert...';
        btnNext.disabled = true;
        
        // Gather responses
        const formData = new FormData(evalForm);
        const responses = {};
        criteria.forEach(c => {
            responses[c.id] = formData.get(c.id);
        });

        const currentPdfPath = state.remainingPdfs[0];
        const pdfName = currentPdfPath.split('/').pop();
        const timestamp = new Date().toISOString();

        try {
            const { error } = await supabase
                .from('evaluations')
                .insert([
                    { 
                        doctor_name: state.doctorName, 
                        pdf_filename: pdfName, 
                        c1: parseInt(responses.c1),
                        c2: parseInt(responses.c2),
                        c3: parseInt(responses.c3),
                        c4: parseInt(responses.c4),
                        c5: parseInt(responses.c5),
                        created_at: timestamp
                    }
                ]);
            
            if (error) throw error;

            // Erfolgreich gespeichert, entferne PDF aus verbleibender Liste
            state.remainingPdfs.shift();

            if (state.remainingPdfs.length === 0) {
                showScreen('end');
            } else {
                loadCurrentPatient();
            }
        } catch (err) {
            console.error("Supabase Error:", err);
            alert("Fehler beim Speichern in der Cloud. Bitte prüfen Sie Ihre Verbindung.");
        } finally {
            btnNext.textContent = originalText;
            btnNext.disabled = false;
        }
    });

    btnRestart.addEventListener('click', () => {
        state = { doctorName: '', remainingPdfs: [], totalPdfs: pdfFiles.length };
        doctorNameInput.value = '';
        showScreen('start');
    });
});
