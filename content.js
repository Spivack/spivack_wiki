/**
 * content.js — Spivack Surname Article Content
 */

const CONTENT = {

  // ── Page metadata ─────────────────────────────────────────
  meta: {
    title:       'Spivack — Surname History & Meaning',
    description: 'A brief history and etymology of the Spivack surname.',
    lastUpdated: '2026-03-12',
  },

  // ── Article header ─────────────────────────────────────────
  header: {
    title:    'Spivack',
    subtitle: 'A Jewish surname, originating from the Pale of Settlement area within the former Russian Empire',
  },

  // ── Infobox ─────────────────
  infobox: {
    heading: 'Spivack',
    rows: [
      { label: 'Language(s)',      value: 'Ukrainian; Yiddish; Russian' },
      { label: 'Origin',           value: 'Eastern Europe' },
      { label: 'Meaning',          value: 'Singer or cantor' },   
      { label: 'Region of origin', value: 'Pale of Settlement, Russian Empire' },   
      { label: 'Variant forms',    value: 'Spivak' },
      { label: 'Related surnames', value: '' },
    ],
  },

  // ── Lead / introduction paragraphs ────────────────────────
  // Each string becomes one <p>. HTML tags are allowed.
  lead: [
    '<b>Spivack</b> is a surname of Ukrainian origin, most commonly found among <a href="https://en.wikipedia.org/wiki/Ashkenazi_Jews">Ashkenazi</a> Jewish families whose ancestors lived in the <a href="https://en.wikipedia.org/wiki/Pale_of_Settlement">Pale of Settlement</a> territory of the former Russian Empire.',

    'The name is one of several Americanized/Germanized spellings of the original form <i>Spivak</i>, meaning singer or cantor.<sup>[1]</sup>',
  ],

  // ── Article sections ───────────────────────────────────────
  // Each section renders an <h2> heading followed by its content blocks.
  // Content block types:
  //   { type: 'p',  html: '...' }          — paragraph
  //   { type: 'h3', text: '...' }          — subheading
  //   { type: 'ul', items: ['...', '...'] } — unordered list
  //   { type: 'ol', items: ['...', '...'] } — ordered list
  sections: [
    {
      id:    'etymology',
      title: 'Etymology',
      content: [
        {
          type: 'p',
          html: 'The surname is profession-based, and likely originated after 1804, when Jewish families adopted surnames by order of the Russian Empire.<sup>[2]</sup>',
        },
        {
          type: 'p',
          html: 'The anglicized spelling <i>Spivack</i>, is originally from the Jewish Ukrainian surname <i>Spivak</i>.',
        },
      ],
    },

    {
      id:    'history',
      title: 'History and origins',
      content: [
        {
          type: 'p',
          html: '[Put more detailed history here]',
        },
        { type: 'h3', text: 'Immigration and diaspora' },
        {
          type: 'p',
          html: 'It appears that the majority of Spivacks in the USA settled between New York City and Philadelphia.<sup>[3]</sup> ', // Describe migration patterns
        },
      ],
    },

    {
      id:    'crest',
      title: 'Family Crest',
      content: [
        {
          type: 'p',
          html: 'A historic family crest could not be found.  It appears that any family heritage crests claiming to be historical to Spivack (or Spivak) are likely modern creations.  Jewish families typically did not have family crests or coats of arms, as they were a feature of European nobility.<sup>[4]</sup>', // Country-level overview.
        },
      ],
    },
  ],

  // ── References ─────────────────────────────────────────────
  // Each string becomes a numbered <li>. HTML is allowed.
  references: [
    'Hanks, Patrick (2003-05-08). Dictionary of American Family Names. Oxford University Press. ISBN 978-0-19-977169-1. ',
    'M Paull and J Briskman: “The History, Adoption, and Regulation of Jewish Surnames in the Russian Empire – A Review.” Surname DNA Journal, September 21, 2014. http://www.surnamedna.com/?articles=history-adoption-and-regulation-of-jewish-surnames-in-the-russian-empire.',
    'MyHeritage, “Spivack Last Name Meaning and Origin,” accessed March 13, 2026, https://lastnames.myheritage.com/last-name/spivack',
    'Encyclopaedia Judaica, 2nd ed., entry “Heraldry.”',
  ],

  // ── Site footer text ───────────────────────────────────────
footer: 'Content on this site is original research and compilation by Evan Spivack. All sources are cited in the References section above. Work in Process',
};
