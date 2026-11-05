# Codegenerator flitsinterview — stappenplan

Elke ingevulde survey krijgt één eigen code (`HI30-XXXXXXXX`): 30% op alles, geldig voor 3 bestellingen in totaal (elke klant één keer), 30 dagen geldig. Er is geen e-mailveld en geen SendWILL-popup.

De code staat meteen in de winkelwagen van de invuller. Met de knop *Deel met een vriend* gaat er een link `https://www.higrip.nl/community/korting/<code>` mee. Shopify geeft dat adres via de app proxy door aan de Worker (`/d/<code>`); die pagina geeft een linkvoorbeeld met de code en stuurt door naar `higrip.nl/discount/<code>` (landt op `SHARE_REDIRECT`). Een directe `/discount/`-link werkt niet in Snapchat: die vervangt hem door de og:url van de winkelpagina en de code valt weg. `assets/hg-deelcode.js` (in `layout/theme.liquid`, op de hele winkel) zet de code bij de ontvanger in de winkelwagen zodra die iets toevoegt.

Live sinds 28-10-2026 op thema 202669916487.

```
survey verstuurd → eindscherm → Turnstile (botcheck) → Cloudflare Worker → Shopify maakt de code → code + Shop-knop op de pagina
```

Duur: ±30 minuten, eenmalig. Kosten: €0 (gratis laag van Cloudflare ruim genoeg: 100.000 verzoeken en 1.000 KV-schrijfacties per dag; per code zijn dat 2 schrijfacties).

---

## Eerst beslissen

Deze staan nu ingesteld in `wrangler.toml`. Pas ze daar aan vóór stap 4.

| Instelling | Nu | Betekenis |
|---|---|---|
| `PERCENTAGE` | 30 | korting in procenten |
| `VALID_DAYS` | 30 | code verloopt na zoveel dagen |
| `USES_PER_CODE` | 3 | zoveel bestellingen in totaal krijgen de korting (elke klant één keer); staat ook in de teksten op de survey-pagina |
| `COMBINE_SHIPPING` | false | Laten staan. Gratis verzending komt uit het verzendtarief "Gratis verzending" (vanaf €30), niet uit een korting; de automatische korting "GRATIS VERZENDING BOVEN DE €35" combineert zelf met niets, dus `true` verandert niets (gecontroleerd 28-10) |
| `PER_VISITOR_PER_DAY` | 20 | max. nieuwe codes per netwerk per dag; ruim, zodat een heel team op clubwifi kan invullen (dezelfde browser krijgt steeds dezelfde code) |
| `DAILY_CAP` | 100 | max. codes per dag voor de hele winkel |
| `CODE_PREFIX` | HI30 | begin van elke code, handig zoeken in Shopify |

---

## Stap 1 — Shopify-app (Dev Dashboard)

1. Ga naar **dev.shopify.com** en log in met het account dat eigenaar is van de winkel.
2. **Apps → Create app** → naam `HÏ Grip codegenerator`.
3. Bij **Versions → Create version**: zet bij *Access scopes* alleen `write_discounts` en `read_discounts`. Release de versie.
4. **Install app** op de winkel `raqds3-tb` (higrip.nl) en keur de rechten goed.
5. **App proxy** (voor de deel-link `higrip.nl/community/korting/<code>`): in dezelfde versie scope `write_app_proxy` erbij, en bij *App proxy*: prefix `community`, subpath `korting`, URL `https://higrip-codes.higrip.workers.dev/d`. Na het releasen in de Shopify-admin de nieuwe rechten goedkeuren.
6. **App settings**: noteer *Client ID* en *Client secret*. Deel de secret met niemand en plak hem nergens anders dan in stap 4.

> Lukt het token later niet (`shop_not_permitted`), dan staan app en winkel niet in dezelfde organisatie in het Dev Dashboard.

## Stap 2 — Cloudflare Turnstile (botcheck)

1. Maak een gratis account op **dash.cloudflare.com**.
2. **Turnstile → Add widget**: naam `Flitsinterview`, hostnames `higrip.nl` en `www.higrip.nl`, widget mode **Managed** (Invisible kan ook, maar faalt vaker bij strenge browsers).
3. Noteer de **Site key** (openbaar, komt in het thema) en de **Secret key** (geheim, komt in de Worker).

## Stap 3 — Worker klaarzetten

