import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetBagData, apiRemoveProductFromBag } from "../services/apiBag";
import toast, { Toaster } from "react-hot-toast";

export default function Bag() {
  const queryClient = useQueryClient();

  //fetch products in bag
  const { data: bag, isLoading } = useQuery({
    queryKey: ["bag"],
    queryFn: apiGetBagData,
  });

  // delete products from bag
  const { mutate: deleteFromBag } = useMutation({
    mutationFn: apiRemoveProductFromBag,
    onSuccess: () => {
      console.log("toast");
      toast.success("Deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["bag"],
      });
    },
  });

  const subtotal = bag?.reduce((acc, product) => acc + product.price, 0);

  if (isLoading) return <p>Loading</p>;

  return (
    <section className="bag">
      <Toaster />
      <h3>Bag</h3>

      <div className="bag__grid">
        <div className="bag__cards">
          {bag.map((product) => (
            <div key={product.id} className="bag__card">
              <div className="bag__card__img">
                <img src={product.thumbnail} alt="shoe image" />
              </div>
              <div className="bag__card__flex">
                <div className="bag__card__name">{product.name}</div>
                <p className="bag__card__desc">{product.description}</p>
              </div>
              <div className="bag__card__price">MRP: ${product.price}</div>
              <button
                className="bag__card__delete"
                onClick={() => deleteFromBag(product.id)}
              >
                delete
              </button>
            </div>
          ))}
        </div>

        <div className="bag__summary">
          <h3>Summary</h3>

          <div>
            <p>Subtotal:</p>
            <p>$ {subtotal}</p>
          </div>

          <div>
            <p>Estimated Delivery Charges:</p>
            <p>$ 10</p>
          </div>

          <div className="bag__summary__total">
            <p>Total Payable Amount</p>
            <p>$ {subtotal + 10}</p>
          </div>

          <button className="btn-black">Checkout</button>
        </div>
      </div>
    </section>
  );
}
