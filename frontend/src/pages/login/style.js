import { styled } from "styled-components";

export const LoginBox = styled.div`
  width: 100%;
  padding-bottom: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  max-width: 85%;
  height: 700px;
  border: 1px solid white;
  border-radius: 0px 20px 20px 0px;
  margin-top: 30px;
  @media screen and (min-width: 1600px) {
    max-width: 1400px;
  }
  .left {
    width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    img {
      width: 260px;
      height: 260px;
      margin-bottom: 80px;
    }
    .head {
      color: #535353;
      font-size: 55px;
      margin-bottom: 80px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 800px;
    .login-head {
      color: var(--font);
      font-size: 55px;
      margin-bottom: 100px;
    }
    .inputbox {
      background-color: #fff;
      display: flex;
      align-items: center;
      width: 500px;
      height: 60px;
      border-radius: 15px;
      margin-bottom: 45px;
      img {
        padding: 10px;
      }
      .user {
        padding: 10px;
        background-color: none;
        border: none;
        outline: none;
      }
    }
  }
  .btn {
    color: #afafaf;
    font-size: 24px;
    background-color: #000;
    width: 500px;
    height: 60px;
    border-radius: 15px;
    border: 1px solid white;
    font-weight: 600;
    cursor: pointer;
  }
`;