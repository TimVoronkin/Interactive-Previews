---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #293800
color: #e8f0d4
style: |
  section {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    background: radial-gradient(circle at 0% 0%, #4a6600 0%, #293800 65%, #121a00 100%);
    color: #e8f0d4;
    padding: 50px;
    font-size: 22px;
  }

  section::after {
    color: #829c38 !important;
    font-size: 14px;
  }

  h1 {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #B8F500;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    border-bottom: 2px solid #4a6600;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  h2 {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #B8F500;
    font-size: 30px;
    font-weight: 600;
    margin-top: 0;
  }

  h3 {
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #B8F500;
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p, li {
    line-height: 1.5;
    color: #cbdcb9;
  }

  ul {
    margin-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  li strong {
    color: #e8f0d4;
  }

  li::marker {
    color: #B8F500;
  }

  strong {
    color: #e8f0d4;
    font-weight: 700;
  }

  a {
    color: #B8F500;
    text-decoration: none;
  }

  .highlight {
    color: #B8F500;
    font-weight: bold;
  }

  .accent {
    color: #B8F500;
  }

  .success {
    color: #B8F500;
    font-weight: bold;
  }

  .fail {
    color: #ff5555;
    font-weight: bold;
  }

  .title-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: radial-gradient(circle at center, #293800 0%, #121a00 100%);
    padding: 50px;
  }

  .title-slide h1 {
    font-size: 44px;
    color: #B8F500;
    border: none;
    margin-bottom: 10px;
    text-align: center;
    display: block;
    line-height: 1.2;
    font-weight: 800;
  }

  .title-slide h2 {
    font-size: 22px;
    color: #cbdcb9;
    margin-bottom: 30px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .meta-container {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    width: 100%;
    margin-top: 30px;
    border-top: 2px solid #4a6600;
    padding-top: 25px;
  }

  .meta-left, .meta-right {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: left;
  }

  .meta-right {
    text-align: right;
  }

  .meta-label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #829c38;
    margin-bottom: 2px;
  }

  .meta-value {
    font-size: 25px;
    color: #e8f0d4;
    font-weight: 600;
    line-height: 1.3;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
  }

  .grid-2-large-right {
    display: grid;
    grid-template-columns: 0.75fr 1.25fr;
    gap: 30px;
    align-items: center;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 15px;
  }

  img {
    max-height: 320px;
    width: auto;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    border: 1px solid #4a6600;
    display: block;
    margin: 0 auto;
  }

  img.full-image {
    max-height: 480px !important;
    border-radius: 8px;
    border: 1px solid #4a6600;
    box-shadow: 0 15px 30px rgba(0,0,0,0.6);
  }

  .img-schema {
    max-height: 290px;
    background: #293800;
    padding: 6px;
  }

  .card {
    background: rgba(41, 56, 0, 0.6);
    border: 1px solid #4a6600;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }

  .card h3 {
    margin-top: 0;
    margin-bottom: 8px;
    border-bottom: 1px solid #4a6600;
    padding-bottom: 6px;
  }

  .card p {
    margin: 0 0 10px 0;
    font-size: 25px;
    color: #cbdcb9;
  }

  .card ul {
    font-size: 20px;
    margin-left: 15px;
    padding: 0;
    list-style-type: none;
  }

  .card li {
    margin-bottom: 6px;
  }

  .card-highlight {
    border-color: #B8F500;
    background: rgba(184, 245, 0, 0.05);
  }

  .ui-col {
    text-align: center;
  }

  .ui-col img {
    max-height: 330px;
  }

  .caption-footer {
    font-size: 14px;
    text-align: center;
    margin-top: 15px;
    color: #829c38;
  }

  .screenshot-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 40px;
  }

  .screenshot-slide h1 {
    font-size: 34px;
    margin-bottom: 10px;
    width: 100%;
  }

  .image-caption {
    margin-top: 10px;
    font-size: 16px;
    color: #B8F500;
    text-align: center;
    font-weight: 600;
  }

  .compact-slide {
    padding: 35px 50px;
  }

  .compact-slide h1 {
    font-size: 34px;
    margin-bottom: 12px;
  }

  .question-box {
    background: rgba(184, 245, 0, 0.08) !important;
    border: 2px solid #B8F500 !important;
    border-radius: 10px;
    padding: 12px 18px;
    margin-bottom: 15px;
  }

  .question-box h4 {
    margin: 0 0 4px 0;
    color: #B8F500;

    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .question-box p {
    color: #e8f0d4;
    margin: 0;
    font-weight: 700;
    line-height: 1.3;
  }

  .answer-box {
    background: rgba(41, 56, 0, 0.5) !important;
    border: 1px solid #4a6600 !important;
    border-radius: 10px;
    padding: 12px 18px;
  }

  .answer-box h4 {
    margin: 0 0 8px 0;
    color: #cbdcb9;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-bottom: 1px solid #4a6600;
    padding-bottom: 4px;
  }

  .answer-box ul {
    margin-left: 15px;
    padding: 0;
  }

  .answer-box li {
    margin-bottom: 6px;
    line-height: 1.4;
    color: #cbdcb9;
  }

  section.thank-you-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: radial-gradient(circle at center, #293800 0%, #121a00 100%);
    border: 6px solid #4a6600;
    border-radius: 16px;
    padding: 60px;
  }

  section.thank-you-slide h1 {
    font-size: 60px;
    color: #B8F500;
    border: none;
    margin-bottom: 20px;
    padding-bottom: 0;
    font-weight: 800;
  }

  section.thank-you-slide p {
    font-size: 26px;
    color: #e8f0d4;
    margin: 5px 0;
    font-weight: 600;
  }

  header {
    font-size: 14px;
    color: #829c38;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  footer {
    font-size: 12px;
    color: #829c38;
  }
---

<!-- _class: title-slide -->
<!-- _paginate: false -->

# Rozšíření webového prohlížeče pro interaktivní náhledy souborů

## Obhajoba bakalářské práce

<div class="meta-container">
  <div class="meta-left">
    <div>
      <div class="meta-label">Autor práce</div>
      <div class="meta-value">Tymofii Voronkin</div>
    </div>
    <div>
      <div class="meta-label">Vedoucí práce</div>
      <div class="meta-value">Mgr. Tomáš Hudec</div>
    </div>
  </div>
  <div class="meta-right">
    <div>
      <div class="meta-label">Instituce</div>
      <div class="meta-value">Univerzita Pardubice<br>Fakulta Elektrotechniky a Informatiky</div>
    </div>
    <div>
      <div class="meta-label">Datum obhajoby</div>
      <div class="meta-value">3. června 2026</div>
    </div>
  </div>
</div>

---

# Cíle bakalářské práce

- **Vývoj moderního rozšíření** pro webové prohlížeče (Google Chrome a Mozilla Firefox).
- **Zvýšení uživatelského komfortu (UX)** a efektivity při každodenním procházení webu.
- **Interaktivní náhledy na najetí myši** (hover) bez nutnosti stahovat soubory na disk nebo otevírat nové panely.
- **Podpora různých formátů** souborů s důrazem na obrázky ve vysokém rozlišení a dokumenty PDF.
- **Možnost pokročilé konfigurace** (filtrování domén, zpoždění zobrazení, klávesové modifikátory).

---

# Teoretická základna

<div class="grid-2">
<div>

### Manifest Version 3 (MV3)

- Moderní standard pro webová rozšíření.
- Využití event-driven **Service Workerů** běžících na pozadí (výrazná úspora paměti RAM).
- Vyšší bezpečnost a kontrola oprávnění.

### Responzivní obrázky

- Analýza atributů `srcset` a `sizes`.
- Extrakce a načtení obrázků v **nejvyšším dostupném rozlišení**.

</div>
<div>

### Události v JavaScriptu (DOM)

- Obsluha událostí `mouseover`, `mouseout`, `mousemove`.
- **Event Delegation** pro odchytávání událostí na celém dokumentu.
- Optimalizace přes **debounce/throttle** proti zamrzání UI.

### Asynchronní Fetch API

- Použití `Promises` a `async/await` pro stahování dat bez blokování hlavního vlákna.

</div>
</div>

---

# Analýza existujících řešení

<div class="grid-3">
<div class="card">
  <h3>Hover Zoom+</h3>
  <p>Open-source s dlouhou historií</p>
  <ul>
    <li><span class="success">✔</span> Podpora mnoha webů</li>
    <li><span class="fail">❌</span> Zastaralé rozhraní</li>
    <li><span class="fail">❌</span> Nepřehledná nastavení</li>
    <li><span class="fail">❌</span> Chybí podpora PDF</li>
  </ul>
</div>

<div class="card">
  <h3>Imagus Reborn</h3>
  <p>Komunitní nástupce Imagusu</p>
  <ul>
    <li><span class="success">✔</span> Rychlá detekce (Sieve)</li>
    <li><span class="fail">❌</span> Složitá pravidla Sieve</li>
    <li><span class="fail">❌</span> Projekt upadá (abandon)</li>
    <li><span class="fail">❌</span> Chybí podpora PDF</li>
  </ul>
</div>

<div class="card card-highlight">
  <h3>Interactive Previews</h3>
  <p>Moderní design a čisté UI/UX</p>
  <ul>
    <li><span class="success">✔</span> Nativní podpora PDF</li>
    <li><span class="success">✔</span> Plná kompatibilita s MV3</li>
    <li><span class="success">✔</span> RegExp filtry domén</li>
    <li><span class="success">✔</span> Rychlá odezva bez záseků</li>
  </ul>
</div>
</div>

---

# Praktická realizace — Architektura

<div class="grid-2">
<div>

- **Content Scripts**: Skripty injektované do stránek. Detekují kurzor, vytvářejí náhledy a obsluhují panel Info Bar.
- **Service Worker (Background)**: Běží na pozadí jako proxy pro síťové požadavky (obcházení restrikcí CORS).
- **Uživatelské rozhraní**: Popup okno pro rychlé akce a Options stránka pro plnou konfiguraci.
- **chrome.storage.sync**: Asynchronní ukládání a synchronizace nastavení napříč prohlížeči.

</div>
<div>

![Architektura rozšíření](../Documentation/LaTeX/img/diagram_architecture.png)

</div>
</div>

---

# Uživatelské rozhraní (UI)

<div class="grid-2">
<div>

### Options & Popup

- **Popup okno**: Rychlý přepínač stavu rozšíření na aktuální doméně s podporou barevných motivů.
- **Options stránka**: Nabízí pokročilou konfiguraci zpoždění (delay), modifikátorů kláves, typů souborů a struktury panelu Info Bar.
- **Filtrování domén**: Režimy Blocklist a Allowlist s přímou podporou **regulárních výrazů (RegExp)** pro snadné pokrytí celých skupin webů.

</div>
<div class="ui-col">

![Options a Popup](../assets/promo-materials/screenshot/promo-screenshot_3.jpg)

</div>
</div>

---

# Integrace a zobrazení PDF

<div class="grid-2">
<div>

- **Detekce odkazů**: Rozpoznání odkazů směřujících na `.pdf` soubory.
- **Asynchronní stahování**: Service Worker na pozadí načte první bloky dat přes Fetch API.
- **Knihovna PDF.js**: Výpočetně náročné dekódování probíhá ve **Web Workeru**, což brání zásekům rozhraní.
- **Canvas Rendering**: První strana dokumentu se vykreslí na dynamický `<canvas>`.
- **Textová a odkazová vrstva**: Umožňuje přímý výběr textu a proklik odkazů uvnitř náhledu.

</div>
<div>

![Diagram sekvence PDF](../Documentation/LaTeX/img/diagram_sequence-pdf.png)

</div>
</div>

---

<!-- _class: screenshot-slide -->

# Testování: Náhledy PDF (Moodle UPCE)

<img src="../assets/promo-materials/screenshot/promo-screenshot_2.jpg" class="full-image" alt="Moodle PDF Preview">

<div class="image-caption">
  Okamžité zobrazení první strany studijních materiálů v e-learningovém systému bez stahování na disk.
</div>

---

<!-- _class: screenshot-slide -->

# Testování: Náhledy produktů (E-shop Alza)

<img src="../assets/promo-materials/screenshot/promo-screenshot_5.jpg" class="full-image" alt="Alza Image Preview">

<div class="image-caption">
  Zobrazení produktových fotografií v nejvyšším rozlišení s plynulým sledováním kurzoru.
</div>

---

# Závěr a budoucí vývoj

<div class="grid-2">
<div>

### Zhodnocení výsledků

- Cíle bakalářské práce byly **plně splněny**.
- Bylo vyvinuto bezpečné, uživatelsky přívětivé a výkonově optimalizované rozšíření.
- Odstraněna nutnost stahování nepotřebných souborů při rychlé inspekci obsahu.
- Úspěšně otestována komunikace komponent a stabilita na produkčních portálech.

</div>
<div>

### Směr dalšího vývoje

- **HTTP Range Requests**: Stahování pouze nezbytných úvodních dat u obřích PDF dokumentů.
- **Podpora kancelářských formátů**: Analýza bezpečného offline renderování `.docx`, `.xlsx` apod.
- **Chrome Web Store / Firefox Add-ons**: Dokončení schvalovacího procesu pro veřejné stažení.

</div>
</div>

---

<!-- _class: compact-slide -->

# Otázky k obhajobě (1/3)

<div class="question-box">
  <p>Jak obtížné by bylo implementovat zmíněné náměty na vylepšení?</p>
</div>

<div class="answer-box">
  <h4>Odpověď:</h4>
  <ul>
    <li><strong>Mute video náhledy</strong>: <em>Nízká obtížnost</em>. Logika je obdobná jako u obrázků, avšak videa byla záměrně vynechána kvůli úspoře RAM a zamezení rušivého přehrávání zvuku.</li>
    <li><strong>HTTP Range Requests (pro PDF)</strong>: <em>Střední obtížnost</em>. Vyžaduje úpravu Service Workeru pro stahování dat po částech a konfiguraci parseru PDF.js pro asynchronní načítání bloků dat.</li>
    <li><strong>Podpora DOCX / XLSX</strong>: <em>Vysoká obtížnost</em>. Offline renderování v prohlížeči vyžaduje integraci rozsáhlých knihoven (nárůst velikosti kódu). Použití externích API (např. Google Docs Viewer) je jednodušší, ale nese rizika narušení soukromí.</li>
  </ul>
</div>

---

<!-- _class: compact-slide -->

# Otázky k obhajobě (2/3)

<div class="question-box">
  <p>Text práce byl napsán v LaTeXu. Jak toto rozhodnutí hodnotíte zpětně z hlediska přínosu a obtížnosti zpracování?</p>
</div>

<div class="answer-box">
  <h4>Odpověď:</h4>
  <ul>
    <li><strong>Zpětné hodnocení</strong>: Rozhodnutí hodnotím <strong>velmi pozitivně</strong>. LaTeX zajistil bezchybný a profesionální typografický vzhled podle šablony UPCE.</li>
    <li><strong>Přínosy</strong>: Automatizovaná správa citací (BibLaTeX), křížových odkazů, obsahu a rejstříků. Skvělá podpora pro vkládání ukázek zdrojového kódu (balíček <code>listings</code>).</li>
    <li><strong>Obtížnost a workflow</strong>: Náročnost spočívala v počáteční křivce učení a čase kompilace. To bylo vyřešeno spuštěním kontinuálního překladu pomocí <code>latexmk -pdf -pvc main.tex</code> v kombinaci se čtečkou SumatraPDF, která nezamyká soubory pro zápis a okamžitě zobrazuje změny.</li>
  </ul>
</div>

---

<!-- _class: compact-slide -->

# Otázky k obhajobě (3/3)

<div class="question-box">
  <p>Počítáte se zveřejněním na oficiálních stránkách rozšíření pro Firefox / Chrome?</p>
</div>

<div class="answer-box">
  <h4>Odpověď:</h4>
  <div class="grid-2">
  <ul>
    <li><strong>Chrome Web Store</strong>: Dne <strong>28. 5. 2026</strong> byla odeslána žádost o schválení. Rozšíření aktuálně prochází schvalovacím procesem.</li>
    <li><strong>Doba schvalování</strong>: Google upozornil na delší dobu schvalování kvůli <code>&lt;all_urls&gt;</code> v host permissions, která jsou však nezbytná pro fungování náhledů na libovolném webu.</li>
    <li><strong>Iniciativa</strong>: Mým cílem bylo projít si kompletní produkční cyklus od vývoje po vydání, včetně tvorby vizuálních promo-materiálů a vyplnění obchodních deklarací.</li>
  </ul>

<img src="../assets/promo-materials/key-art/small-tile.jpg">

</div>
</div>

---

<!-- _class: thank-you-slide -->
<!-- _paginate: false -->

# Děkuji za pozornost!

Tymofii Voronkin
