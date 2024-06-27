import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_URL } from "../services/config";
import ProductCard from "../ui/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getSearchedProducts } from "../services/apiProducts";

export default function Results() {
  const [searchParams] = useSearchParams();
  const searchedTerm = searchParams.get("query");

  const {
    data: products,
    isLoading,
    status,
  } = useQuery({
    queryKey: ["searchedProducts", searchedTerm],
    queryFn: () => getSearchedProducts(searchedTerm),
  });

  console.log(products);

  return (
    <>
      <div className="category-filter-container">
        <h3 className="category">Search Term</h3>

        <div className="filters-container">
          <a className="filter-lifestyle">Lifestyle</a>
          <a className="filter-jordan">Jordan</a>
          <a className="filter-running">Running</a>
        </div>

        <div className="drop-down">
          <button className="drop-down__btn">Filter</button>
          <div className="drop-down__content">
            <div className="drop-down__option">Price:High-Low</div>
            <div className="drop-down__option">Price:Low-High</div>
            <div className="drop-down__option">New</div>
          </div>
        </div>
      </div>

      <div className="results-grid">
        {isLoading
          ? "Loading"
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
}

// const [products, setProducts] = useState([]);
// useEffect(() => {
//   async function getProductDetails() {
//     if (!query) return;
//     try {
//       const res = await fetch(`${API_URL}/all?q=${query}`);
//       const data = await res.json();
//       console.log(data);
//       setProducts(data);
//     } catch (err) {
//       console.error(err.message);
//     }
//   }
//   getProductDetails();
// }, [query]);
