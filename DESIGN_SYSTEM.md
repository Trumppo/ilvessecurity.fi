# Ilves Security – paikallinen design-järjestelmä

Tämä tiedosto kodifioi verkkosivun jatkokehityksen. Visuaalinen lähde on [Ilves Securityn brand-assets.md](../output/graafinen-ilme/brand-assets.md), jota ei saa ohittaa uusilla väreillä, logoilla tai typografiaratkaisuilla ilman erillistä brändipäätöstä.

## Brändin ydin

Sivun pitää tuntua rauhalliselta, jämäkältä, käytännönläheiseltä, riippumattomalta ja hämäläiseltä. Concept A:n yhdistelmä on geometrinen ilvesmerkki, hiilenharmaa rakenne, puhdas valkoinen tila, tarkasti käytetty punainen aksentti ja rauhallinen luontomaisema.

## Brand assets -sopimus

Käytä tuotannossa tämän repon `assets/ilves-security-logo.svg` -tiedostoa. Se on fontista riippumaton tuotantologo. Alkuperäinen brand source on yksityisessä lähdeaineistossa; älä käytä konseptitaulun PNG:tä varsinaisena logona.

Brand assets -ohjeen värit:

| Rooli | HEX | Käyttö |
|---|---|---|
| Hiilenharmaa | `#242B31` | logo, pääteksti ja tumma rakenne |
| Punainen | `#B20F24` | nimi, painikkeet, viivat ja nostot |
| Vaalea harmaa | `#B8BDC1` | jakajat ja toissijaiset rakenteet |
| Valkoinen | `#FFFFFF` | tausta ja käänteisen logon merkki |

CSS-tokenit ovat näiden arvojen toteutus: `--charcoal`, `--red`, `--mist`, `--line` ja `--white`. Uusia brändivärejä ei lisätä ilman perustelua.

Typografian muokattava ensisijainen fontti on `Inter`, varalla `Arial, sans-serif`. Sivu ei saa riippua ulkoisesta fonttilatauksesta, joten fonttipino toimii myös offline- ja GitHub Pages -käytössä.

Logoa ei venytetä, litistetä, varjosteta, hehkuteta, liukuväritetä tai muuteta kolmiulotteiseksi. Punainen ei ole pienikokoisen logon pakollinen osa. Päälogoa ei käytetä alle 24 px korkeana; pienissä koissa käytetään mikroversiota tai pelkkää merkkiä.

## Sivun rakenne

1. **Header:** valkoinen käänteinen logo tumman hero-pinnan päällä, ankkurit Palvelut / Meistä / Yhteys ja `Kysy lisää` -toiminto.
2. **Hero:** “Hallittua tietoturvaa.”, optimoitu hämäläinen järvimaisema ja punainen CTA.
3. **Palvelut:** neljä liiketoimintasuunnitelman mukaista palvelua sekä kolmen pääpalvelun tarkemmat asiakasarvoa kuvaavat osiot.
4. **Meistä:** käytännönläheisyyttä ja riippumattomuutta perusteleva lyhyt osio.
5. **Maisema:** paikallisuutta ja rauhallista tilaa tuova kuvaosio.
6. **Yhteys:** sähköposti- ja puhelinlinkit sekä matalan kynnyksen yhteydenottokutsu.

## Asiakkaan lisäarvo suunnittelun kulmakivenä

Sivun ensisijainen kysymys ei ole “mitä Ilves Security tekee?” vaan “mitä asiakkaan tilanne muuttuu paremmaksi?”. Jokaisessa osiossa, palvelukortissa ja CTA:ssa pitää näkyä vähintään yksi asiakkaan saama hyöty: parempi päätöksenteko, pienempi epävarmuus, selkeämpi vastuu, priorisoitu tekeminen tai jatkuva tuki.

Palvelukortin rakenne on:

