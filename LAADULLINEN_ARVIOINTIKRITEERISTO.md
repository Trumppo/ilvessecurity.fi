# Ilves Securityn verkkosivun laadullinen arviointikriteeristö

Versio 1.0 · 2026-08-15

Tämä kriteeristö ohjaa Ilves Securityn staattisen verkkosivun suunnittelua, toteutusta, tarkistamista ja julkaisemista GitHub Pagesissa. Sivua arvioidaan aina sekä desktop- että mobiilikäytössä. Kriteeristö koskee käyttäjäkokemusta, sisältöä, saavutettavuutta, teknistä laatua, hakukonenäkyvyyttä ja koneellista luettavuutta.

## Arviointitapa

Jokainen kohta arvioidaan seuraavasti:

- **0 — puuttuu:** vaatimus ei toteudu tai siitä ei ole näyttöä.
- **1 — osittain:** toteutus toimii joissakin tilanteissa, mutta siinä on selvä puute.
- **2 — kunnossa:** vaatimus täyttyy ja se on tarkistettu.
- **3 — erinomainen:** vaatimus täyttyy, on testattu eri näkökulmista ja toteutus on dokumentoitu.

Julkaisun vähimmäisehto on, että kaikki kriittiset kohdat ovat tasolla 2. Yksikin kriittinen saavutettavuus-, toimivuus-, tietoturva- tai sisältövirhe estää tuotantoon julkaisemisen.

## 1. Asiakasarvo ja liiketoimintasisältö

- [ ] Sivun pääviesti kertoo, mitä asiakkaan tilanteessa paranee.
- [ ] Palvelut kuvataan asiakkaan ostotilanteiden kautta, ei ensisijaisesti dokumenttien, työkalujen tai konsultin työvaiheiden kautta.
- [ ] Puuteanalyysi kytkeytyy ennakointiin: asiakas ehtii valmistautua ennen kuin tietoturvavaatimus muodostuu kaupan esteeksi.
- [ ] Hallintajärjestelmä kytkeytyy toistuvaan tarjous- ja asiakasvaatimukseen: yritys pystyy vastaamaan vaatimuksiin johdonmukaisesti.
- [ ] vCISO kytkeytyy johtamisen aukkoon: johto tarvitsee jatkuvaa tukea, mutta organisaatiossa ei ole omaa tietoturvan johtamisen asiantuntijaa.
- [ ] Jokaisella palvelulla on tunnistettava lähtötilanne, luvattu muutos ja asiakkaalle syntyvä hyöty.
- [ ] Palveluiden rajat ovat rehelliset: sivu ei lupaa sertifiointia, täydellistä auditointia, penetraatiotestausta, SOC-valvontaa tai viranomaisarviota ilman erillistä sovittua scopea.
- [ ] Esimerkkitilanteet erotetaan toteutuneista asiakascaseista. Toteutuneita tuloksia ei väitetä ilman dokumentoitua näyttöä.
- [ ] CTA kertoo seuraavan askeleen: tuotekortti lukee lisää tuotekuvaukseen ja varsinainen yhteydenottokutsu on tuotekuvauksen jälkeen.
- [ ] Teksti on ymmärrettävää suomea, ilman tarpeetonta konsulttijargonia.

## 2. Rakenne, UX ja brändi

- [ ] Sivun rakenne vastaa käyttäjän kysymyksiin järjestyksessä: mitä hyötyä, missä tilanteessa, mitä palvelu tarkoittaa, miksi Ilves, miten yhteys otetaan.
- [ ] Otsikkohierarkia on looginen: yksi `h1`, palveluilla `h2`/`h3`-rakenne eikä otsikkotasoja hypitä.
- [ ] Palvelukortit ovat nopea yhteenveto ja tarkemmat tuotekuvaukset ovat samaa sisältöpolkua alempana.
- [ ] `Lue lisää` -linkit vievät oikeisiin ankkureihin: `#puuteanalyysi`, `#hallintajarjestelma` ja `#vciso`.
- [ ] Neljännen kortin CTA ei lupaa puuttuvaa tuotesivua, vaan ohjaa keskustelemaan etenemisestä.
- [ ] Concept A:n tumma–vaalea–punainen rytmi säilyy.
- [ ] Logo, värit, typografia, kuvapinta ja Hämäläinen paikallisuus ovat brand assets -ohjeen mukaisia.
- [ ] Linkkien hover-, focus- ja aktiiviset tilat ovat näkyviä myös tummilla ja punaisilla pinnoilla.
- [ ] Teksti, kuva ja CTA toimivat myös ilman JavaScriptiä.
- [ ] Navigointi ei peitä kohdeotsikkoa ankkurilinkkiä avattaessa.

