// The search palette (ninja-keys) keeps its styles in a shadow root that page
// CSS cannot reach. Add one rule there: a square, flat frame like the rest of
// the site.
customElements.whenDefined("ninja-keys").then(() => {
  const palette = document.querySelector("ninja-keys");
  if (!palette || !palette.shadowRoot || !("adoptedStyleSheets" in palette.shadowRoot)) return;
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(".modal-content { border-radius: 0; backdrop-filter: none; border: 1px solid var(--global-divider-color); }");
  palette.shadowRoot.adoptedStyleSheets = [...palette.shadowRoot.adoptedStyleSheets, sheet];
});