1. tarttuva asiakkaan muutosta kuvaava otsikko;
2. yksi konkreettinen hyötylupaus;
3. tekninen palvelunimi tai toimituksen tarkempi sisältö leipätekstissä tarvittaessa;
4. matalan kynnyksen seuraava askel.

### Palveluiden tarkemmat sisältöosiot

Palvelukortit toimivat nopeana yleiskuvana. Niiden alle sijoitetaan kolme tarkempaa sisältöosiota: puuteanalyysi, hallintajärjestelmän rakentaminen ja vCISO. Jokainen osio alkaa asiakkaan tunnistettavasta tilanteesta, ei tuotteen teknisestä nimestä.

Sisältöjärjestys on:

1. **Puuteanalyysi:** johto ennakoi, että tietoturva voi muodostua uuden B2B-asiakkuuden tai tarjousprosessin esteeksi. Arvo on valmistautuminen ennen kuin vaatimus pysäyttää kaupan.
2. **Hallintajärjestelmä:** tietoturvan hallintajärjestelmästä tulee tarjouksissa toistuva vaatimus. Arvo on kyky vastata vaatimuksiin johdonmukaisesti oikean kokoisella ja ylläpidettävällä mallilla.
3. **vCISO:** johdolla ei ole aikaa tai organisaatiossa ei ole omaa tietoturvan johtamisen asiantuntijaa. Arvo on jatkuva omistajuus, tilannekuva ja kehityksen eteneminen.

Julkiset käyttötilanteet kirjoitetaan esimerkkeinä, ei toteutuneina asiakascaseina. Toteutuneiksi tuloksiksi voidaan nimetä vain myöhemmin dokumentoidut asiakastapaukset.

Älä aloita korttia sanoilla kuten “auditointi”, “hallintajärjestelmä” tai “vCISO”, jos ne eivät yksin kerro ostajalle syntyvää hyötyä. Ne voidaan avata otsikon alla.

## Palveluportfolio

Palvelukortit noudattavat liiketoimintasuunnitelman etenemispolkua, mutta otsikot on kirjoitettu asiakkaan kokemasta arvosta:

1. **Puutteet näkyviin** – puuteanalyysi tekee nykytilan, keskeiset riskit ja priorisoidun kehityslistan ymmärrettäviksi.
2. **Tilanne haltuun** – hallintamallin rakentaminen tekee rooleista, vastuista, ohjeista ja seurannasta käytännöllisiä.
3. **Turva osaksi johtamista** – vCISO-palvelu tuo jatkuvan ulkoistetun tietoturvapäällikkötuen.
4. **Askeleet käytäntöön** – kehittämisprojektit auttavat viemään tärkeät toimet arkeen oman tiimin ja kumppaneiden kanssa.

Korttien järjestys kuvaa mahdollista etenemistä, mutta palvelut voidaan ostaa erikseen. Sivulla ei saa luvata ilman erillistä rajausta sertifiointia, täydellistä auditointia, teknistä penetraatiotestausta tai 24/7-valvontaa. Ilves Securityn painopiste on johtamisessa, hallinnossa ja koordinoinnissa, ei laite- tai lisenssimyynnissä.

## Komponentit

- `.site-header`, `.site-nav`, `.nav-cta`: navigaatio;
- `.hero`, `.hero-media`, `.hero-shade`, `.hero-content`: hero;
- `.eyebrow`: pienet versaalitunnisteet;
- `.button`, `.button-red`, `.button-dark`: CTA:t;
- `.section`, `.container`: yleinen osiorakenne;
- `.service-grid`, `.service-card`, `.service-card-dark`, `.service-card-red`: palvelukortit;
- `.statement-grid`, `.statement-copy`: perusteluosio;
- `.landscape-break`, `.landscape-caption`: maisemaosio;
- `.contact-grid`, `.contact-panel`, `.contact-link`: yhteysosio;
- `.site-footer`, `.footer-inner`: alatunniste.

Palvelukorttien rytmi on Concept A:ssa tumma ensimmäinen kortti, vaaleat keskikortit ja punainen viimeinen kortti. Jos korttien määrä muuttuu, säilytä ankkurivärit tai dokumentoi uusi päätös.

