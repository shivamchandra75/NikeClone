import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Row from "./Row";

const SearchMenu = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding-inline: 2.4rem;
  padding-top: 1.6rem;
  background-color: var(--color-primary);
  position: fixed;
  top: 0;
  z-index: 4;
  opacity: 0;
  pointer-events: none;

  ${(props) =>
    props.isvisible === "true" &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}

  @media (width > 1000px) {
    padding-left: 34%;
    padding-right: 26.8%;
    min-height: auto;
    padding-bottom: 3%;
    padding-top: 0.8rem;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 5.4rem;
  padding-inline: 1.6rem;
  background-color: #ffffffaa;
  backdrop-filter: blur(10px);
  z-index: 1;

  @media (width > 700px) {
    padding-inline: 3.2rem;
  }

  @media (width > 1000px) {
    padding-inline: 4rem;
    min-height: 6rem;
  }
`;

const NavSearchBar = styled.div`
  background-color: inherit;
  border-radius: 2rem;
  padding: 0.5rem;
  border: 0.5px solid var(--color-border-faded);
`;

const IconContainer = styled.div`
  border-radius: 50%;
  padding: 0.5rem;
  max-width: 32px;
  /* &:active {
      background-color: $color-active;
    } */
`;

const CustomRow = styled(Row)`
  justify-self: flex-end;
`;

const SearchBar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  background-color: #eee;
  padding-block: 1rem;
  padding-inline: 1rem;
  border-radius: 3.2rem;
  max-width: 80%;
`;

const SearchInput = styled.input`
  min-width: 100%;
  min-height: 100%;
  background-color: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

const CloseButton = styled.p`
  font-weight: 500;
  position: absolute;
  top: 2.8rem;
  right: 5%;
  cursor: pointer;
`;

const Container = styled.div`
  display: grid;
  gap: 1.6rem;
  margin-top: 4rem;

  & > :first-child {
    color: $color-faded;
    text-decoration: none;
    margin-bottom: 0.8rem;
  }

  & > :not(:first-child) {
    font-weight: 500;
    border: none;
    background-color: inherit;
    text-align: left;
    cursor: pointer;
  }
`;

const ButtonSuggest = styled.button`
  font-size: 2.4rem;
  &:hover {
    color: var(--color-faded);
  }
`;

export default function Navbar() {
  const searchInputRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  function goToFavourites() {
    navigate("/favourite");
  }

  function goToCart() {
    navigate("/bag");
  }

  function searchQuery(e) {
    e.preventDefault();
    navigate(`/results?query=${searchInput}`);
    closeSearchMenu();
  }

  function searchSuggestion(e) {
    e.preventDefault();
    const suggestion = e.target.innerText;
    setSearchInput(suggestion);
    navigate(`/results?query=${suggestion}`);
    closeSearchMenu();
  }

  function showSearchMenu() {
    setIsVisible(true);
    searchInputRef.current.focus();
  }

  function closeSearchMenu() {
    setSearchInput("");
    setIsVisible(false);
  }

  return (
    <>
      <Nav>
        <Link to={"/"} className="logo-container">
          <img src="images/logo.svg" alt="nike-logo" />
        </Link>

        <NavSearchBar onClick={showSearchMenu}>
          <IconContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
              />
            </svg>
          </IconContainer>
        </NavSearchBar>

        <CustomRow>
          <IconContainer onClick={goToCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
              className="bag-icon"
            >
              <path
                fill="currentColor"
                d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16Zm-88-32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm88 168H40V80h40v16a8 8 0 0 0 16 0V80h64v16a8 8 0 0 0 16 0V80h40Z"
              />
            </svg>
          </IconContainer>

          <IconContainer onClick={goToFavourites}>
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
          </IconContainer>

          <IconContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="account-icon"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5ZM8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0ZM12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414ZM4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339c-1.974 0-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601Z"
                clipRule="evenodd"
              />
            </svg>
          </IconContainer>
          {/* <div
            onClick={showNavMobile}
            className="icon-container menu-icon-container"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="menu"
            >
              <path
                fill="currentColor"
                d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"
              />
            </svg>
          </div> */}
        </CustomRow>
      </Nav>

      <SearchMenu isvisible={isVisible.toString()}>
        <SearchBar>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
              />
            </svg>
          </div>

          <form id="search-form" onSubmit={(e) => searchQuery(e)}>
            <SearchInput
              ref={searchInputRef}
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search"
            />
          </form>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="close-menu"
            >
              <path
                fill="currentColor"
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
              />
            </svg>
          </div>
        </SearchBar>

        <CloseButton onClick={closeSearchMenu}>Cancel</CloseButton>

        <Container>
          <p>Popular Search Terms</p>
          <ButtonSuggest onClick={(e) => searchSuggestion(e)}>
            Jordan
          </ButtonSuggest>
          <ButtonSuggest onClick={(e) => searchSuggestion(e)}>
            Air Force
          </ButtonSuggest>
          <ButtonSuggest onClick={(e) => searchSuggestion(e)}>
            Air Max
          </ButtonSuggest>
          <ButtonSuggest onClick={(e) => searchSuggestion(e)}>
            Zoomo
          </ButtonSuggest>
        </Container>
      </SearchMenu>
    </>
  );
}
