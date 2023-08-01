import React, { useState } from 'react'
import { BTS, BottomBox, Box, ContentBox, MainBoxs } from './style'
import main1 from "../../images/main/main1.svg";
import main2 from "../../images/main/main2.svg";
import PLUS from "../../images/main/plus.svg";
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/modal';
import { useSelector } from 'react-redux';

const Main = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(0);
  let login = useSelector((state) => state.login.isLogin);
  console.log(login);

  return (
    <MainBoxs>
      {click ? <Modal setClick={() => setClick(0)} /> : null}
      <Box>
        <div className="imgbox">
          <img src={main1} alt="main1-img"></img>
        </div>
        <ContentBox>
          <div className="contents">
            <span className="contenthead">EMERGENCY & SOS란 무엇인가?</span>
            <span className="content">
              응급실의 데이터를 조회해 병상이 몇개가 있는지 확인할
            </span>
            <span className="content">
              수 있으며 구급차가 미리 정보를 알고 확인이 가능하다
            </span>
            <small>
              화면 오른쪽 아래 버튼을 클릭하시면 병상 여부를 확인할 수 있습니다.
            </small>
          </div>
        </ContentBox>
      </Box>
      <Box>
        <ContentBox>
          <div className="contents">
            <span className="contenthead">EMERGENCY & SOS가 왜 필요한가?</span>
            <span className="content">
              현재 응급실 뺑뺑이 문제를 해결하기 위한 응급실 전화 예약을 대체
              가능한
            </span>
            <span className="content">
              예약모델 수립 및 예약신청 내역에 대한 부인방지대책과 응급차가
              실시간
            </span>
            <span className="content">
              으로 매번 전화해야하고, 부재하거나 거부하는 전화에 대한 불편 사항
            </span>
            <span className="content">개선이 필요하다.</span>
          </div>
        </ContentBox>
        <div className="imgbox2">
          <img src={main2} alt="main2-img"></img>
        </div>
      </Box>
      <BottomBox>
        <span className="Head">EMERGENCY & SOS 의 방향성?</span>
        <span className="BotContent">
          필요시 예약 과정에서의 발생하는 부인, 부재 문제를 해결할 것이다. 또한,
        </span>
        <div className="BotBox">
          <span className="BCon">
            예약 과정이 투명하고 신속하게 이루어짐으로써 필요한 경우 다른
            응급실로 바로 예약 전환이 가능해진다.
          </span>
        </div>
      </BottomBox>
      <BTS>
        {login ? (
          <button
            className="Btn red"
            onClick={() => {
              setClick(1);
            }}
          >
            <img src={PLUS} alt="emergency"></img>
          </button>
        ) : (
          <button
            className="Btn green"
            onClick={() => {
              navigate("/maps/0");
            }}
          >
            <img src={PLUS} alt="minor-injuries"></img>
          </button>
        )}
      </BTS>
    </MainBoxs>
  );
}

export default Main