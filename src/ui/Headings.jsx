import styled from "styled-components";

export const H1 = styled.h1`
  font-weight: 900;
  letter-spacing: -1px;
  word-spacing: 4px;
  font-size: 6.4rem;

  @media (width>1000px) {
    font-size: 14.4rem;
  }
`;

export const H2 = styled.h2`
  font-weight: 900;
  letter-spacing: -1px;
  word-spacing: 4px;
  font-size: 4rem;

  @media (width>1000px) {
    font-size: 7.2rem;
  }
`;

export const H3 = styled.h3`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 400;

  @media (width>1000px) {
    font-size: 3.6rem;
  }
`;

export const H4 = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;

  @media (width>1000px) {
    font-size: 2.4rem;
  }
`;

export const Subheading = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;

  @media (width>1000px) {
    font-size: 14.4rem;
  }
`;
