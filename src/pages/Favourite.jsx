import { useQuery } from "@tanstack/react-query";
import { useMainContext } from "../Context/MainStateProvider";
import { apiGetFavourites } from "../services/apiFavourites";

export default function Favourite() {
  const { data: favourites, isLoading } = useQuery({
    queryKey: ["favourites"],
    queryFn: apiGetFavourites,
  });

  if (isLoading) return <p>Loading</p>;

  return (
    <section className="favourite">
      <h3>Favourite</h3>
      <div className="favourite__cards">
        {favourites.map((product) => (
          <FavouriteCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

function FavouriteCard({ product }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={product.thumbnail} alt="shoe image" />
      </div>
      <div className="card__flex">
        <div className="card__name">{product.name}</div>
        <div className="card__price">MRP: ${product.price}</div>
      </div>
      <p>{product.description}</p>
    </div>
  );
}
