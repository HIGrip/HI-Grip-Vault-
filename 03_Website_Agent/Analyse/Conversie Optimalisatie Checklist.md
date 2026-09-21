# Conversie Optimalisatie Checklist — HÏ Grip

> Actiepunten uit live-audit www.higrip.nl, 2026-07-14. Achtergrond/redenering per punt: zie [[SEO Strategie & Keywords]] en [[Homepage Copy & Structuur]]. Status: **voorstel — nog niet doorgevoerd**, wacht op akkoord conform [[Agent Takenverdeling & Grenzen]].

---

## Checklist

- [ ] Homepage `<title>` herschrijven — nu alleen "HÏ Grip", geen keyword-dekking
- [ ] Organization/WebSite structured data toevoegen aan homepage (nu leeg `application/ld+json`)
- [ ] Klantenaantal-cijfer synchroniseren over hele site (homepage zegt 2.000+, productpagina zegt 1500+)
- [ ] Ontbrekende alt-teksten aanvullen (banner, productfoto's, partner-logo's in footer)
- [ ] `og:image` vervangen door actie-/lifestylebeeld i.p.v. staand logo-bestand (zwakke social-share preview)
- [ ] FAQPage-schema toevoegen aan bestaande FAQ-sectie (6 vragen, incl. wetenschappelijke bronnen — nu geen rich-snippet-kans)
- [ ] Performance check laten draaien (PageSpeed Insights) — homepage weegt 357KB HTML met 5 Shopify-app-extensies, exacte Core Web Vitals nog niet gemeten
- [ ] Autoriteit-cue (wetenschappelijke onderbouwing) eerder op de pagina zichtbaar maken, niet pas in de FAQ onderaan

## Blog-structuur & content (voorstel, 2026-09-14)

> Aanleiding: GA4 laat zien dat de 24 bestaande blogposts nauwelijks bezoek krijgen (2-4 views/2 weken per post). Root cause is geen contenttekort maar **interne linking** — zie onderbouwing hieronder. Status: **voorstel — nog niet doorgevoerd.**

