export default function HeaderPrimary() {
  return (
    <section className="header-primary">
      <div className="header-primary-inner container d-lg-none">
        <div className="header-bars">
          <ul>
            <li>
              <a href="https://x.ro" title="Nav bar">
                <i className="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="header-search">
          <input type="search" name="Search" id="Search" placeholder="search" />

          <label for="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
        </div>
      </div>
    </section>
  );
}
