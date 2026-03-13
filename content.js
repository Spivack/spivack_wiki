/**
 * content.js — Spivack Surname Article Content
 */

const CONTENT = {

  // ── Page metadata ─────────────────────────────────────────
  meta: {
    title:       'Spivack — Surname History & Meaning',
    description: 'A detailed history and etymology of the Spivack surname, tracing its origins, geographic distribution, and notable bearers.',
    lastUpdated: '2026-03-12',
  },

  // ── Article header ─────────────────────────────────────────
  header: {
    title:    'Spivack',
    subtitle: 'Surname · Eastern European Jewish origin',
  },

  // ── Infobox ─────────────────
  infobox: {
    heading: 'Spivack',
    rows: [
      { label: 'Language(s)',      value: 'Yiddish; Ukrainian; Russian' },
      { label: 'Origin',           value: 'Eastern Europe' },
      { label: 'Meaning',          value: '' },   
      { label: 'Region of origin', value: '' },   
      { label: 'Variant forms',    value: 'Spivak, Spivock, Spiewak, Shpivak' },
      { label: 'Related surnames', value: '' },
    ],
  },

  // ── Lead / introduction paragraphs ────────────────────────
  // Each string becomes one <p>. HTML tags are allowed.
  lead: [
    '<b>Spivack</b> is a surname of Eastern European origin, most commonly found among Ashkenazi Jewish families whose ancestors lived in the territories of the former Russian Empire, including present-day Ukraine, Poland, and Belarus. The name is one of several anglicized spellings of the original form, which also appears as <i>Spivak</i>, <i>Spiwak</i>, and <i>Spiewak</i>.',

    // Add a second introductory paragraph here — brief overview of etymology,
    // historical spread, modern distribution, and any notable bearers.
    '',
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
          html: '', // Describe the linguistic roots of the name, its original language, and meaning.
        },
        {
          type: 'p',
          html: 'The anglicized spelling <i>Spivack</i> — with the terminal <i>-ck</i> — is characteristic of names that were transliterated from Cyrillic or Yiddish script by immigration officials or the bearers themselves upon arrival in English-speaking countries, particularly the United States and Canada, in the late nineteenth and early twentieth centuries.',
        },
        { type: 'h3', text: 'Spelling variants' },
        {
          type: 'p',
          html: '', // Explain each variant form (Spivak, Spiwak, Spiewak, Shpivak) and its geographic or historical context.
        },
      ],
    },

    {
      id:    'history',
      title: 'History and origins',
      content: [
        {
          type: 'p',
          html: '', // Describe when and where Spivack emerged as a surname
        },
        { type: 'h3', text: 'Immigration and diaspora' },
        {
          type: 'p',
          html: '', // Describe migration patterns
        },
      ],
    },

    {
      id:    'distribution',
      title: 'Geographic distribution',
      content: [
        {
          type: 'p',
          html: '', // Country-level overview.
        },
        { type: 'h3', text: 'United States' },
        {
          type: 'p',
          html: '', // USA specific.
        },
        {
          type: 'p',
          html: '', 
        },
      ],
    },
  ],

  // ── Notable people ─────────────────────────────────────────
  // Each entry renders as a list item: "Name — description"
  notablePeople: [
    { name: '', description: '' },
    { name: '', description: '' },
    { name: '', description: '' },
  ],

  // ── References ─────────────────────────────────────────────
  // Each string becomes a numbered <li>. HTML is allowed.
  references: [
    ' Hanks, Patrick (2003-05-08). Dictionary of American Family Names. Oxford University Press. ISBN 978-0-19-977169-1. ',
    '',
  ],

  // ── Site footer text ───────────────────────────────────────
  footer: 'Content on this site is original research and compilation by Evan Spivack. All sources are cited in the References section above.',

};