**Fase 1 — technische fix (hoogste impact, laagste moeite):**
- [ ] Hub-pagina `/pages/blogs` linkt nu naar maar 10 van de 24 posts — uitbreiden naar alle posts, gegroepeerd per pijler
- [ ] `/blogs/hi-grip` en `/blogs/trends` (blog-indexpagina's, tonen wel alle posts van hun blog) zelf linken vanuit hub/footer — nu nergens intern gelinkt, alleen via sitemap vindbaar
- [ ] "Lees ook"-blok (2-3 gerelateerde posts) + duidelijke CTA naar `/collections/gripsokken` toevoegen aan het eind van elke post

**Fase 2 — consolideren i.p.v. toevoegen (voorkomt keyword-cannibalisatie):**
- [ ] Pilates-duo samenvoegen: `gripsokken-pilates-yoga` + `waarom-gripsokken-verplicht-bij-pilates`
- [ ] Onderhoud-duo samenvoegen: `hoe-zorg-ik-voor-mijn-gripsokken` + `hoe-verleng-je-de-levensduur`
- [ ] Blessure-duo samenvoegen: `waarom-gripsokken-het-verschil-maken` + `hoe-gripsokken-kunnen-helpen-bij-het-voorkomen-van-blessures`
- [ ] Oude URL's 301-redirecten naar de samengevoegde pagina

**Fase 3 — pijlerstructuur (hub-and-spoke; sinds besluit 2026-09-21 sportgericht conform [[SEO Strategie & Keywords]] — sporten hebben eigen landingspagina's als spokes; de "merk-breed, geen landingspagina's"-formulering was eerder):**
1. Wat zijn gripsokken (awareness, target "gripsokken")
2. Grip per situatie (pilates/yoga, krachttraining, voetbal, comfort — long-tail spokes)
3. Prestatie & blessurepreventie (E-E-A-T, wetenschappelijke bronnen)
4. Onderhoud (post-aankoop, retentie)
5. Merkverhaal & innovatie (differentiatie)

**Nieuwe kansen (nog niet opgepakt):**
- `waarom-steeds-meer-sportclubs-gripsokken-toevoegen` is eigenlijk een B2B-hoek — kruislinken met Partnership Agent (Lijn A/B) i.p.v. los laten staan
- `de-twee-grootste-problemen-in-de-sportwereld` (thought-leadership) is een goede kandidaat om te knippen tot social-content

**Koppeling met e-mail (2026-09-14):** elke nieuwe blogpost levert vanaf nu ook een bijpassende e-mail op — zie de nieuwe E-mail Marketing Agent-sub-agent in `04_Agent_Infrastructuur/Website Agent/identiteit.md` en [[E-mail Lijst Strategie]].

**Publicatiefrequentie (voorstel):** eerst Fase 1-2 afronden (bestaande 24 posts goed benutten) vóór nieuwe content — met dit volume is meer schrijven zinloos zolang het merendeel onvindbaar blijft. Daarna een **haalbaar, vol te houden ritme van 1 nieuwe blog per 2 weken** (± 2/maand), i.p.v. een hoog tempo dat niet vol te houden is naast de rest van de contentplanning. Frequentie is sowieso ondergeschikt aan interne linking en onderwerpdiepte — een consistent ritme van 2/maand met goede linking presteert beter dan 4/maand zonder.

## Bewust nog niet opgepakt (input/toegang nodig)

- ~~Sport-specifieke landingspagina's — bewust niet prioriteit~~ — **achterhaald 2026-09-21:** lars koos sportfocus, de pagina's staan live (zie [[SEO Strategie & Keywords]])
- Shopify-app-audit (welke 5 extensies precies, nut per stuk) — vereist Shopify-adminbtoegang, zie [[Shopify App Stack]]
- Analytics-baseline (huidige conversieratio, verkeer) — vereist toegang tot GA4/Shopify-analytics, zie [[Analytics & KPI Dashboard]]

---

## Uitvoering — kant-en-klare content (2026-08-01)

> Concept-content per checklist-punt. Items met **[LARS]** hebben een korte input van lars nodig.

**Update 2026-08-02: punt 2 en 6 zijn geïmplementeerd en geverifieerd**, rechtstreeks via Shopify CLI (native merchant-login werkt, zie [[Technische Procedures]] en [[API & Tool Connections]]) op theme `198505464135` ("AI Workspace", unpublished, nooit live). Inhoud kwam uit de echte theme-bestanden zelf (niet gegokt): `templates/index.json` voor de 8 echte FAQ-vragen+antwoorden, `config/settings_data.json` voor het echte logo-bestand. Nieuwe snippets: `snippets/organization-schema.liquid`, `snippets/faq-schema.liquid`, gerenderd vanuit `layout/theme.liquid` (alleen op homepage). Geverifieerd op de preview-URL: geen Liquid-errors, beide schema's renderen correct. Social-links (`sameAs`) zijn leeg gelaten — er staan nog geen social-URL's in de theme-instellingen, dus niets verzonnen; zodra lars die invult via Theme Editor pakt de schema-code ze automatisch op, geen codewijziging nodig.

**Punt 1 bleek geen theme-code te zijn** — de homepage-title/meta-description worden bepaald door Admin → Online Store → Preferences (2 tekstvelden), niet door theme-Liquid. Lars kan dit dus zelf direct invullen, geen CLI/code voor nodig.

### 1. Homepage `<title>`
Voorstel (mirrort het patroon van de productpagina-title):
```
Gripsokken | Anti-Slip Sportsokken met Grip | HÏ Grip
```
Dekt kernproduct-pijler ("gripsokken", doel #1-positie) + categorie-pijler ("anti-slip sokken sport") + merk, ~55 tekens.

### 2. Organization/WebSite structured data (leeg `ld+json` homepage)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HÏ Grip",
  "url": "https://www.higrip.nl",
  "logo": "[LARS: URL naar logo-bestand, bv. via Shopify Files]",
  "sameAs": [
    "[LARS: Instagram-URL]",
    "[LARS: TikTok-URL]",
    "[LARS: overige actieve kanalen]"
  ]
}
```
**[LARS]** logo-URL + social-URL's invullen — geen kanalen zelf verzonnen.

### 3. Klantenaantal synchroniseren
**[LARS]** Homepage zegt 2.000+, productpagina 1500+ — welk cijfer klopt echt? Zodra bekend: overal hetzelfde getal, geen schatting van mijn kant.

### 4. Alt-teksten — patroon + voorbeelden
```
Hero/banner: "Sporter draagt HÏ Grip anti-slip gripsokken tijdens wedstrijd"
Productfoto: "HÏ Grip gripsokken close-up — antislip zool voor sportschoenen"
Partner-logo (footer): "[Partnernaam] — partner van HÏ Grip"
```
**[LARS]** Dit is een patroon, geen 1-op-1 lijst — daarvoor moet ik de echte afbeeldingen zien (Shopify-toegang of jij deelt de bestandsnamen/lijst).

### 5. `og:image`
Nog geen asset. Kan ik nu genereren (lifestyle/actie-beeld i.p.v. staand logo) via de product-photoshoot-skill — zeg het en ik zet 'm klaar.

### 6. FAQPage-schema
Skelet klaar, **[LARS]** exacte FAQ-tekst (6 vragen + antwoorden + bronvermeldingen) nodig — live fetch mislukte, dus ik vul 'm niet in op basis van geheugen/aanname:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "[VRAAG 1]", "acceptedAnswer": { "@type": "Answer", "text": "[ANTWOORD 1]" } }
  ]
}
```

### 7. Performance check
Geen tool hier om Lighthouse/Core Web Vitals live te draaien. **[LARS]** Zelf even pagespeed.web.dev/analysis op www.higrip.nl draaien en cijfers terugkoppelen, dan verwerk ik ze.

### 8. Autoriteit-cue eerder op de pagina
Voorstel voor bij productvoordelen-sectie (punt 4 in [[Homepage Copy & Structuur]]), toon conform Brand Voice (direct, expertise-ondersteunend):
```
"Wetenschappelijk onderbouwd — bekijk de bronnen in de FAQ."
```
Exacte claim hangt af van de echte FAQ-bronnen (zie punt 6) — kan scherper zodra die tekst er is.

---

## Werkwijze

Alle wijzigingen aan Shopify-code gaan via een apart/duplicate theme, nooit direct live — zie [[Goedkeuringsworkflow]].

---

## Gerelateerde bestanden

- [[SEO Strategie & Keywords]] — Onderbouwing SEO-punten
- [[Homepage Copy & Structuur]] — Onderbouwing psychologie-punten
- [[Agent Takenverdeling & Grenzen]] — Wie mag wat uitvoeren
