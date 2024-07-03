import { useSearchParams } from "react-router-dom";
import { API_URL } from "../services/config";
import ProductCard from "../ui/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getSearchedProducts } from "../services/apiProducts";
import styled from "styled-components";
import { H3 } from "../ui/Headings";
import Row from "../ui/Row";

const Container = styled.div`
  margin-top: 8rem;
  display: grid;
  gap: 1.6rem;
  grid-template-areas:
    "category sort-btn"
    "filter filter";
  padding-inline: 1.6rem;

  & > :nth-child(1) {
    grid-area: category;
  }

  & > :nth-child(2) {
    grid-area: filter;
  }
  & > :nth-child(3) {
    grid-area: sort-btn;
    justify-self: flex-end;
    align-self: center;
  }

  @media (width > 1000px) {
    padding-inline: 4.8rem;
  }
`;

const LayoutGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (width > 1000px) {
    padding-inline: 4.8rem;
    padding-bottom: 1.6rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }
`;

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
      <Container>
        <H3 className="category">Search Term &#34;{searchedTerm}&#34;</H3>

        <Row type="horizontal">
          <a className="filter-lifestyle">Lifestyle</a>
          <a className="filter-jordan">Jordan</a>
          <a className="filter-running">Running</a>
        </Row>

        <div className="drop-down">
          <button className="drop-down__btn">Filter</button>
          <div className="drop-down__content">
            <div className="drop-down__option">Price:High-Low</div>
            <div className="drop-down__option">Price:Low-High</div>
            <div className="drop-down__option">New</div>
          </div>
        </div>
      </Container>

      <LayoutGrid>
        {isLoading
          ? "Loading"
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </LayoutGrid>
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
