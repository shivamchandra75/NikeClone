import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
// import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-primary);
  border-radius: var(--border-radius);
  /* box-shadow: var(--color-secondary); */
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-overlay);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-active);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-secondary);
  }
`;

//Create new context
const ModalContext = createContext();

//create parent component
export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

//create linked child components
function Open({ condition = true, children, opens: opensWidnowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => (condition ? open(opensWidnowName) : null),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  // const ref = useOutsideClick(close, true);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      {/* <StyledModal ref={ref}> */}
      <StyledModal>
        <Button onClick={close}>x</Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

//connect components to Parent
Modal.Open = Open;
Modal.Window = Window;
