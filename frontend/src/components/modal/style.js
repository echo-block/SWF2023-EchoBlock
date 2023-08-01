import { styled } from "styled-components";

export const Moda = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
`;

export const Dal = styled.div`
  background-color: #000;
  width: 478px;
  height: 370px;
  border: 1px solid #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  .head {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    font-size: var(--font20);
    button {
      border: none;
      background: none;
      color: #fff;
      font-size: var(--font24);
    }
  }
  hr {
    margin-top: 26px;
    width: 100%;
    height: 4px;
    background-color: #fff;
  }
  .data {
    margin: 32px 26px;
  }
  .accessbtn {
    width: 155px;
    height: 50px;
    font-size: var(--font14);
    border: 2px solid #f85825;
    background-color: #000;
    color: #fff;
  }
`;

export const Tags = styled.div`
  color: var(--font);
  width: 100%;
  padding: 25px 10px 0px 10px;
  .sexbox {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      border: none;
      width: 55px;
      height: 30px;
      font-size: var(--font14);
    }
    .btn {
      color: #000;
      &:active {
        border: 2px solid #f85825;
        background-color: #000;
        color: var(--font);
      }
    }
  }
  div {
    display: flex;
    margin-bottom: 10px;
    .type {
      display: flex;
      align-items: center;
      width: 90px;
    }
    button {
      width: 50px;
      height: 20px;
      font-size: 10px;
      color: #fff;
      margin-right: 5px;
      border: 2px solid #fff;
    }
    .high {
      background-color: #cc2f2f;
    }
    .nomal {
      background-color: #214193;
    }
    .low {
      background-color: #16783d;
    }
    .small {
      background-color: #481461;
    }
  }
  .disease {
    .datatype {
      width: 90px;
    }
    .names {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-row-gap: 10px;
      grid-column-gap: 5px;
      .name {
        width: 50px;
        height: 20px;
        color: #000;
        font-weight: 700;
      }
      .name:active {
        color: #fff;
        background-color: #f85825;
        border: none;
      }
    }
  }
`;