## 3. Desktop-käyttö

- [ ] Sivua testataan vähintään 1280 px, 1440 px ja 1920 px leveydellä.
- [ ] Sisältö pysyy luettavana: tekstirivit eivät veny liian pitkiksi ja pääsisältö pysyy keskitettynä.
- [ ] Palvelukortit ovat visuaalisesti tasapainossa, mutta sisältö ei saa leikkautua kiinteän korkeuden vuoksi.
- [ ] Hero-kuva, otsikko ja CTA muodostavat selkeän ensimmäisen näkymän.
- [ ] Navigointi, ankkurilinkit, sähköposti- ja puhelinlinkit toimivat hiirellä ja näppäimistöllä.
- [ ] Selainikkunan zoomaus 200 prosenttiin ei aiheuta päällekkäisyyttä, leikkautumista tai vaakasuuntaista vieritystä normaalissa tekstisisällössä.

## 4. Mobiili- ja kosketuskäyttö

- [ ] Sivua testataan vähintään 320 px, 375 px ja 768 px leveydellä sekä pysty- että vaakasuunnassa.
- [ ] Mobiilivalikko on löydettävä, avattava ja suljettava näppäimistöllä sekä kosketuksella.
- [ ] CTA:t ja navigointikohteet ovat riittävän suuria kosketukseen; WCAG 2.2:n Target Size (Minimum) -vaatimus huomioidaan.
- [ ] Teksti ei vaadi nipistyszoomausta, vaakavieritystä tai kuvan tarkastelua ymmärtämistä varten.
- [ ] Hero-kuvan mobiiliversio rajautuu niin, että teksti ja kontrasti säilyvät.
- [ ] Palvelukortit ja tuotekuvaukset ovat yhden palstan lukupolku ilman liian tiheää asettelua.
- [ ] Puhelinnumero käynnistää puhelutoiminnon ja sähköpostiosoite sähköpostisovelluksen.
- [ ] Testaus tehdään myös hitaalla mobiiliverkolla ja pienellä näytöllä.

## 5. Saavutettavuus — WCAG 2.2 AA

Perustaso on WCAG 2.2 AA. W3C:n mukaan WCAG 2.2 koskee web-sisältöä eri laitteilla, mukaan lukien desktopit ja mobiililaitteet; erillinen mobiilistandardi ei korvaa WCAG-arviointia.

### Havaittava

- [ ] Kaikilla merkityksellisillä kuvilla on tarkoitusta vastaava `alt`-teksti.
- [ ] Koristekuvat ovat tyhjiä alt-tekstejä tai CSS-taustoja eivätkä lisää turhaa puhetta ruudunlukijalle.
- [ ] Kuvan teksti ei ole ainoa tapa välittää palvelun kannalta tärkeää tietoa.
- [ ] Normaali tekstikontrasti on vähintään WCAG AA -tasolla ja suurikokoinen teksti arvioidaan erikseen.
- [ ] Linkit erottuvat muustakin kuin väristä.
- [ ] Tekstin koon voi suurentaa vähintään 200 prosenttiin ilman sisällön menettämistä.
- [ ] Väri ei ole ainoa merkityksen tai tilan ilmaisin.

### Hallittava

- [ ] Kaikki toiminnot ovat käytettävissä näppäimistöllä.
- [ ] Näppäimistöfokus on näkyvä eikä jää headerin, valikon tai muun pinnan alle.
- [ ] Fokusjärjestys seuraa visuaalista ja sisällöllistä lukujärjestystä.
- [ ] Skip link ohittaa toistuvan navigoinnin.
- [ ] Ankkurilinkit, mobiilivalikko ja muut JavaScript-toiminnot eivät aiheuta fokusloukkuja.
- [ ] Liikkuvaa sisältöä ei käytetä tarpeettomasti ja `prefers-reduced-motion` huomioidaan.
- [ ] Kosketus- ja osoitinkohteiden väliin jää riittävästi tilaa virhepainallusten ehkäisemiseksi.

### Ymmärrettävä

- [ ] Sivun kieli ilmoitetaan oikein (`lang="fi"`).
- [ ] Otsikot, linkkitekstit ja painikkeet kuvaavat tarkoitustaan.
- [ ] Sama toiminto nimetään johdonmukaisesti eri kohdissa.
- [ ] Yhteydenottotapa on yksinkertainen eikä vaadi tarpeettomia kenttiä.
- [ ] Virhe- ja poikkeustilanteet ovat ymmärrettäviä, jos sivulle lisätään lomake.

