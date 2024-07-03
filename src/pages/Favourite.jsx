import { useQuery } from "@tanstack/react-query";
import { useMainContext } from "../Context/MainStateProvider";
import { apiGetFavourites } from "../services/apiFavourites";
import styled from "styled-components";
import Row from "../ui/Row";
import { H3 } from "../ui/Headings";

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  display: grid;
  gap: 0.5rem;

  p {
    color: $color-faded;
  }
`;

const H3mod = styled(H3)`
  margin-bottom: 2rem;
`;

export default function Favourite() {
  const { data: favourites, isLoading } = useQuery({
    queryKey: ["favourites"],
    queryFn: apiGetFavourites,
  });

  if (isLoading) return <p>Loading</p>;

  return (
    <section>
      <H3mod>Favourite</H3mod>
      <LayoutGrid>
        {favourites.map((product) => (
          <FavouriteCard key={product.id} product={product} />
        ))}
      </LayoutGrid>
    </section>
  );
}

function FavouriteCard({ product }) {
  return (
    <Card>
      <div>
        <img src={product.thumbnail} alt="shoe image" />
      </div>
      <Row type="vertical">
        <div>{product.name}</div>
        <div>MRP: ${product.price}</div>
      </Row>
      <p>{product.description}</p>
    </Card>
  );
}
