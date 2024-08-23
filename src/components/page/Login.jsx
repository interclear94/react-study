import React from 'react';
import { Form } from '../molecule/Form';
import { Label } from '../atom/Label';
import { Input } from '../atom/Input';
import { Button } from '../atom/Button';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const usersState = useSelector( state => state.signupReducer.users);
  console.log(usersState)
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const uid = e.target.uid.value;
    const upw = e.target.upw.value;

    for (let i = 0; i < usersState.length; i++) {
      if(usersState[i].uid === uid && usersState[i].upw === upw){
        dispatch({type: "LOGIN"});
        console.log("로그인 완료")
      }
    }
  }

  return(
    <div class="login">
      <Form className={"login_area"} onSubmit={handleLogin}>
        <div className="login_wrap">
          <h2>로그인</h2>
          <div className="input_box">
          <Label className={"label_box"}>아이디</Label>
          <Input className={"input_class"} name={"uid"} type={"text"} placeholder="아이디를 입력해주세요" />
          </div>
          <div className="input_box">
            <Label className={"label_box"}>비밀번호</Label>
            <Input className={"input_class"} name={"upw"} type={"password"} placeholder="비밀번호를 입력해주세요"/>
          </div>
          <div className='login_btn_area'>
            <Button className={"login_btn"}>로그인</Button>
            <Link to="/signup" className={"sign_btn"}>회원가입</Link>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Login;