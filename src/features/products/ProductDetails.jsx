import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiAddToBag } from "../../services/apiBag";
import { apiAddToFavourites } from "../../services/apiFavourites";
import useLogin from "../User/useLogin";
import styled from "styled-components";
import { Button } from "../../ui/Button";
import Row from "../../ui/Row";
import { H4 } from "../../ui/Headings";
import Modal from "../../ui/Modal";
import { getLoggedInUser } from "../../services/apiAuth";
import LoginForm from "../../ui/LoginForm";

const LayoutGrid = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-areas:
    "detail"
    "img"
    "size"
    "errMsg"
    "btn";
  margin-top: 9.6rem;

  & > :nth-child(1) {
    grid-area: detail;
  }
  & > :nth-child(2) {
    grid-area: img;
  }
  & > :nth-child(3) {
    grid-area: size;
  }
  & > :nth-child(4) {
    grid-area: errMsg;
  }
  & > :nth-child(5) {
    grid-area: btn;
  }

  span {
    max-width: 3.2rem;
  }
  @media (width > 1000px) {
    column-gap: 4.8rem;
    row-gap: 1.6rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "img detail"
      "img size"
      "img errMsg"
      "img btn";
    max-width: 1200px;
    margin-inline: auto;
    margin-top: 12rem;
  }
`;

const SizeChart = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1.6rem;
`;

const Error = styled.span`
  color: #df0000;
  opacity: 0;
`;

const Price = styled.p`
  margin-top: 1.6rem;
  margin-bottom: 0.8rem;
  font-weight: 500;
`;

const Tax = styled.div`
  color: var(--color-faded);
`;

export default function ProductDetails() {
  // const { user } = useLogin();
  const { user } = useQuery({
    queryKey: ["Current-user"],
    queryFn: getLoggedInUser,
  });
  const [searchParams] = useSearchParams();
  const [productSize, setProductSize] = useState("");
  const productInCart = useRef(null);
  const sizeBtnsRef = useRef(null);
  const errMsgRef = useRef(null);
  const product = JSON.parse(searchParams.get("product"));
  // const { addProductToFavourite, dispatch } = useMainContext();

  const { mutate: addToBag, isLoading: isAddingToBag } = useMutation({
    mutationFn: apiAddToBag,
    onSuccess: () => {
      toast.success("Added To Bag");
    },
    onError: (error) => {
      toast.error("Already added to Cart");
    },
  });

  const { mutate: addToFavourites, isLoading: isAddingToFavourites } =
    useMutation({
      mutationFn: apiAddToFavourites,
      onSuccess: () => {
        toast.success("Added to Favourites");
      },
      onError: (error) => {
        toast.error(`${error.message}`);
      },
    });

  function handleProductSize(e) {
    const allSizeBtns = e.target.parentElement.children;

    for (const btn of allSizeBtns) {
      console.log(btn);
      if (e.target.innerText !== btn.innerText) {
        btn.classList.remove("btn-size-active");
      } else {
        btn.classList.add("btn-size-active");
      }
    }

    setProductSize(e.target.innerText);
    sizeBtnsRef.current.style.outline = "none";
    errMsgRef.current.style.opacity = "0";
  }

  function handleAddToBag() {
    if (!productSize) {
      console.log(sizeBtnsRef.current);
      sizeBtnsRef.current.style.outline = "2px solid #DF0000";
      errMsgRef.current.style.opacity = "1";
      return;
    }

    if (productInCart.current) return; // to prevent adding a product in cart twice
    addToBag(product, productSize);
    productInCart.current = true;
  }

  return (
    <section>
      <Toaster />
      <LayoutGrid>
        <div>
          <H4>{product.name}</H4>
          <p>{product.description}</p>
          <Price>MRP: ${product.price}</Price>
          <Tax>incl. of all taxes</Tax>
          <Tax>(Also includes all applicable duties)</Tax>
        </div>

        <div>
          <img src={product.thumbnail} alt="product image" />
        </div>

        <div>
          <H4>Select Size</H4>
          <SizeChart ref={sizeBtnsRef}>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 5
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 5.5
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 6
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 6.5
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 7
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 7.5
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 8
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 8.5
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 9
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 9.5
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 11
            </Button>
            <Button onClick={(e) => handleProductSize(e)} type="size">
              UK 11.5
            </Button>
          </SizeChart>
        </div>

        <Error ref={errMsgRef}>Please Select A size!</Error>

        <Modal>
          <Row type="vertical">
            <Modal.Open
              opens="login-form"
              condition={user && productSize ? false : true}
            >
              <Button type="black" onClick={handleAddToBag}>
                Add to Bag
              </Button>
            </Modal.Open>

            <Modal.Open opens="login-form" condition={user ? false : true}>
              <Button onClick={() => addToFavourites(product)} type="withIcon">
                Favourite
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21ZM10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29Z"
                      className="clr-i-outline clr-i-outline-path-1"
                    />
                    <path fill="none" d="M0 0h36v36H0z" />
                  </svg>
                </span>
              </Button>
            </Modal.Open>

            <Modal.Window name="login-form">
              <LoginForm />
            </Modal.Window>
          </Row>
        </Modal>
      </LayoutGrid>
    </section>
  );
}
