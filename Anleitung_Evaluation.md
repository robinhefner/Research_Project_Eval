# Kurzanleitung: Patientendaten Evaluation

Herzlich willkommen und vielen Dank für deine Unterstützung bei unserem Forschungsprojekt! 

Diese Webanwendung dient dazu, Patientenakten strukturiert von medizinischem Fachpersonal bewerten zu lassen. Deine fachliche Einschätzung hilft uns, die Qualität und den Realismus der Daten zu evaluieren.

## 1. Anmeldung & Start
1. Öffne den Link zur Evaluations-Plattform. (https://eval.rhefner.de/)
2. Gib das Passwort **ResearchProject2026** ein und klicke auf **"Freischalten"**.
3. Wähle auf der Startseite den dir zugewiesenen Arzt aus dem Dropdown-Menü aus.
4. Klicke auf **"Evaluation starten"**.

*Hinweis:* Bitte achte darauf, bei jeder Sitzung den dir zugewiesenen Arzt auszuwählen, damit dein bisheriger Fortschritt aus der Cloud korrekt geladen wird.

## 2. Die Bewertungsansicht
Nach dem Start siehst du einen geteilten Bildschirm:
* **Linke Seite (Klinische Akte):** Hier wird die Patientenakte als PDF angezeigt. Du kannst in dem Dokument wie gewohnt lesen und scrollen.
* **Rechte Seite (Bewertung):** Hier findest du einen Fragebogen mit 4 wissenschaftlichen Kriterien (Likert-Skala 1 bis 5). Bitte bewerte die aktuell angezeigte Patientenakte hinsichtlich aller Punkte.
  
  **Hilfreiche Zusatzfunktionen:**
  * **Erklärungen / Tooltips (`i`):** Neben jedem Kriterium befindet sich ein kleines `i`-Symbol. Halte die Maus darüber, um eine genaue Erklärung zu sehen, was mit dem jeweiligen Kriterium gemeint ist.
  * **Optionale Kommentare (Freitext):** Unter jeder Bewertungsskala findest du ein Freitextfeld für optionale Anmerkungen.
    
    >
    > **Nutze die Kommentarfelder gerne intensiv!** Falls du eine Bewertung vergibst, die vom Optimum abweicht (z. B. eine 2 oder 3), oder wenn dir konkrete medizinische Ungereimtheiten, auffällige Zeitabstände oder unplausible Medikamentendosen ins Auge springen, trage dies bitte kurz ein. Deine Anmerkungen helfen uns enorm dabei, deine Entscheidungen medizinisch nachzuvollziehen.
    > **Tipp zur Referenzierung:** Du kannst gerne die **IDs bzw. Zeilenschlüssel aus den Tabellen des PDF-Dokuments** (z. B. bei Medikamenten, Prozeduren oder Laborwerten) nutzen, um dich im Kommentar präzise auf einzelne Zeilen zu beziehen!

  **Bedeutung der Bewertungsskala (1 bis 5):**
  Die Bewertung erfolgt über eine 5-stufige Likert-Skala von **1** (schlechtester Wert) bis **5** (bester Wert):
  * **1 = Sehr negativ** (völlig unplausibel, extrem inkonsistent, unlogisch oder unbrauchbar)
  * **2 = Eher negativ** (deutliche Schwächen und Widersprüche)
  * **3 = Neutral / Teilweise** (teilweise plausibel/konsistent, aber mit Optimierungsbedarf)
  * **4 = Eher positiv** (gute Qualität mit nur minimalen, vernachlässigbaren Unstimmigkeiten)
  * **5 = Sehr positiv** (absolut lebensecht, fehlerfrei und nicht von einer echten Akte zu unterscheiden)

---

## 3. Die 4 Bewertungskriterien im Detail

Hier findest du eine detaillierte Beschreibung der Kriterien und praxisnahe Beispiele zur Orientierung:

### Kriterium 1: Klinische Plausibilität
* **Beschreibung:** Bewertet, ob Symptome, Diagnosen und Behandlungen medizinisch logisch zusammenpassen.
* **Beispiele:**
  * **Wert 1 (Sehr unplausibel):** Ein Patient stellt sich mit einem leichten Schnupfen vor und erhält am selben Tag ohne weitere Diagnostik eine offene Herzoperation. Oder ein Patient mit bekanntem Bluthochdruck erhält zur Senkung des Blutdrucks ein Parkinson-Medikament, ohne dass eine entsprechende Begleiterkrankung vorliegt.
  * **Wert 3 (Teilweise plausibel):** Die Diagnose passt grundsätzlich zur verordneten Therapie, aber es fehlen wesentliche Begleitmedikamente oder es werden unübliche Wirkstoffkombinationen ohne ersichtlichen Grund verordnet.
  * **Wert 5 (Sehr plausibel):** Ein Patient mit Verdacht auf einen Herzinfarkt erhält eine absolut leitliniengerechte Akutdiagnostik (EKG, Labor) und die standardmäßige Therapie (ASS, Heparin, Koronarangiographie).

### Kriterium 2: Longitudinale Konsistenz
* **Beschreibung:** Prüft, ob der zeitliche Verlauf der Erkrankung und Behandlung in sich stimmig ist (keine plötzlichen unlogischen Sprünge oder widersprüchliche Krankheitsverläufe über die Jahre hinweg).
* **Beispiele:**
  * **Wert 1 (Sehr inkonsistent):** Biologisch unmögliche Krankheitsverläufe oder zeitliche Widersprüche. Beispielsweise eine irreversible chronische Erkrankung (z. B. eine fortgeschrittene Niereninsuffizienz) verschwindet plötzlich und spurlos aus dem Verlauf, ohne dass eine Transplantation stattfand.
  * **Wert 3 (Teilweise konsistent):** Der rote Faden des Verlaufs ist erkennbar, zeigt aber Lücken. Beispielsweise wird ein Diabetes mellitus über 10 Jahre dokumentiert, im mittleren Zeitraum fehlen jedoch für 3 Jahre plötzlich jegliche Medikationsverschreibungen oder Kontrollen, bevor sie später unverändert fortgesetzt werden.
  * **Wert 5 (Sehr konsistent):** Alle chronischen Erkrankungen, Behandlungen und Kontrollen bauen über die Jahre hinweg logisch und lückenlos aufeinander auf und zeigen einen lebensechten, physiologisch schlüssigen Alterungs- und Krankheitsverlauf.

>
> **💡 Wichtige Abgrenzung zwischen Plausibilität (Kriterium 1) und Konsistenz (Kriterium 2):**
> * **Klinische Plausibilität (Kriterium 1)** fragt: *„Macht das dokumentierte Vorgehen **medizinisch** Sinn?“*
>   * *Beispiel:* Ist die Behandlung eines Harnwegsinfekts mit Antibiotikum X leitliniengerecht? (Ja = Plausibel).
> * **Longitudinale Konsistenz (Kriterium 2)** fragt: *„Stimmen die **Daten im zeitlichen Verlauf** der Akte überein?“*
>   * *Beispiel:* Bleibt eine einmal dokumentierte irreversible Erkrankung (z. B. Demenz) im Verlauf der Folgejahre bestehen und wird fortgeführt? Oder verhalten sich die Werte über die Zeit hinweg biologisch logisch? (Ja = Konsistent).


### Kriterium 3: Zeitlich logische Abfolge
* **Beschreibung:** Bewertet die chronologische Reihenfolge der Ereignisse (z. B. Diagnostik vor Therapie, logische Abstände der Kontrollen).
* **Beispiele:**
  * **Wert 1 (Sehr unlogisch):** Eine Chemotherapie wird gestartet, bevor überhaupt die Diagnostik oder die Erstdiagnose in der Akte stattgefunden hat. Oder das dokumentierte Datum einer Entlassung liegt zeitlich vor dem Aufnahmedatum.
  * **Wert 3 (Teilweise logisch):** Die Abfolge der Schritte stimmt, aber die zeitlichen Abstände sind unrealistisch (z. B. eine routinemäßige postoperative Kontrolle nach einer schweren OP erfolgt laut Akte erst nach 3 Jahren statt nach 3 Monaten).
  * **Wert 5 (Sehr logisch):** Logischer zeitlicher Ablauf von Erstvorstellung, Diagnostik, Diagnosestellung, Therapieeinleitung und Nachsorgekontrollen mit absolut realitätsnahen Zeitintervallen.

### Kriterium 4: Gesamteindruck
* **Beschreibung:** Ihre globale Einschätzung der Qualität und des Realismus dieser Patientenakte.
* **Beispiele:**
  * **Wert 1 (Schlecht):** Die Akte ist medizinisch unbrauchbar, enthält eklatante logische Widersprüche und wirkt völlig künstlich.
  * **Wert 3 (Mittelmäßig):** Die Akte hat zwar einige Schwachstellen (z. B. fehlende Details oder unübliche zeitliche Abstände), könnte aber mit kleineren Korrekturen für Forschungszwecke nützlich sein.
  * **Wert 5 (Hervorragend):** Die Akte ist von einer echten medizinischen Patientenakte nicht zu unterscheiden und eignet sich perfekt für Lehre, Forschung und Simulation.

---

## 4. Speichern & Fortschritt
Sobald du alle Kriterien für einen Patienten ausgefüllt hast, klicke unten rechts auf **"Speichern & Weiter"**.
* **Zufällige Reihenfolge:** Um Verzerrungen durch die Reihenfolge zu vermeiden, werden dir die Patientenakten komplett zufällig präsentiert.
* **Keine doppelten Bewertungen:** Das System merkt sich genau, welche Akten du bereits bewertet hast. Dir wird keine Akte zweimal vorgelegt.
* **Endgültige Speicherung:** Bitte beachte, dass eine Bewertung nach dem Klick auf "Speichern & Weiter" endgültig an die Datenbank gesendet wird und danach nicht mehr nachträglich verändert werden kann.
* **Jederzeit pausieren:** Dein Fortschritt wird nach jedem Klick auf "Speichern & Weiter" automatisch in der Cloud gespeichert. Du kannst den Browser jederzeit schließen. Wenn du später (oder sogar an einem anderen Computer) zurückkehrst und deinen zugewiesenen Arzt erneut auswählst, machst du exakt da weiter, wo du aufgehört hast!

## 5. Abschluss
Oben in der Mitte siehst du eine Fortschrittsanzeige (z.B. "Patient 4 von 120"). Sobald du alle verfügbaren Patientenakten bewertet hast, gelangst du automatisch zu einem Abschlussbildschirm. Du musst danach nichts weiter tun, all deine Daten sind sicher übermittelt worden.

Vielen Dank für deine wertvolle Zeit und Expertise!
