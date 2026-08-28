# Regency Contracting Web

Official website of **Regency Circle Company for Investments** (Regency Contracting / Regency Technology) — Riyadh, Saudi Arabia.

A bilingual (English / Arabic, full RTL) static website presenting the company's two sectors and 31 services, with a quotation request form.

## Structure

```
index.html          — the whole site (single page)
css/styles.css      — styling (brand system: charcoal + gold / blue)
js/script.js        — services data (EN/AR), language toggle, quote form
assets/img/         — photos extracted from the company profile PDF
assets/favicon.svg  — browser tab icon
```

## Run locally

Any static file server works, e.g.:

```bash
npx -y serve -l 8734 .
```

Then open http://localhost:8734 — or simply double-click `index.html`.

## Configuration

Contact details used by the quote form live at the top of `js/script.js`
(`CONTACT` object): the destination **email** and **WhatsApp** number.

## Content source

All texts, services, and photos come from the official company profile
(“REGENCY C co” PDF). Contact info: 920007598 · +966 56 150 3424 ·
https://regencyc.co · Al Wadi Dist., Riyadh 13313, Saudi Arabia.
