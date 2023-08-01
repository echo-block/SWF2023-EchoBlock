import { styled } from "styled-components";

export const Head = styled.header`
  background-color: #000;
`;
export const Box = styled.div`
  margin: 0 auto;
  width: 85%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1600px) {
    max-width: 1400px;
  }
  .Logo {
    font-weight: 500;
    font-size: var(--font36);
    color: var(--font);
    text-decoration: none;
  }
`;

export const Menu = styled.div`
  .Team {
    font-weight: 500;
    font-size: var(--font24);
    color: var(--font);
    text-decoration: none;
    margin-right: 36px;
  }
  .Login {
    text-decoration: none;
    font-weight: 500;
    border: none;
    background: none;
    font-size: var(--font24);
    color: var(--font);
  }
`;