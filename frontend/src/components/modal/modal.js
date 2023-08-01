import React from 'react'
import { Dal, Moda, Tags } from './style'
import man from "../../images/maps/man.svg";
import woman from "../../images/maps/woman.svg";
import { disease } from '../../data/data';
import { useNavigate } from 'react-router-dom';

const Modal = ({ setClick }) => {
  const navigate = useNavigate();

  return (
    <Moda>
      <Dal>
        <div className="head">
          <span>환자 정보</span>
          <button onClick={() => setClick()}>x</button>
        </div>
        <hr></hr>
        <Tags>
          <div className="sexbox">
            <div className="type">성별</div>
            <button className={"btn"}>
              <span>남</span>
              <img src={man} alt="manLogo"></img>
            </button>
            <button className="btn">
              <span>여</span>
              <img src={woman} alt="womanLogo"></img>
            </button>
          </div>
          <div className="severity">
            <div className="type">심각도</div>
            <button className="high">높음</button>
            <button className="nomal">보통</button>
            <button className="low">낮음</button>
            <button className="small">소아</button>
          </div>
          <div className="disease">
            <div className="datatype">증상[병명]</div>
            <div className="names">
              {disease &&
                disease.map((name, idx) => {
                  return <button key={idx} className="name">{name}</button>;
                })}
            </div>
          </div>
        </Tags>
        <button className="accessbtn" onClick={()=>{navigate("/maps/1");}}>신청하기</button>
      </Dal>
    </Moda>
  );
};

export default Modal