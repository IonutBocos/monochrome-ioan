export default function ProductTileWomen() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a
          href="https://x.ro"
          className="product-tile-image"
          title="Monochrome New Stuff"
        >
          <img src="/images/watch4.png" alt="Monochrome New Stuff" />
        </a>

        <a
          href="https://x.ro"
          title="add to favorite"
          className="badge-favorite"
        >
          <i className="fa-solid fa-heart"></i>
        </a>
      </header>

      <div className="product-tile-title">
        <h1>Monochrome</h1>
      </div>

      <div className="product-tile-pricing">
        <span>$425</span>
      </div>
    </article>
  );
}
