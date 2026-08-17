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
- Visio: “Turvallinen Kanta-Häme.” Mission verkkosivuteksti: auttaa Kanta-Hämeen yrityksiä kehittämään tietoturvan johtamista käytännönläheisesti ja oikeassa mittakaavassa.
- Palvelut: puutteiden ennakointi, tietoturvan hallinnan rakentaminen ja jatkuva johtamisen tuki.
- Palveluiden tarkemmat osiot perustuvat asiakkaan ostotilanteisiin: tulevan B2B-kaupan valmistelu, toistuva hallintajärjestelmävaatimus ja tietoturvan johtamisen delegointi.
- Luottamusta rakentava perusteluosio.
- Hämäläinen maisema ja paikallisuuden nosto.
- Yhteydenottokutsu.

## Palveluviestinnän pääkulma

Palveluita ei kuvata ensisijaisesti raporttien, Excelien tai muiden toimitusten kautta. Ensin kerrotaan, mitä asiakkaan liiketoiminnassa on muuttumassa paremmaksi.

- **Puuteanalyysi:** asiakas ehtii valmistautua ennen kuin tietoturvavaatimus muodostuu kaupan esteeksi.
- **Hallintajärjestelmä:** asiakas pystyy vastaamaan toistuviin vaatimuksiin johdonmukaisesti ilman tarpeettoman raskasta mallia.
- **vCISO:** asiakas saa tietoturvan johtamiselle jatkuvan omistajuuden silloin, kun johdolla ei ole aikaa tai omaa asiantuntijaa.

Sivustolla käytetään tunnistettavia esimerkkitilanteita, kuten uuden B2B-asiakkaan tietoturvakyselyä, tarjouspyynnön hallintajärjestelmävaatimusta ja IT-kumppanin teknisen työn sekä johdon kokonaisvastuun välistä aukkoa. Esimerkit merkitään tilanteiksi tai hypoteettisiksi käyttötapauksiksi, ellei niistä ole dokumentoitua asiakastulosta.

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
- Kuvat ja mahdollinen varapaikkamerkki on nimetty kuvaavasti.
- Punainen ei ole ainoa tapa ilmaista merkitystä.
- Näppäimistökäyttö ja `prefers-reduced-motion` huomioidaan.
- Oikea hero-kuva tarkistetaan tekstin kontrastia vasten ennen julkaisua.

## Kuvapaikka

`assets/hero-ilvessecurity-desktop.webp` ja `assets/hero-ilvessecurity-mobile.webp` ovat käytössä olevat optimoidut Hämäläiset luontokuvat. `assets/hero-placeholder.svg` säilyy vain varapaikkamerkkinä.

## Julkaisu GitHub Pagesissa

GitHub Pages julkaisee staattisia HTML-, CSS- ja JavaScript-tiedostoja repositoriosta. Tälle sivulle ei suunnitella backendia. Tässä projektissa kanoninen julkaisutapa on GitHub Actions -workflow, joka julkaisee julkisen site-repon juuren Pages-artifaktina.

Tässä projektissa julkaisua varten on valmis julkisen site-repon juuren workflow-tiedosto `.github/workflows/ilves-security-pages.yml`. Se julkaisee julkisen site-repon juuren Pages-artifaktina `main`-haarasta. HAMK_Haku-repon `webbisivu/` on synkronoitu paikallinen työkopio, ei Pages-workflow'n julkaisujuuri.

Ennen ensimmäistä julkaisua tarkistetaan repositorion Pages-asetus, projektisivun alihakemistopolut, HTTPS ja mahdollinen oma verkkotunnus.

## Jatkokehityksen työjärjestys

1. hyväksytään rakenteen ja visuaalisen suunnan ensimmäinen versio;
2. viimeistellään yrityksen oikeat yhteystiedot ja palvelutekstit;
3. testataan mobiili, näppäimistö, kontrasti ja linkit;
4. synkronoidaan `webbisivu` julkisen site-repon juureen;
5. otetaan GitHub Pages käyttöön ja varmennetaan julkaistu osoite;
6. kirjataan live-, Lighthouse- ja ruudunlukijatestien tulokset.
