import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(props) =>
    props.type === "black" &&
    css`
      display: inline-block;
      padding-inline: 1.6em;
      padding-block: 0.8em;
      margin-top: 1.6rem;
      border: 1px solid var(--color-secondary);
      border-radius: 1.6em;
      text-decoration: none;
      background-color: var(--color-secondary);
      color: var(--color-primary);
    `}
  ${(props) =>
    props.type === "white" &&
    css`
      display: inline-block;
      padding-inline: 1.6em;
      padding-block: 0.8em;
      margin-top: 1.6rem;
      border: 1px solid var(--color-primary);
      border-radius: 1.6em;
      text-decoration: none;
      background-color: var(--color-primary);
      color: var(--color-secondary);
    `}

  ${(props) =>
    props.type === "size" &&
    css`
      padding-block: 1em;
      padding-inline: 0;
      border-radius: 0.8rem;
      border: 1px solid var(--color-border-faded);
      background-color: var(--color-primary);
      color: var(--color-secondary);

      &:hover {
        border-color: var(--color-secondary);
      }
    `}


  ${(props) =>
    props.type === "withIcon" &&
    css`
      display: grid;
      grid-auto-flow: column;
      gap: 1.6rem;
      justify-content: center;
      align-items: center;
      padding-block: 0.6em;
      border: 1px solid var(--color-border-faded);
      border-radius: 2.4em;
      text-decoration: none;
      color: var(--color-secondary);
      background-color: var(--color-primary);
      cursor: pointer;
      &:hover {
        border-color: var(--color-secondary);
      }
    `}
`;
