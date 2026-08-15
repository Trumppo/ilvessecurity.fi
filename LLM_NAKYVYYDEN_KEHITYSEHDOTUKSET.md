# Ilves Securityn LLM-näkyvyyden kehitysehdotukset

Versio 1.0 · 2026-08-16

Tämä muistio kokoaa ehdotukset, joilla Ilves Securityn julkinen verkkosivu tehdään helpommin löydettäväksi, tulkittavaksi ja todennettavaksi hakukoneille ja generatiivisille järjestelmille. Tavoite ei ole luvata näkyvyyttä tietyssä palvelussa tai mallissa, vaan parantaa sivuston sisältö- ja teknistä laatua.

## Lähtökohta

Staattinen, palvelimelta suoraan latautuva HTML on Ilves Securitylle hyvä perusta. Sivun tärkeä sisältö on jo HTML:ssä, ja käytössä ovat muun muassa kuvaava otsikko, meta description, canonical, robots.txt, sitemap.xml ja asiakkaan lisäarvoon keskittyvät palvelukuvaukset.

LLM-näkyvyys ei ole erillinen W3C-standardi. Se muodostuu ensisijaisesti samoista asioista kuin hyvä SEO: sisältö on hyödyllistä, yksiselitteistä, löydettävää, teknisesti saavutettavaa ja rehellisesti rajattua.

## Kehitysehdotukset tärkeysjärjestyksessä

### 1. Palveluille omat pysyvät sivuosoitteet

Kun sisältö kasvaa, palveluille kannattaa tehdä omat HTML-sivut tai muut pysyvät URL-osoitteet:

- `/palvelut/puuteanalyysi.html`
- `/palvelut/tietoturvan-hallintajarjestelma.html`
- `/palvelut/vciso.html`

Nykyiset ankkurit (`#puuteanalyysi`, `#hallintajarjestelma` ja `#vciso`) toimivat hyvin nykyisessä yksisivuisessa toteutuksessa. Erillisiin sivuihin siirrytään vasta, kun niille on käyttäjälle riittävästi omaa sisältöä. Sivujakoa ei tehdä vain tekoälyä varten.

Jokaisella palvelusivulla tulisi olla:

- yksilöllinen `<title>` ja meta description;
- yksi selkeä pääotsikko;
- asiakkaan lähtötilanne, palvelun sisältö, muutos ja hyöty;
- rajaus siitä, mitä palvelu ei ole;
- sisäinen linkki yhteydenottoon ja muihin aiheeseen liittyviin palveluihin.

### 2. JSON-LD yritykselle ja palveluille

Etusivulle voidaan lisätä JSON-LD-muotoinen `Organization`-tietue. Palvelusivuille voidaan lisätä `Service`-tietue. JSON-LD ei näy käyttäjälle, vaan auttaa koneellisia lukijoita yhdistämään yrityksen, verkkotunnuksen, palvelut ja toiminta-alueen.

Merkintöihin lisätään vain tietoja, jotka näkyvät sivulla ja ovat todennettavia. Niihin ei lisätä keksittyjä yhteystietoja, asiakasreferenssejä, arvosteluja, sertifiointeja tai hintoja.

Mahdollisia todellisia kenttiä ovat:

- yrityksen virallinen nimi ja URL;
- logo;
- toiminta-alue, esimerkiksi Kanta-Häme, jos tämä ilmaistaan sivulla;
- oikea sähköposti, puhelin ja osoite, kun ne on vahvistettu;
- palvelun nimi, kuvaus ja palveluntarjoaja;
- aidot yritysprofiilit `sameAs`-kentässä.

JSON-LD validoidaan Rich Results Testillä ja tarvittaessa Search Consolen URL Inspection -työkalulla. Merkintä ei takaa hakutuloksen rikastettua esitystapaa tai LLM-mainintaa.

### 3. Konkreettiset asiakkaan tilanteet

Palvelukuvauksissa kannattaa käyttää kysymyksiä ja tilanteita, joilla ostaja itse etsii apua. Esimerkiksi:

- Tarjouksissa alkaa toistuvasti olla pakollinen vaatimus tietoturvan hallintajärjestelmästä.
- Johto huomaa, että tietoturvan puutteet voivat tulevaisuudessa estää uuden B2B-asiakkuuden.
- Yritys tarvitsee perustellun näkemyksen siitä, mitä korjataan ensin ja mitä voidaan tehdä myöhemmin.
- Ylin johto tarvitsee jatkuvaa tietoturvan johtamisen tukea, mutta omassa organisaatiossa ei ole kyseisen alan johtajaa.
- IT-kumppani vastaa tekniikasta, mutta kukaan ei yhdistä riskejä, vastuita, asiakasvaatimuksia ja kehitystoimia.