## Responsiivisuus

- yli `900px`: neljä palvelukorttia rinnakkain;
- `761–900px`: kaksi korttia rinnakkain;
- enintään `760px`: yksi kortti per rivi ja mobiilivalikko;
- otsikot skaalautuvat `clamp()`-arvoilla;
- sisältö ei saa aiheuttaa vaakavieritystä;
- pienessä koossa hero-leima voidaan piilottaa, mutta otsikko ja CTA säilyvät.

## Kuvien ja assetien periaate

`assets/hero-ilvessecurity-desktop.webp` ja `assets/hero-ilvessecurity-mobile.webp` ovat julkaistavat, optimoidut Hämäläinen järvimaisemat. `assets/hero-placeholder.svg` säilytetään vain varavaihtoehtona. Kuvassa ei saa olla tekstiä, logoa, vesileimaa, ihmisiä tai geneeristä teknologiataustaa. Kuva pidetään hillittynä, jotta brändin punainen säilyy tunnistettavana.

## Saavutettavuus

- säilytä skip-link;
- säilytä navigaation `aria-expanded` ja `aria-controls`;
- anna kuville kuvaava vaihtoehtoinen teksti tai roolikuvaus;
- älä käytä punaista ainoana merkityksen ilmaisuna;
- pidä linkin tarkoitus näkyvänä tekstissä;
- varmista tekstin kontrasti lopullista hero-kuvaa vasten;
- säilytä näkyvä näppäimistöfokus ja `prefers-reduced-motion`;
- sivun pääsisällön pitää toimia myös ilman JavaScriptiä.

## Tekninen sopimus

### Kuvien suorituskyky

Hero- ja maisemakuvat julkaistaan WebP-muodossa erillisinä vaaka- ja pystysuuntaisina versioina. Desktop-versio on noin 1600 px leveä ja mobiiliversio noin 768 px leveä. Alkuperäiset PNG/JPG-tiedostot säilytetään erillisessä paikallisessa lähdearkistossa, eivätkä ne kuulu julkaistavaan asset-pakettiin. Tavoitteena on pitää jokainen ladattava rasterikuva alle megatavussa ilman, että Concept A:n tumma, rauhallinen kuvapinta kärsii.

- julkisen site-repon julkaisujuuri: tämän dokumentin kanssa sama repojuuri;
- pääsivu: `index.html`;
- tyylit: `styles.css`;
- käyttöliittymälogiikka: `app.js`;
- assetit: `assets/`;
- GitHub Pages -workflow: `.github/workflows/ilves-security-pages.yml`;
- ei backendia, tietokantaa, API-avaimia tai ulkoisia runtime-riippuvuuksia;
- kaikki polut ovat suhteellisia, jotta sivu toimii oman verkkotunnuksen alla ja tarvittaessa GitHub Pagesin projektialipolussa.

Paikalliset työkopiot ovat `C:\temp\ilvessecurity.fi-public` ja HAMK_Haku-repon synkronoitu `webbisivu/`-hakemisto. GitHub Pages julkaisee julkisen site-repon juuren, ei HAMK_Haku-repon muuta sisältöä.

## Muutosten tarkistus

Kun designia kehitetään, tarkista aina:

1. vastaavatko värit ja logo brand-assets-ohjetta;
2. vastaako palvelusisältö liiketoimintasuunnitelmaa;
3. säilyvätkö tumma–vaalea–punainen Concept A -rytmi ja hämäläinen tunnelma;
4. toimivatko desktop, mobiili, näppäimistö ja JavaScript pois päältä;
5. ovatko oikeat yhteystiedot ja hero-kuva tuotantovalmiit; yhteystietojen puuttuessa sivu näyttää vain selkeän ei-toimivan ilmoituksen;
6. päivitetäänkö tämä tiedosto jokaisen uuden designpäätöksen yhteydessä.
