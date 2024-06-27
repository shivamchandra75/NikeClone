import { useSearchParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useMainContext } from "../../Context/MainStateProvider";
import { useMutation } from "@tanstack/react-query";
import { apiAddToBag } from "../../services/apiBag";
import toast, { Toaster } from "react-hot-toast";
import { apiAddToFavourites } from "../../services/apiFavourites";

export default function ProductDetails() {
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
      <div className="product">
        <div className="product__details">
          <h4 className="product__name">{product.name}</h4>
          <p className="product__desc">{product.description}</p>
          <p className="product__price">MRP: ${product.price}</p>
          <div className="tax-details">incl. of all taxes</div>
          <div className="tax-details">
            (Also includes all applicable duties)
          </div>
        </div>

        <div className="product__img">
          <img src={product.thumbnail} alt="product image" />
        </div>

        <div className="product__size">
          <h4>Select Size</h4>
          <div ref={sizeBtnsRef} className="size-btn-grid">
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 5
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 5.5
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 6
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 6.5
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 7
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 7.5
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 8
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 8.5
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 9
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 9.5
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 11
            </button>
            <button onClick={(e) => handleProductSize(e)} className="btn-size">
              UK 11.5
            </button>
          </div>
        </div>

        <p ref={errMsgRef} className="product__error">
          Please Select A size!
        </p>

        <div className="product__btns">
          <button
            onClick={handleAddToBag}
            className="product__btn-atc btn-black"
          >
            Add to Bag
          </button>

          <button
            onClick={() => addToFavourites(product)}
            className="product__btn-atf"
          >
            Favourite
            <div className="heart-icon">
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
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
