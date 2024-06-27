export default function Men() {
  return (
    <>
      <section className="banner men-first-banner">
        <div className="banner-img img-container">
          <img src="../../images/men_banner_1_mobile.webp" alt="" />
        </div>

        <div className="banner-text">
          <h3 className="banner-text__heading">NIKE METCON 9</h3>
          <p className="banner-text__para">
            Durability and stability for your strength training.
          </p>
          <a href="#" className="banner-text__button btn-black">
            Shop
          </a>
        </div>
      </section>

      <section className="grid">
        <div className="two-imgs img-container grid-stacked">
          <img src="../../images/men_shoe_1.jpeg" alt="" />
          <div className="text">
            <h3>This is heading</h3>
            <a href="#" className="button btn-white">
              Shop
            </a>
          </div>
        </div>
        <div className="img-container grid-stacked">
          <img src="../../images/men_shoes_2.webp" alt="" />
          <div className="text">
            <h3>Explore the Collection</h3>
            <a href="#" className="button btn-white">
              Shop
            </a>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="banner-img img-container">
          <img src="../../images/men_banner_2_mobile.webp" alt="" />
        </div>

        <div className="banner-text">
          <p className="banner-text__subheading">Jordan</p>
          <h3 className="banner-text__heading">EASY ALL DAY</h3>
          <p className="banner-text__para">
            Fashion is all about Your Comfort and Confidence.
          </p>
          <a href="#" className="banner-text__button btn-black">
            Shop
          </a>
        </div>
      </section>

      <footer></footer>
    </>
  );
}
