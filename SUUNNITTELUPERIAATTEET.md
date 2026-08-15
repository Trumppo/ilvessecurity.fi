# Ilves Securityn verkkosivu – Concept A

## Tavoite

Staattinen, GitHub Pagesissa julkaistava verkkosivu Ilves Securitylle. Sivun pitää välittää nopeasti, että tietoturva on hallittavaa, palvelu käytännönläheistä ja yritys paikallinen hämäläinen kumppani.

## Visuaalinen suunta

Sivusto perustuu Ilves Securityn Concept A -konseptiin:

- puna–valkoinen kokonaisuus, jossa punainen on toiminnan ja huomion väri;
- musta/hiilenharmaa logo, otsikot ja rakenteet;
- geometrinen ilvesmerkki;
- selkeät suorakulmaiset kortit ja hillityt viistot pinnat;
- luonnon kuva-aihe tasapainottamassa teknistä tietoturvateemaa;
- hämäläinen tunnelma: järvi, metsä, kallio, sumu ja rauhallinen varmuus.

Luontokuvan tulee olla rauhallinen ja dokumentaarinen, ei geneerinen teknologiatausta. Punainen pidetään erillään kuvasta, jotta se säilyy tunnistettavana brändivärinä.

## Sivurakenne

- Hero: “Hallittua tietoturvaa.”
- Palvelut: tietoturvan hallinta, valmiudet ja asiantuntijatuki.
- Luottamusta rakentava perusteluosio.
- Hämäläinen maisema ja paikallisuuden nosto.
- Yhteydenottokutsu.

## Tekniset periaatteet

- Ei backendia, tietokantaa tai palvelinpuolen koodia.
- HTML, CSS, JavaScript ja kuvat ovat staattisia paikallisia tiedostoja.
- Ei ulkoisia fontti-, kuva-, analytiikka- tai UI-kirjastoriippuvuuksia ensimmäisessä versiossa.
- Kaikki polut ovat suhteellisia, jotta sivu toimii GitHub Pagesin projektialipolussa.
- `index.html` on julkaisun lähtöpiste.
- JavaScriptiä käytetään vain käyttöliittymään, tällä hetkellä mobiilinavigaatioon.
- Sivun pitää toimia myös ilman JavaScriptiä perussisällön ja linkkien osalta.

## Saavutettavuus

- Sivulla on ohita sisältöön -linkki.
- Navigaatiopainikkeella on `aria-expanded` ja `aria-controls`.
- Kuvat ja kuvan placeholderit on nimetty kuvaavasti.
- Punainen ei ole ainoa tapa ilmaista merkitystä.
- Näppäimistökäyttö ja `prefers-reduced-motion` huomioidaan.
- Oikea hero-kuva tarkistetaan tekstin kontrastia vasten ennen julkaisua.

## Kuvapaikka

`assets/hero-placeholder.svg` on väliaikainen paikallinen paikkamerkki. Se korvataan myöhemmin Hämäläisellä luontokuvalla ilman, että HTML-rakennetta tarvitsee muuttaa.

## Julkaisu GitHub Pagesissa

GitHub Pages julkaisee staattisia HTML-, CSS- ja JavaScript-tiedostoja repositoriosta. Tälle sivulle ei suunnitella backendia. Julkaisussa voidaan käyttää joko Pagesin branch-kansiota tai GitHub Actions -workflow'ta, joka julkaisee tämän kansion Pages-artifaktina.

Tässä projektissa julkaisua varten on valmis juuren workflow-tiedosto `.github/workflows/ilves-security-pages.yml`. Se julkaisee vain `webbisivu`-hakemiston ja käynnistyy, kun kyseisen hakemiston sisältö muuttuu `main`-haarassa.

Ennen ensimmäistä julkaisua tarkistetaan repositorion Pages-asetus, projektisivun alihakemistopolut, HTTPS ja mahdollinen oma verkkotunnus.

## Jatkokehityksen työjärjestys

1. hyväksytään rakenteen ja visuaalisen suunnan ensimmäinen versio;
2. vaihdetaan placeholder oikeaan luontokuvaan;
3. viimeistellään yrityksen yhteystiedot ja palvelutekstit;
4. testataan mobiili, näppäimistö, kontrasti ja linkit;
5. synkronoidaan `webbisivu` GitHubiin;
6. otetaan GitHub Pages käyttöön ja varmennetaan julkaistu osoite.
