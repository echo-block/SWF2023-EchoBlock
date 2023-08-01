import { styled } from "styled-components";

export const Boxs = styled.main`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1600px) {
    max-width: 1400px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0px;
  .map {
    width: 673px;
    height: 635px;
    
  }
`;

export const MapHead = styled.div`
  display: flex;
  flex-direction: column;
  width: 673px;
  height: 93px;
  border-radius: 11px;
  border: 3px solid ${(props) => (props.id ? "#F85825" : "#25bf62")};
  background: #1f0808;
  padding: 20px 40px;
  margin-bottom: 80px;
  .titles {
    display: flex;
    justify-content: space-between;
    color: var(--font);
    margin-bottom: 12px;
    .title {
      font-size: var(--font20);
    }
  }
  .contents {
    display: flex;
    justify-content: space-between;
    .content {
      color: #25bf62;
      font-size: var(--font14);
    }
  }
`;

export const MapBox = styled.div`
  width: 673px;
  height: 650px;
  border: 1px solid white;
`;

export const ListBox = styled.div`
  width: 490px;
  height: 800px;
  overflow: auto;
  border: 1px solid #afafaf;
  .ContentBoxs {
    padding: 30px 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
  }
`;

export const ListHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  color: var(--font);
  .sub {
    button {
      color: var(--font);
      border: none;
      background: none;
      font-size: 13px;
    }
    .bar {
      margin: 0px 5px;
    }
    .select {
      color: var(--border);
    }
  }
`;

export const List = styled.div`
  background-color: var(--font);
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  .title {
    margin-right: 3px;
  }
  .btns {
    display: flex;
    margin-bottom: 10px;
    .btn {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .mark {
      margin-right: 10px;
    }
  }
  .Content-Head {
    margin-bottom: 5px;
    .title {
      font-size: var(--font14);
    }
    .sub {
      font-size: var(--font10);
      color: #909090;
    }
  }
  .add-box {
    display: flex;
    flex-direction: column;
    .address {
      margin-bottom: 5px;
      font-size: var(--font12);
    }
    .sub-address {
      margin-bottom: 5px;
      font-size: var(--font12);
      color: #bababa;
    }
  }
  .today {
    font-size: var(--font12);
    margin-bottom: 5px;
    .type {
      -webkit-text-stroke: 1px var(--border);
      font-weight: 800;
      color: white;
      margin-right: 10px;
    }
    .alltime {
      color: #bababa;
    }
  }
  .callbox {
    font-size: var(--font12);
    .call {
      color: var(--border);
      margin-right: 5px;
    }
    .page {
      color: #81a7dd;
    }
  }
  .search{
    width: 90px;
    height: 30px;
  }
  button {
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #D9D9D9;
    cursor: pointer;
  }
`;