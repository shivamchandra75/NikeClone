import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={product.thumbnail} alt="shoes Image" />
      </div>

      <div className="card__details">
        <h4 className="card__name">{product.name}</h4>
        <p className="card__desc">{product.description}</p>
        <p className="card__price">MRP: ${product.price}</p>
      </div>

      <Link
        className="card__overlay"
        to={`/product?product=${JSON.stringify(product)}`}
      ></Link>
    </div>
  );
}

export default ProductCard;
