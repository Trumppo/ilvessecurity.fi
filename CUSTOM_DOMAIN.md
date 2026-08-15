# Ilves Security – GitHub Pages -verkkotunnus

## Tavoite

Julkaistun sivun ensisijainen osoite on:

```text
https://ilvessecurity.fi
```

Lisäksi suositellaan `www.ilvessecurity.fi`-osoitteen käyttöönottoa ja ohjaamista ensisijaiseen osoitteeseen.

## GitHub Pages

Kun `webbisivu` on julkaistu workflow'lla, määritä repositorion Pages-asetuksissa Custom domain -arvoksi:

```text
ilvessecurity.fi
```

Custom domain asetetaan GitHub Pagesin asetuksissa tai API:ssa. Tämä projekti käyttää custom GitHub Actions -julkaisua, joten `CNAME`-tiedostoa ei käytetä julkaisun pääasiallisena asetuksena.

## DNS-tietueet

Louhessa muutokset tehdään Louhi Konsolissa: `Verkkotunnukset` → `ilvessecurity.fi` → `DNS-tietueet`. Louhen ohjeen mukaan tavalliset A- ja CNAME-tietueet muokataan tässä näkymässä. TTL:n voi pitää arvossa 3600 sekuntia tai käyttää testivaiheessa lyhyempää TTL:ää, jos Louhen käyttöliittymä sen sallii.

Juuridomainin (`ilvessecurity.fi`) DNS-asetuksiin tarvitaan GitHub Pagesin suositellut A-tietueet:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

`www`-osoitteelle:

```text
www  CNAME  trumppo.github.io
```

DNS-palveluntarjoaja voi käyttää hieman erilaista käyttöliittymää tai hyväksyä juuridomainille `ALIAS`/`ANAME`-tietueen. Muita ristiriitaisia `A`, `AAAA`, `ALIAS`, `ANAME` tai `CNAME` -tietueita ei jätetä samoihin nimiin.

Ennen muutoksia tarkista nykyiset tietueet. Jos Louhi hoitaa Ilves Securityn sähköpostia, MX-, SPF-, DKIM- ja DMARC-tietueita ei poisteta tai muuteta verkkosivun vuoksi. Muutetaan vain verkkosivun liikenteeseen liittyvät `@`- ja `www`-tietueet. Louhen DNS-ohje: [Verkkotunnuksen nimipalvelintietueiden muokkaaminen](https://tuki.louhi.fi/support/solutions/articles/22000229942).

## HTTPS

Kun DNS on päivittynyt ja GitHub on hyväksynyt custom domainin:

1. odotetaan sertifikaatin luontia;
2. tarkistetaan Pages-asetuksista HTTPS-sertifikaatin tila;
3. valitaan `Enforce HTTPS`;
4. testataan `https://ilvessecurity.fi` ja `https://www.ilvessecurity.fi`.

GitHub luo ja ylläpitää sertifikaatin automaattisesti. Sertifikaattia ei asenneta Windowsiin, DNS-palveluun tai tähän repositorioon käsin.

## Tarkistus ennen käyttöönottoa

- domainin omistajuus on varmistettu GitHubissa;
- DNS-tietueet ovat oikeassa palvelussa;
- GitHub Pages -workflow on onnistunut;
- `ilvessecurity.fi` ja `www.ilvessecurity.fi` ohjautuvat oikein;
- HTTPS on pakotettu käyttöön;
- sivun paikalliset asset-polut toimivat myös custom domainilla;
- sähköposti- ja puhelinyhteystiedot ovat tuotantovalmiit.

Mockupissa käytetään tahallaan varattua esimerkkiosoitetta `esimerkki@example.com` ja esimerkkipuhelinnumeroa `+358 40 123 4567`. Ne vaihdetaan oikeisiin yhteystietoihin ennen julkaisua.
