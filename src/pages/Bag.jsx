import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGetBagData, apiRemoveProductFromBag } from "../services/apiBag";
import toast, { Toaster } from "react-hot-toast";
import { H3 } from "../ui/Headings";
import styled from "styled-components";
import Row from "../ui/Row";

const SectionBag = styled.section`
  h3 {
    margin-bottom: 1rem;
  }
`;

const LayoutGrid = styled.div`
  display: grid;
  gap: 8rem;

  @media (width > 700px) {
    grid-template-columns: 1fr auto;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: ${(props) => props.gap || "1rem"};
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "img price"
    "img detail"
    "img delete";
  gap: 0.8rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $color-border-faded;

  ${Row} {
    grid-area: detail;
  }

  & > :nth-child(3) {
    grid-area: price;
  }
  button {
    grid-area: delete;
  }
`;

const Img = styled.div`
  max-width: 154px;
  grid-area: img;
`;

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
    <SectionBag>
      <Toaster />
      <H3>Bag</H3>

      <LayoutGrid>
        <Grid>
          {bag.map((product) => (
            <Card key={product.id}>
              <Img>
                <img src={product.thumbnail} alt="shoe image" />
              </Img>
              <Row type="vertical">
                <div>{product.name}</div>
                <p>{product.description}</p>
              </Row>
              <div>MRP: ${product.price}</div>
              <button onClick={() => deleteFromBag(product.id)}>delete</button>
            </Card>
          ))}
        </Grid>

        <Grid gap="2rem" className="bag__summary">
          <H3>Summary</H3>

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
        </Grid>
      </LayoutGrid>
    </SectionBag>
  );
}
