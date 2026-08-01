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

## Bewust nog niet opgepakt (input/toegang nodig)

- Sport-specifieke landingspagina's — bewust *niet* prioriteit, want SEO is merk-breed (zie [[SEO Strategie & Keywords]])
- Shopify-app-audit (welke 5 extensies precies, nut per stuk) — vereist Shopify-adminbtoegang, zie [[Shopify App Stack]]
- Analytics-baseline (huidige conversieratio, verkeer) — vereist toegang tot GA4/Shopify-analytics, zie [[Analytics & KPI Dashboard]]

---

## Uitvoering — kant-en-klare content (2026-08-01)

> Concept-content per checklist-punt, gebaseerd op de audit van 14 juli. Nog niet live geverifieerd — live fetch van www.higrip.nl gaf een 429 (rate-limited), dus onderstaande gaat uit van de audit-notities, niet van een verse check. Items met **[LARS]** hebben een korte input van lars nodig voordat ze klaar zijn om in het duplicate theme te zetten.

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
