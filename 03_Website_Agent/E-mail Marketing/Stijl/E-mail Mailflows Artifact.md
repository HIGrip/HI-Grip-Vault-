# E-mail Mailflows Artifact

> De 5 HÏ Grip transactionele e-mailontwerpen (bedankt/order-bevestiging, review-verzoek, kortingscode-ontvangen, kortingscode-herinnering, winkelmandje/cart-abandonment) staan als preview-gallery gepubliceerd:
>
> **https://claude.ai/code/artifact/b869cdba-410a-45a2-a71f-41902cf1aac0**
>
> Altijd dit artifact eerst raadplegen (openen/lezen) vóór een nieuwe e-mail gebouwd wordt — nooit een nieuwe stijl verzinnen los hiervan. Zie [[E-mail Design & Stijlgids]] voor de samengevatte ontwerpregels die hieruit zijn gedestilleerd.

---

## Belangrijke beperking

De echte productie-`.html`-bestanden (met echte gehoste higrip.nl CDN-afbeeldingen, geschikt om direct te plakken in Shopify) stonden alleen in een tijdelijke scratchpad-map die niet tussen sessies bewaard blijft. **Alleen dit artifact overleeft** (een preview-gallery met afbeeldingen als base64 ingebed voor sandboxed rendering). Wil je de echte, importeerbare HTML opnieuw: structuur/copy/kleuren uit het artifact overnemen, en de echte higrip.nl-afbeeldings-URL's opnieuw ophalen — niet de ingebedde base64-afbeeldingen van het artifact in productie gebruiken.

**Werkende extractiemethode (2026-09-10, voor de winkelmandje-mail):** Artifact lezen → de 5 `<iframe src="data:text/html;base64,...">`-frames (volgorde 01-05) met regex eruit halen → base64-decoderen van het gewenste frame → de ingebedde base64-afbeeldingen vervangen door de echte CDN-URL's (bv. logo: `https://cdn.shopify.com/s/files/1/0935/0918/9959/files/HI_Grip_logo_high_res.png?width=100`).

**Echte bestemming:** een Shopify Messaging "Custom Liquid"-sectie (Shopify's eigen template levert al header/footer/unsubscribe — die dus zelf niet meebouwen). Vereisten: fluid 100% breed, `hg-`-voorvoegsel op classes, < 50 KB. Beschikbare variabelen lopen uiteen per automation (`abandoned_checkout.*` vs. `abandoned_visit.*`, zie [[E-mail Design & Stijlgids]] voor het volledige veldoverzicht) — elke variabele is `null` buiten zijn eigen automation, dus één sectie kan op beide vertakken.

---

## Gerelateerde bestanden

- [[E-mail Design & Stijlgids]] — de gedestilleerde ontwerpregels
- [[E-mail Lijst Strategie]]
- [[E-mail Marketing Benchmarks]]
