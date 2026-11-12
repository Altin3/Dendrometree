# Publikimi i aktiviteteve të DENDROMETREE nga ChatGPT / Codex

Ky projekt Next.js ka faqe për lajme në **/aktivitetet** (shqip) dhe **/activities** (anglisht).
Burimi i përmbajtjes është **content/activities.json**, pa nevojë për WordPress ose databazë.

## Si krijohet një publikim

1. Në ChatGPT/Codex kërko: "Shto një publikim në Altin3/Dendrometree për [aktiviteti], përdor vetëm faktet dhe fotografitë që të jap, shkruaje shqip dhe anglisht, dhe krijo Pull Request për miratim."
2. Modeli e shton një objekt në listën JSON. `slug` duhet të jetë unik (shkronja të vogla latine dhe viza). `date` në format YYYY-MM-DD.
3. Fillimisht vendos `status: "draft"`; publikimet draft nuk shfaqen në uebfaqe.
4. Plotëso `category`, `title`, `summary`, `paragraphs` në të dyja gjuhët.
5. Fotografi e kopertinës: vendose te `public/activities/<emri>.jpg`, dhe cakto `coverImage: "/activities/<emri>.jpg"`. Për galeri vendos `images: [{"src": "/activities/foto-2.jpg", "alt": {"sq": "...", "en": "..."}}]`.
6. Kontrollo përmbajtjen, autorizimin për fotografitë dhe verifikimin e të dhënave. Kalo `status` në `published` **vetëm pas miratimit**.
7. Krijo/mergo Pull Request në `main` pasi të kenë kaluar kontrollet. Nëse projekti Vercel lidhet me `main`, deploy zakonisht niset automatikisht; verifiko në Vercel Dashboard.

## Struktura e hyrjes

```json
{
  "slug": "titulli-i-aktivitetit",
  "date": "2026-11-12",
  "status": "draft",
  "category": {"sq": "Inventarizim pyjor", "en": "Forest inventory"},
  "title": {"sq": "Titulli i verifikuar", "en": "Verified title"},
  "summary": {"sq": "Përmbledhja", "en": "Summary"},
  "paragraphs": {
    "sq": ["Paragrafi i parë.", "Paragrafi i dytë."],
    "en": ["First paragraph.", "Second paragraph."]
  },
  "coverImage": null,
  "images": []
}
```

**Kujdes:** Mos shpik klientë, kontrata, rezultate, sipërfaqe, data ose vende.
Mos vendos API keys, kredenciale apo informacione konfidenciale në repo.
Mos përditëso drejtpërdrejt degën `main` pa kërkesë dhe miratim eksplicit.
