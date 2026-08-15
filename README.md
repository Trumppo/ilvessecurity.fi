# Ilves Securityn webbisivu

Tämä hakemisto on Ilves Securityn staattisen GitHub Pages -verkkosivun lähde.

## Tiedostot

- `index.html` – sivun rakenne ja sisältö
- `styles.css` – Concept A -pohjainen ulkoasu
- `styles.css` sisältää myös palvelukorttien ja tuotekuvausten tyylit, jotta ensimmäinen renderöinti tarvitsee vain yhden CSS-pyynnön
- `app.js` – mobiilinavigaation käyttöliittymälogiikka
- `assets/` – tuotantologo, favicon, optimoidut WebP-kuvat ja kuvalähteen kreditointi
- `SUUNNITTELUPERIAATTEET.md` – visuaaliset ja tekniset päätökset
- `DESIGN_SYSTEM.md` – tarkka paikallinen design- ja komponenttisopimus
- `CUSTOM_DOMAIN.md` – `ilvessecurity.fi`-domainin ja HTTPS:n käyttöönottosuunnitelma
- `LLM_NAKYVYYDEN_KEHITYSEHDOTUKSET.md` – LLM-näkyvyyden, koneellisen luettavuuden ja JSON-LD:n kehityssuunnitelma

Sivustoon ei kuulu backendia. Tämä julkinen site-repo julkaisee oman juurensa GitHub Pagesiin. HAMK_Haku-repon `webbisivu/` on paikallinen synkronoitu työkopio, ei tämän workflow'n julkaisujuuri.
