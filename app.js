document.addEventListener('DOMContentLoaded', () => {
    // --- Supabase Setup ---
    // BITTE HIER IHRE SUPABASE DATEN EINTRAGEN:
    const SUPABASE_URL = 'https://kanfloefkfezsbadtlcu.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_4fgeYxrBBxSJYe0qDm4uxw_GEnCvrqD';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // --- Configuration ---
    // List of PDFs
    // BEGIN_PATIENT_FILES
    const pdfFiles = [
        'data/real/Aleksandra_Scholtz_b4ad84e3.pdf',
        'data/real/Alina_Trupp_05be053a.pdf',
        'data/real/Annekatrin_Hörle_5fc6c362.pdf',
        'data/real/Annelene_Mühle_4a628506.pdf',
        'data/real/Annerose_Metz_de2e767b.pdf',
        'data/real/Ariane_Zänker_e1115fc6.pdf',
        'data/real/Aurelia_Sölzer_b3fdb3ea.pdf',
        'data/real/Bertha_Preiß_542dd887.pdf',
        'data/real/Danica_Trupp_88200b02.pdf',
        'data/real/Eberhardt_Linke_99a4a5b1.pdf',
        'data/real/Ekrem_Bruder_2a08ee7c.pdf',
        'data/real/Elfi_Langern_6d3cce03.pdf',
        'data/real/Elizabeth_Eigenwillig_deaba184.pdf',
        'data/real/Elmar_Hermann_9465d03a.pdf',
        'data/real/Felicitas_Hörle_51082b16.pdf',
        'data/real/Folker_Bohnbach_591876a3.pdf',
        'data/real/Gitte_auch Schlauchin_0e56fab7.pdf',
        'data/real/Hanne-Lore_Gunpf_560429b5.pdf',
        'data/real/Hans-Georg_Peukert_f93d5ba6.pdf',
        'data/real/Hassan_Kranz_67cf6099.pdf',
        'data/real/Hinrich_Trommler_b27c70c1.pdf',
        'data/real/Hubertus_Budig_2ff062e4.pdf',
        'data/real/Ilona_Wulff_24d884ca.pdf',
        'data/real/Jozef_Briemer_89b90a71.pdf',
        'data/real/Karl-August_Bloch_861ceca6.pdf',
        'data/real/Kati_Segebahn_4b3f609e.pdf',
        'data/real/Kirstin_Nohlmans_77a6099b.pdf',
        'data/real/Kristin_Mende_cc6db108.pdf',
        'data/real/Marcus_Hövel_5563e54b.pdf',
        'data/real/Nick_Dowerg_5ecf8cd4.pdf',
        'data/real/Oswin_Carsten_90dd9b7d.pdf',
        'data/real/Piotr_Döring_0b95337e.pdf',
        'data/real/Rosemarie_Rogge_ec7ebdcc.pdf',
        'data/real/Steve_Berger_dfdb2d22.pdf',
        'data/real/Tatjana_Kensy_b93a837d.pdf',
        'data/real/Traugott_Haering_23cf7bd7.pdf',
        'data/real/Viktor_Sager_871e8f09.pdf',
        'data/real/Vincent_Wagner_d5dcc4a3.pdf',
        'data/real/Wulf_Reinhardt_92c7f2e5.pdf',
        'data/real/Yasemin_Hornich_1fdb52db.pdf',
        'data/synthea/Alexander_Lehmann_b68fb75d.pdf',
        'data/synthea/Anke_Peters_630dc962.pdf',
        'data/synthea/Bernd_Heinrich_5a3366ac.pdf',
        'data/synthea/Clara_Haas_82758bb9.pdf',
        'data/synthea/Daniela_Braun_da478352.pdf',
        'data/synthea/Dieter_Wagner_b034fd9f.pdf',
        'data/synthea/Dirk_Lorenz_80b0a416.pdf',
        'data/synthea/Elke_Haas_fe15482d.pdf',
        'data/synthea/Elke_Hartmann_e09461fc.pdf',
        'data/synthea/Emil_Werner_5f5d0f40.pdf',
        'data/synthea/Gerhard_Fischer_02b9e1bc.pdf',
        'data/synthea/Hans_Winter_87899c90.pdf',
        'data/synthea/Helmut_Maier_2bcf177b.pdf',
        'data/synthea/Hermann_Hartmann_0b96a232.pdf',
        'data/synthea/Ida_Roth_ab613a8e.pdf',
        'data/synthea/Jonas_Weiß_f7e8239a.pdf',
        'data/synthea/Julian_Jung_6e7e0898.pdf',
        'data/synthea/Jürgen_Baumann_33a1f41a.pdf',
        'data/synthea/Karin_Krämer_d0ba9874.pdf',
        'data/synthea/Katharina_Fuchs_29225702.pdf',
        'data/synthea/Katja_Schuster_2d23b30f.pdf',
        'data/synthea/Klaus_Klein_81ba987f.pdf',
        'data/synthea/Martha_Schulz_e3c366a8.pdf',
        'data/synthea/Mathilda_Wolf_c197f39f.pdf',
        'data/synthea/Maximilian_Neumann_f301a572.pdf',
        'data/synthea/Mila_Seiler_679c662b.pdf',
        'data/synthea/Patrick_Becker_335fdc18.pdf',
        'data/synthea/Paul_Jäger_27bc3e57.pdf',
        'data/synthea/Peter_Herrmann_2aac3d4b.pdf',
        'data/synthea/Peter_Krämer_7f0cd5db.pdf',
        'data/synthea/Petra_Koch_46caba0e.pdf',
        'data/synthea/Renate_Seidel_4c6961af.pdf',
        'data/synthea/Sandra_Meier_736b3c5c.pdf',
        'data/synthea/Sonja_Herrmann_6186127a.pdf',
        'data/synthea/Susanne_Fischer_8692f143.pdf',
        'data/synthea/Susanne_Möller_3beb9c4b.pdf',
        'data/synthea/Thomas_Stein_4bda8dc8.pdf',
        'data/synthea/Thorsten_Huber_4e7aab62.pdf',
        'data/synthea/Tim_Jäger_23569092.pdf',
        'data/synthea/Yvonne_Martin_2a675760.pdf',
        'data/llm/Alexander_Müller_a5b4dc09.pdf',
        'data/llm/Anna_Müller_eb9ad221.pdf',
        'data/llm/Felix_Hoffmann_91bb8f53.pdf',
        'data/llm/Johanna_Bauer_73a8883f.pdf',
        'data/llm/Johanna_Klein_f0728ff8.pdf',
        'data/llm/Johanna_Müller_9129c206.pdf',
        'data/llm/Johanna_Wolf_76caf881.pdf',
        'data/llm/Jonas_Wagner_0c826f1d.pdf',
        'data/llm/Jonas_Wolf_c17419c6.pdf',
        'data/llm/Julia_Schulz_da33635d.pdf',
        'data/llm/Lea_Koch_e3e4e233.pdf',
        'data/llm/Lea_Weber_23b87261.pdf',
        'data/llm/Lena_Fischer_dfcc698a.pdf',
        'data/llm/Lena_Hoffmann_0f112a3d.pdf',
        'data/llm/Lena_Wagner_b0528e59.pdf',
        'data/llm/Leon_Becker_a8691325.pdf',
        'data/llm/Leon_Müller_0dd6e039.pdf',
        'data/llm/Leon_Wagner_8e22dd18.pdf',
        'data/llm/Lisa_Richter_0d231a25.pdf',
        'data/llm/Lisa_Schmidt_411f1d89.pdf',
        'data/llm/Lisa_Schneider_cb5fb015.pdf',
        'data/llm/Lukas_Fischer_a299776f.pdf',
        'data/llm/Lukas_Hoffmann_e83c15cf.pdf',
        'data/llm/Lukas_Wagner_c04da995.pdf',
        'data/llm/Maria_Becker_c277f224.pdf',
        'data/llm/Maria_Weber_cf7c9bfd.pdf',
        'data/llm/Marie_Müller_ca2d0495.pdf',
        'data/llm/Marie_Richter_3deb4dd0.pdf',
        'data/llm/Marie_Weber_95699e64.pdf',
        'data/llm/Max_Schneider_f7a257d3.pdf',
        'data/llm/Max_Wolf_f1625f53.pdf',
        'data/llm/Michael_Hoffmann_f7664f83.pdf',
        'data/llm/Michael_Schulz_d390cc9f.pdf',
        'data/llm/Paul_Becker_63cb13e6.pdf',
        'data/llm/Paul_Koch_50eed607.pdf',
        'data/llm/Paul_Weber_61e9e42a.pdf',
        'data/llm/Sabine_Bauer_8b64aae6.pdf',
        'data/llm/Sarah_Wagner_8efa48c0.pdf',
        'data/llm/Stefan_Müller_8e4e1ca0.pdf',
        'data/llm/Tobias_Wagner_c9d9c368.pdf'
    ];
    // END_PATIENT_FILES

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
