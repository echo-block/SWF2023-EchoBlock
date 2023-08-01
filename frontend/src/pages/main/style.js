import { styled } from "styled-components";

export const MainBoxs = styled.main`
  max-width: 85%;
  margin: 0 auto;
  @media screen and (min-width: 1600px) {
    max-width: 1400px;
  }
`;

export const Box = styled.div`
  padding-top: 180px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;
  .imgbox {
    width: 30%;
    img {
      border-radius: 20px;
    }
  }
  .imgbox2 {
    display: flex;
    justify-content: end;
    img {
      border-radius: 20px;
    }
  }
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--font);
  .contents {
    height: 648px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .contenthead {
      font-size: var(--font48);
      margin-bottom: 136px;
    }
    .content {
      font-size: var(--font32);
      margin-bottom: 40px;
    }
  }
`;

export const BottomBox = styled.div`
  padding: 180px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--font);

  .Head {
    font-size: var(--font48);
    margin-bottom: 100px;
    width: 100%;
    display: flex;
    justify-content: end;
  }
  .BotContent {
    font-size: var(--font32);
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    justify-content: end;
  }
  .BotBox {
    display: flex;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: end;
    .BCon {
      padding-left: 100px;
      font-size: var(--font32);
    }
    .Start {
      background-color: var(--font);
      width: 100px;
      height: 40px;
      margin-left: 20px;
      font-size: var(--font32);
      border-radius: 20px;
      cursor: pointer;
      &:hover {
        border: 1px solid white;
        background-color: var(--background);
        color: var(--font);
      }
    }
  }
`;

export const BTS = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 50px;
  bottom: 0px;
  .green {
    background-color: var(--green);
    margin-bottom: 37px;
  }
  .red {
    background-color: var(--red);
    margin-bottom: 20px;
  }
  .Btn {
    border: none;
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }
`;