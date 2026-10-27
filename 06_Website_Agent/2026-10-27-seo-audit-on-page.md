---
status: concept
datum: 2026-10-27
bron: kanbantaak t_dfa6ef0a (Website Agent), vastgelegd door Denzel
---

# SEO-audit on-page — higrip.nl (27-10-2026)

> Map: [[06 Website Agent — Index]]

Alleen-lezen audit. Overdracht van de Website Agent uit het kaartcommentaar, vastgelegd door Denzel omdat de agent zijn afsluitende stap niet mocht uitvoeren (unattended approvalbeleid). Nog niet door Website-QA getoetst (t_e9d2ff5f). Metadata-tellingen: `C:/Users/lars/AppData/Local/hermes/kanban/workspaces/t_dfa6ef0a/metadata-counts.csv`.

## Bevindingen

| Prio | Bevinding |
|---|---|
| P1 | `/policies/shipping-policy` belooft verzending dezelfde dag vóór 16:00; `/policies/refund-policy` noemt 14 dagen, ongeopend en 25% herbevoorradingskosten. Vergelijk met Feiten & Actuele Staat (retour/verzending). FAQ linkt beide oude policies en alle drie productpagina's linken de oude shipping-policy. |
| P1 | Product 1.0 noemt "95%" zonder bron direct naast het cijfer; de FAQ van alle drie producten noemt minder blessurerisico zonder onderbouwing in Feiten & Actuele Staat. |
| P2 | Homepage-meta en collectie noemen 3000+ in plaats van het vastgestelde 3500+. Homepage-retailblok noemt een adviesprijs van €19,95, het feitenbestand €17,95. |
| P2 | `/pages/collection` en `/collections/gripsokken` hebben eigen canonicals en overlappende koopintentie. Daadwerkelijke kannibalisatie niet gemeten. |
| P3 | Blog `/blogs/hi-grip/wat-zijn-gripsokken` heeft geen interne links in main. |
| P3 | Collectie verwijst naar oude producthandles; productalts zijn generiek; 2.0-kleurkeuzeplaatjes missen alt. |

## Bestaande open voorstellen (niet opnieuw voorstellen)

Kleurcollecties, voetbalkeuzegids en blogmeta staan open in `02_Dashboard/Onderzoek/2026-10-11-concurrentie-seo-per-merk.md`, regels 38–42.

## Niet gecontroleerd

Search Console, de hele bloginventaris, EN/mobiel, schema, actuele zoekwoordvolumes. Voor metadata is geen vastgestelde lengtebandbreedte gevonden; geen harde fout op tekenlengte geclaimd.

## Let op

Policy-afwijkingen (P1) raken retour en verzending: eerst controleren tegen `00_Brand_Core/Feiten & Actuele Staat.md`; aanpassen op de site vraagt akkoord van Lars. Brand Core niet wijzigen zonder zijn toestemming.