Esimerkit on merkittävä selkeästi suunnitteluesimerkeiksi, yleistetyiksi tilanteiksi tai toteutuneiksi asiakascaseiksi. Toteutuneita tuloksia ei saa esittää ilman julkaistavaa näyttöä ja lupaa.

### 4. Yrityksen faktat ja asiantuntijuus näkyviin

Sivustolla kannattaa ilmaista suoraan:

- kenelle Ilves Security tarjoaa palveluita;
- millä alueella työskentely tapahtuu;
- mitä tietoturvan hallinnollinen konsultointi tarkoittaa;
- missä palvelun rajat kulkevat;
- millä tavalla työ alkaa ja mitä asiakkaalle jää käteen.

Kun viralliset yhteystiedot ovat lopulliset, ne päivitetään samaan aikaan näkyvään yhteystietoboksiin, metatietoihin, JSON-LD:hen ja mahdollisiin muihin yritysprofiileihin.

### 5. Mittaa LLM-näkyvyyttä omana seuranta-aikasarjana

Kuukausittain voidaan ajaa sama pieni kysymyspatteristo eri palveluissa. Esimerkkejä:

- Kuka tarjoaa tietoturvan puuteanalyysiä Kanta-Hämeessä?
- Miten suomalainen pk-yritys voi rakentaa tietoturvan hallintajärjestelmän?
- Milloin yritys tarvitsee vCISO-palvelua?
- Mitä tietoturvan puuteanalyysi tuottaa asiakkaalle?

Jokaisesta testistä kirjataan päivämäärä, palvelu tai malli, käytetty kysymys, mainittiinko Ilves Security, annettiinko linkki, olivatko tiedot oikein ja mitkä kilpailijat tai vaihtoehdot mainittiin.

Tämä ei ole virallinen sijoitusmittari, mutta se paljastaa, löytyykö yritys oikeilla ostajan kysymyksillä ja ymmärtävätkö järjestelmät palvelun arvon oikein.

### 6. Koneelliset sisältörajapinnat vasta myöhemmin

`llms.txt` ja `index.json` voidaan ottaa käyttöön, jos sivustolle syntyy useita palvelusivuja, artikkeleita tai muita sisältökokonaisuuksia. Niiden tulisi syntyä samasta ylläpidettävästä lähteestä kuin HTML-sisältö.

Yksisivuisessa esittelysivustossa niiden hyöty on toistaiseksi pieni. Google ei ilmoita käyttävänsä `llms.txt`-tiedostoa hakunäkyvyyden parantamiseen. RSS ei ole tarpeellinen ennen kuin sivustolla julkaistaan säännöllisesti päivittyvää sisältöä.

DNS-AID-, OAuth-, agentti-API- tai MCP-rakenteita ei lisätä vain mittarin pisteiden vuoksi. Niitä käytetään vasta, jos sivustolla on oikeasti kyseinen agenttipalvelu, kirjautuminen tai koneille tarkoitettu API.

## Ehdotettu toteutusjärjestys

1. Vahvistetaan viralliset yhteystiedot, toiminta-alue ja julkaistavat yritysfaktat.
2. Arvioidaan, milloin palveluille on käyttäjän kannalta riittävästi sisältöä omille sivuille.
3. Lisätään Organization- ja Service-tietueet näkyvän sisällön perusteella.
4. Laajennetaan puuteanalyysin, hallintajärjestelmän ja vCISO:n konkreettisia asiakastilanteita.
5. Otetaan Search Console ja Bing Webmaster käyttöön ja kirjataan lähtötaso.
6. Lisätään `llms.txt` tai `index.json` vain, jos julkinen sisältökorpus kasvaa niitä oikeasti hyödyttäväksi.

## Ei tehdä

- Ei täytetä sivua avainsanoilla.
- Ei rakenneta tekaistuja FAQ-kysymyksiä vain indeksointia varten.
- Ei julkaista sisäisiä asiakas- tai liiketoimintatietoja.
- Ei ilmoiteta sertifiointeja, referenssejä tai teknisiä ominaisuuksia ilman näyttöä.
- Ei lisätä koneellisille lukijoille tarkoitettuja rajapintoja, joita sivusto ei oikeasti toteuta.

## Lähteet

- Google Search Central, [Optimizing your website for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- Google Search Central, [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- Google Search Central, [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- Google Search Central, [Local Business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- Neuvottelija AI, [The Last Mile: Improving Agent Readiness from 86% to 100%](https://ai.neuvottelija.com/agent-readiness-86-to-100/)

