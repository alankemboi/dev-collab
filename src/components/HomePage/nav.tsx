const linkes = [];
export function NavBar() {
  return (
    <nav
      className="header_nav-dropdown-list w-dropdown-list"
      id="w-dropdown-list-6"
      aria-labelledby="w-dropdown-toggle-6"
    >
      <a
        href="#overview"
        className="header_floating-dropdown-item w-dropdown-link"
      >
        Product Overview
      </a>
      <a
        href="/gallery"
        className="header_floating-dropdown-item w-dropdown-link"
      >
        Scribe Gallery
      </a>
      <a
        href="/integrations"
        className="header_floating-dropdown-item w-dropdown-link"
      >
        Integrations
      </a>
      <a
        href="https://scribe.launchnotes.io/"
        className="header_floating-dropdown-item w-dropdown-link"
      >
        What's New
      </a>
    </nav>
  );
}