In een terminal, in deze map (`output/survey-codegenerator`):

```bash
npx wrangler login
```

```bash
npx wrangler kv namespace create CODES_KV
```

Zet de `id` die verschijnt in `wrangler.toml` op de plek van `VUL_IN_NA_STAP_3`.

## Stap 4 — Geheimen invullen en publiceren

Elke opdracht vraagt om de waarde; plak die daar (niet in een bestand):

```bash
npx wrangler secret put SHOPIFY_CLIENT_ID
```

```bash
npx wrangler secret put SHOPIFY_CLIENT_SECRET
```

```bash
npx wrangler secret put TURNSTILE_SECRET
```

```bash
npx wrangler secret put IP_SALT
```

Voor `IP_SALT` typ je een willekeurige lange tekst (bijv. 40 tekens). Daarmee worden IP-adressen onherkenbaar gemaakt voor de limiet; er wordt nooit een IP-adres opgeslagen.

```bash
npx wrangler deploy
```

Noteer het adres dat verschijnt, bijv. `https://higrip-codes.<jouw-naam>.workers.dev`. Het adres voor het thema is dat **+ `/code`**.

## Stap 5 — Testen op een testthema (niet live)

1. Draai eerst `shopify theme list` en kies een **unpublished** thema.
2. Push daar de vier survey-bestanden naartoe (`sections/hg-survey.liquid`, `assets/hg-survey.js`, `assets/hg-survey.css`, `templates/page.survey.json`).
3. Open de themaeditor van dat testthema → pagina survey → sectie *Flitsinterview* → *Na versturen*:
   - **Codegenerator: adres** = Worker-adres + `/code`
   - **Codegenerator: Turnstile site key** = site key uit stap 2
4. Vul de survey in via de preview. Op het eindscherm moet binnen een paar seconden een `HI30-…`-code staan.
5. Controleer in Shopify → Kortingen dat de code bestaat (30%, 3 keer te gebruiken, één keer per klant, einddatum). **Verwijder die testcode daarna.**

## Stap 6 — Live

Alleen op expliciete opdracht: dezelfde vier bestanden plus `assets/hg-deelcode.js` en de scriptregel in `layout/theme.liquid` naar het live thema (eerst `shopify theme list`). Push de sectie vóór het template, anders gooit Shopify de nieuwe template-instellingen weg. Daarna in de themaeditor de twee velden uit stap 5.3 controleren.

Zodra de codegenerator ingevuld is, gebruikt de pagina de SendWILL-popup niet meer. Zet popup 379247 in SendWILL dan op **inactief**.

---

## Beheer

- **Codes terugvinden:** Shopify → Kortingen, zoek op `HI30-` of tag `flitsinterview`.
- **Iemand krijgt geen code:** de pagina toont "Je code kwam niet door. Klik nog een keer op Claim je korting." Oorzaak zien: `npx wrangler tail` in deze map laat live meldingen zien.
- **Meldingen in `wrangler tail` (gezien bij de eerste test, 28-10):**
  | Melding | Oorzaak | Oplossing |
  |---|---|---|
  | `turnstile rejected: … invalid-input-secret` | Turnstile Secret key fout | `npx wrangler secret put TURNSTILE_SECRET` |
  | `token 400 … application_cannot_be_found` | Client ID fout | `npx wrangler secret put SHOPIFY_CLIENT_ID` |
  | `token 400 … invalid_request` | Client secret fout (of geroteerd) | `npx wrangler secret put SHOPIFY_CLIENT_SECRET` |
  | `token 400 … shop_not_permitted` | App en winkel niet in dezelfde organisatie | zie stap 1 |

  Na elke `secret put` volgt automatisch een nieuwe versie; `npx wrangler deploy` is alleen nodig na een codewijziging.
- **Daglimiet bereikt:** verhoog `DAILY_CAP` in `wrangler.toml` en draai `npx wrangler deploy`.
- **Noodstop:** maak in de themaeditor het veld *Codegenerator: adres* leeg. De pagina valt dan terug op de popup (inactief) en daarna op het veld *Reservecode*. Dat veld is nu leeg; vul er bij een noodstop een vaste code in, anders ziet de bezoeker "Je code kwam niet door".
- **Tests van de Worker:** `npm test` (draait tegen nagebootste Shopify, Turnstile en KV, maakt geen echte codes).