### Luja ja yhteensopiva

- [ ] HTML on semanttista ja rakenteeltaan validia.
- [ ] ARIAa käytetään vain, kun natiivinen HTML ei riitä.
- [ ] Landmarkt (`header`, `nav`, `main`, `section`, `footer`) ovat tarkoituksenmukaisia.
- [ ] Sivun sisältö toimii Chrome-, Firefox-, Safari- ja Edge-selaimissa desktopilla ja mobiilissa.
- [ ] Sivua testataan vähintään ruudunlukijan tai selainpohjaisen accessibility-tarkistuksen avulla sekä manuaalisesti näppäimistöllä.

## 6. Suorituskyky ja Core Web Vitals

- [ ] Yksikään julkaistava rasterikuva ei ylitä 1 Mt; hero-kuvat pyritään pitämään selvästi tätä pienempinä.
- [ ] Käytetään tarkoituksenmukaisia WebP/AVIF-versioita, kuvat on rajattu käyttötarkoituksen mukaan ja lähdekuvat eivät kuulu julkaistavaan asset-pakettiin.
- [ ] Hero-kuva ei aiheuta tarpeetonta layout-siirtymää.
- [ ] CSS ja JavaScript ovat pieniä, paikallisia ja ilman tarpeettomia runtime-riippuvuuksia.
- [ ] Ulkoisia fontteja, seurantoja tai kirjastoja ei lisätä ilman perusteltua hyötyä.
- [ ] Core Web Vitals arvioidaan 75. persentiilissä sekä mobiililla että desktopilla: LCP ≤ 2,5 s, INP ≤ 200 ms ja CLS ≤ 0,1.
- [ ] PageSpeed Insights- tai Lighthouse-tarkistus tehdään julkaistulle HTTPS-osoitteelle.
- [ ] Hitaalla yhteydellä sivun pääsisältö ja yhteydenottotapa ovat käytettävissä ennen kaikkien kuvien latautumista.

## 7. Tekninen SEO

- [ ] Sivulla on yksilöllinen ja kuvaava `<title>`.
- [ ] Sivulla on kuvaava `meta description`, joka vastaa näkyvää sisältöä.
- [ ] Käytössä on yksi selkeä `h1` ja kuvaavat väliotsikot.
- [ ] Linkkitekstit kertovat kohteen; geneerisiä “klikkaa tästä” -linkkejä ei käytetä.
- [ ] Sivun tärkeä sisältö on HTML-tekstinä, ei vain kuvassa tai JavaScriptin varassa.
- [ ] Kaikki tärkeät sisäiset linkit ovat crawlattavia tavallisia ankkureita.
- [ ] Tuotannossa on HTTPS, oikea canonical-URL ja tarvittaessa `robots.txt` sekä juureen sijoitettu `sitemap.xml`.
- [ ] `ilvessecurity.fi` ja mahdolliset www-/GitHub Pages -osoitteet ohjaavat yhteen kanoniseen osoitteeseen.
- [ ] Open Graph- ja Twitter/X-korttien perustiedot ovat kunnossa, jos sivua jaetaan sosiaalisessa mediassa.
- [ ] Favicon ja sivuston nimi näkyvät selaimessa ja jaetuissa linkeissä.
- [ ] JSON-LD:tä käytetään vain näkyvää, todennettavaa sisältöä vastaavasti. Mahdollinen `Organization`/`LocalBusiness`-merkintä ei sisällä keksittyjä arvosteluja, hintoja tai yhteystietoja.
- [ ] Search Consolen URL-tarkistus ja sitemap ovat käytössä julkaisun jälkeen.

## 8. LLM- ja koneellisesti luettava sisältö

LLM-optimointi ei ole erillinen W3C-standardi eikä lupaus siitä, että jokin malli käyttää sivua lähteenä. Tavoite on tehdä sisällöstä ihmisille, hakukoneille ja koneellisille lukijoille yksiselitteistä, löydettävää ja todennettavaa.

