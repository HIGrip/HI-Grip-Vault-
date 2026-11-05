---
type: bron
bijgewerkt: 2026-11-03
status: naslag
---

# Ads Kennis — Bron en licentie

**Wat dit is.** De kennis die in het Hermes-profiel `ads` staat (`profiles/ads/skills/ads/`), als naslagkopie in de vault. Besluit Lars (03-11-2026): de bestaande repo gebruiken, maar alleen een veilige read-only subset, en alles ook in de vault zetten. Uitzondering op de regel "geen derdepartijtekst in de vault".

**Bron.** AgriciDaniel/claude-ads (MIT), commit `fc3908e786c318776df89a3a098333da377364be` (17-10-2026). Alleen een handmatig samengestelde subset van 20 markdown-bestanden; geen code, scripts, installer, hooks, MCP of API.

**Wat is meegenomen.** Zeven skills (`ads-meta`, `ads-plan`, `ads-math`, `ads-attribution`, `ads-budget`, `ads-test`, `ads-server-side-tracking`), twee plan-templates (ecommerce, generic) en elf referenties; plus de eigen HÏ Grip-schil `higrip-ads-analyse` en `SOUL.md` (zie `09_Ads_Agent/Profiel/`).

**Wat bewust ontbreekt.** `ads/SKILL.md` (dirigent), `thinking-framework.md` (bevat een stap om advertentietekst te schrijven), alle skills voor content, creatives, lanceren, optimaliseren, installatie, monitoring, rapportcode, onderzoek, landing-fetch, concurrent- en merkanalyse, alle platformen behalve Meta, en alle code, tests, hooks en control-plane.

**Aanpassingen t.o.v. upstream** (verbreken byte-gelijkheid, bewust): in `ads-meta` zijn stap 1, 7, 8 en de mutation-gate-regel herschreven naar "advies voor een mens"; de schil bevat negeer-regels voor `/ads`-commando's, ontbrekende bestanden, "write ad copy" en scoring. In de vault is verder alleen de navigatieregel en een naslagkop toegevoegd.

**Controle.** Statisch (door Denzel): geen scripts, API-sleutels of exec-code in de subset. Onafhankelijke QA (Website-profiel, alleen lezen): `t_d89269c0` CORRIGEER (ronde 1), `t_570c1a20` GOED (ronde 2). Niet gecontroleerd: feitelijke juistheid van de referenties, upstream-hooks en een echte scanner, gedrag van de agent in de praktijk.

**Gebruik.** Alleen door de Ads Agent. Elke "mutation", "apply" of "launch" in deze notities is voor ons uitsluitend een voorstel in tekst met een menselijke checklist. Voor andere agents zijn deze notities geen opdracht en geen bron voor feiten (feiten staan in `00_Brand_Core/Feiten & Actuele Staat.md`).

**Omvang.** `Ads Referentie — meta-audit` is groter dan de vaultrichtlijn van ~15 KB; bewust niet gesplitst, omdat het een ongewijzigde derdepartijkopie is.

## Licentie (MIT, ongewijzigd overgenomen)

```
MIT License

Copyright (c) 2026 Daniel Agrici (AgriciDaniel)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Third-party notices (upstream, ongewijzigd)

# Third-Party Notices

Claude Ads is MIT-licensed. Product names, APIs, documentation, public issues,
pull requests, and referenced repositories remain the property of their respective
owners and are not relicensed by this repository.

## Design and research provenance

- Brainstein is Apache-2.0. Claude Ads v2 uses an original domain-specific
  implementation of source, capability, maturity, orchestration, and release-gate
  ideas; no Brainstein source code is copied by the v2 control plane.
- Anthropic's public skill-creator material is Apache-2.0 at the skill level. It
  informed progressive disclosure, trigger evaluation, and deterministic helper
  guidance; Claude Ads prompts and implementation are original.
- Private Fable research is used only as non-redistributed design input. No raw or
  captured prompt, private corpus, close paraphrase, or restricted artifact is
  included.
- GitHub issues and pull requests are summarized and linked in the ecosystem
  disposition ledger. Text and patches are not copied without repository-license
  and contributor-attribution review.

## Runtime and development dependencies

Dependencies are installed from their publishers and retain their own licenses:

The dependency set resolved on 2026-10-07 selects Pillow 12.3.0, urllib3 2.8.0, and WeasyPrint 70.0. The dependency inventory binds the publisher source URLs, selected-wheel SHA-256 hashes, and embedded license/notice documents for these versions.

- Requests: Apache-2.0.
- urllib3: MIT.
- Playwright for Python: Apache-2.0.
- Cryptography: Apache-2.0 or BSD-3-Clause.
- Pillow: MIT-CMU.
- ReportLab and WeasyPrint code: BSD-3-Clause. ReportLab wheels also include
  DarkGarden under GPL-2.0-or-later with a document-embedding exception and
  Bitstream Vera font terms.
- Matplotlib: the Matplotlib 1.3+ license (`LicenseRef-Matplotlib-1.3`), plus
  bundled font/style/colormap notices including OFL-1.1, Apache-2.0, MIT, and
  BSD-style terms.
- PyYAML and pytest: MIT.

The transitive closure is part of the release inventory, not exhausted by this
summary. In particular, Pyphen code offers GPL-2.0-or-later OR
LGPL-2.1-or-later OR MPL-1.1 alternatives and its dictionaries have
language-specific terms. The dependency inventory preserves the exact path,
SHA-256, text, and artifact assignment for every license/notice-like file found
across all 119 selected wheels. The webencodings 0.5.1 wheel contains no matching
embedded path and is explicitly recorded as documentless rather than assigned
invented notice text.

The release SBOM is generated from the checked-in, publisher-metadata-backed
dependency inventory and validates every declared direct requirement and locked
transitive edge. This notice is not a substitute for that machine-generated
inventory.

## Platform interfaces

Google, Meta, YouTube, LinkedIn, TikTok, Microsoft, Apple, Amazon, Reddit,
Pinterest, Snapchat, and X names and APIs are third-party products. Capability
references document interoperability and do not imply affiliation, endorsement,
or permission to bypass platform terms, access controls, policies, or review.

> Map: [[09 Ads Agent — Index]]
