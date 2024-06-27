export default function Home() {
  return (
    <>
      <div id="hero">
        <h1 className="hero-heading-1">NIKE</h1>
        <h1 className="hero-heading-2">AIR REACT</h1>

        <div className="hero-img-container">
          <img
            src="images/nikeHomeShoe.png"
            alt="nike shoe image"
            className="hero-shoe-img"
          />
        </div>

        <div className="bubble-medium bubble-blue">
          <img src="./images/bubble_blue.svg" alt="" />
        </div>

        <div className="bubble-medium bubble-orange-1">
          <img src="./images/bubble_orange_1.svg" alt="" id="orange-1" />
        </div>

        <div className="bubble-medium bubble-orange-2">
          <img
            src="./images/bubble_orange_2.svg"
            alt="oragne-bubble"
            id="orange-2"
          />
        </div>

        <div className="bubble-large bubble-large-1">
          <img src="./images/bubble_large_1.svg" alt="" id="large-1" />
        </div>

        <div className="bubble-large bubble-large-2">
          <img src="./images/bubble_large_2.svg" alt="" id="large-2" />
        </div>

        <div className="bubble-small bubble-small-1">
          <img src="./images/bubble_small_1.svg" alt="" id="small-1" />
        </div>

        <div className="bubble-small bubble-small-2">
          <img src="./images/bubble_small_1.svg" alt="" id="small-2" />
        </div>

        <div className="bubble-small bubble-small-blue">
          <img src="./images/bubble_small_3.svg" alt="" id="small-3" />
        </div>

        <div className="shoe-shadow-outer"></div>
        <div className="shoe-shadow-inner"></div>
      </div>

      <section className="banner banner-home">
        <div className="banner-img img-container">
          <img
            id="banner-img-1"
            src="images/home_banner_1_mobile.webp"
            alt=""
          />
        </div>

        <div className="banner-text">
          <h2 className="banner-text__heading">NIKE METCON 9</h2>
          <p className="banner-text__para">
            Durability and stability for your strength training.
          </p>
          <a href="#" className="banner-text__button btn-black">
            Shop
          </a>
        </div>
      </section>

      <div className="subheading">
        <h3>Trending</h3>
      </div>

      <section className="grid">
        <div className="two-imgs img-container grid-stacked">
          <img src="images/slipper.jpeg" alt="" />
          <div className="text">
            <h3>This is heading</h3>
            <a href="#" className="button btn-white">
              Shop
            </a>
          </div>
        </div>
        <div className="img-container grid-stacked">
          <img src="images/jordan.webp" alt="" />
          <div className="text">
            <h3>Explore the Collection</h3>
            <a href="#" className="button btn-white">
              Shop
            </a>
          </div>
        </div>
      </section>

      <div className="subheading">
        <h3>The Latest</h3>
      </div>

      <section className="banner">
        <div className="banner-img img-container">
          <img
            id="banner-img-2"
            src="images/home_banner_2_mobile.jpeg"
            alt=""
          />
        </div>

        <div className="banner-text">
          <p className="banner-text__subheading">Jordan</p>
          <h2 className="banner-text__heading">EASY ALL DAY</h2>
          <p className="banner-text__para">
            Fashion is all about Your Comfort and Confidence.
          </p>
          <a href="#" className="banner-text__button btn-black">
            Shop
          </a>
        </div>
      </section>

      <div className="subheading">
        <h3>Featured</h3>
      </div>

      <section className="banner">
        <div className="banner-img img-container">
          <img
            id="banner-img-3"
            src="images/home_banner_3_mobile.webp"
            alt=""
          />
        </div>

        <div className="banner-text">
          <p className="banner-text__subheading">Jordan Apparel</p>
          <h2 className="banner-text__heading">MATCHING SETS</h2>
          <p className="banner-text__para">
            Keep the same Energy with matching fits to every occasion.
          </p>
          <a href="#" className="banner-text__button btn-black">
            Shop
          </a>
        </div>
      </section>
    </>
  );
}