- [ ] Sivun tärkeimmät väitteet ovat näkyvää, selkeää HTML-tekstiä.
- [ ] Yrityksen nimi, toiminta-alue, palvelut, kohdeasiakkaat ja palveluiden rajat kerrotaan suoraan.
- [ ] Jokainen palvelu vastaa selkeästi kysymyksiin: kenelle, missä tilanteessa, mitä muuttuu ja mitä palvelu ei ole.
- [ ] Otsikot ovat kuvaavia ja sisältö on jaettu itsenäisesti ymmärrettäviin osioihin.
- [ ] Palveluiden nimet, ankkurit, sisäiset linkit ja sanasto ovat johdonmukaisia.
- [ ] Fakta, suunnitteluoletus, esimerkki ja toteutunut asiakastulos erotetaan toisistaan.
- [ ] Väitteillä on tarvittaessa näkyvä lähde, päivämäärä tai rajaus; luottamuksellista asiakastietoa ei julkaista.
- [ ] JSON-LD täydentää näkyvää sisältöä eikä lisää piilotettuja tai ristiriitaisia väitteitä.
- [ ] Koneelliselle lukijalle ei rakenneta keyword stuffingia, tekaistuja FAQ-vastauksia tai automaattisesti tuotettua tyhjää sisältöä.
- [ ] `robots.txt`, metat ja mahdolliset crawler-ohjeet sallivat julkisen sivun asiallisen indeksoinnin.
- [ ] Sivulla ei ole vahvistamattomia väitteitä sertifioinneista, asiakasreferensseistä, tuloksista tai sääntelyn soveltamisesta.

## 9. Staattinen julkaisu, turvallisuus ja ylläpidettävyys

- [ ] Sivusto toimii ilman backendiä, tietokantaa, API-avaimia tai palvelinpuolen runtimea.
- [ ] Kaikki julkisen repositorion tiedostot liittyvät sivuston julkaisemiseen tai ylläpitoon.
- [ ] Yksityiset liiketoimintasuunnitelmat, talousmallit, sisäiset muistiot ja luonnokset eivät päädy julkiseen sivurepoon.
- [ ] Kaikki asset-polut ovat suhteellisia ja toimivat GitHub Pagesissa sekä omalla verkkotunnuksella.
- [ ] CNAME, HTTPS, GitHub Pages -workflow ja mahdolliset domain-ohjaukset ovat dokumentoituja.
- [ ] Julkisessa repossa ei ole salasanoja, tokeneita, henkilötietoja tai tarpeettomia lähdekuvia.
- [ ] Ulkoiset resurssit ovat minimoituja ja niiden saatavuusriski on ymmärretty.
- [ ] Muutokset testataan paikallisella `file://`-osoitteella ja HTTPS-julkaisussa erikseen.
- [ ] Jokainen julkaisu on palautettavissa Gitin avulla.
- [ ] Dokumentaatio kertoo sivun rakenteen, brand-ratkaisut, sisältöperiaatteet, assetit, testit ja julkaisutavan.

## 10. Julkaisun laadunvarmistuslista

Ennen julkaisua:

- [ ] tarkista HTML:n rakenne ja linkit;
- [ ] tarkista kaikki kolme tuotekuvausankkuria ja yhteys-CTA:t;
- [ ] testaa desktop 1280–1920 px;
- [ ] testaa mobiili 320–768 px;
- [ ] testaa näppäimistö, focus, skip link ja mobiilivalikko;
- [ ] testaa ruudunlukijalla tai accessibility-työkalulla;
- [ ] tarkista kontrastit ja 200 % zoomaus;
- [ ] tarkista kuva-assetit, tiedostokoot ja 404-viittaukset;
- [ ] aja Lighthouse/PageSpeed ja kirjaa tulokset päivämäärineen;
- [ ] tarkista title, description, canonical, favicon, robots ja sitemap;
- [ ] tarkista JSON-LD Rich Results Testillä, jos JSON-LD lisätään;
- [ ] tarkista, ettei julkisessa repossa ole sisäistä materiaalia;
- [ ] tarkista julkaistu `https://ilvessecurity.fi` erikseen paikallisesta tiedostosta.

## Lähteet ja tulkintaperiaate

- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)
- W3C WAI, [Mobile Accessibility](https://www.w3.org/WAI/standards-guidelines/mobile/)
- W3C WAI, [Developing for Web Accessibility](https://www.w3.org/WAI/tips/developing/)
- W3C, [Accessibility Principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/)
- Google Search Central, [Search Essentials](https://developers.google.com/search/docs/essentials)
- Google Search Central, [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- Google Search Central, [Structured Data General Guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- Google Search Central, [Build and Submit a Sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- web.dev, [Web Vitals](https://web.dev/articles/vitals)
- Schema.org, [Getting Started](https://schema.org/docs/gs.html)

W3C- ja Google-lähteet määrittävät standardi- ja hakukoneperustan. LLM-kohta on käytännön ylläpito- ja sisältöperiaate, ei virallinen yhden toimijan sertifiointikriteeristö.
