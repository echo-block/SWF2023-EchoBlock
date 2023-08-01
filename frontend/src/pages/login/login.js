import React from 'react'
import { Box, LoginBox } from './style'
import loginImg from "../../images/login/Login.svg";
import user from "../../images/login/id.svg";
import pass from "../../images/login/pass.svg";

const Login = () => {
  return (
    <LoginBox>
      <Box>
        <div className="left">
          <img src={loginImg} alt="login-img" />
          <span className="head">LOGIN</span>
        </div>
        <div className="right">
          <span className="login-head">EMERGENCY & SOS</span>
          <div className="inputbox">
            <img src={user} alt="user" />
            <input placeholder="아이디를 입력해주세요" className="user"></input>
          </div>
          <div className="inputbox">
            <img src={pass} alt="user" />
            <input
              placeholder="비밀번호를 입력해주세요"
              className="user"
            ></input>
          </div>
          <button className='btn'>로그인</button>
        </div>
      </Box>
    </LoginBox>
  );
}

export default Login