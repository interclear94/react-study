import React from 'react';
import { Form } from '../molecule/Form';
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../atom/Button';
import './Signup.css'
import { Label } from '../atom/Label';
import { Input } from '../atom/Input';
import {useNavigate} from 'react-router-dom'


const Signup = () => {
  // store에 접근해서 전역상태를 참조
  // useSelector : store의 상태를 참조할 수 있게 도와주는 hook 함수
  // useSelecto로 값을 참조하면 가져온 상태를 주시하게 된다.
  // 주시하고 있는 값이 변하면 해당 컴포넌트가 리렌더링
  // 매개변수로 콜백함수 전달.
  // 콜백함수에서 반환된 값을 주시한다.
  // 콜백함수의 매개변수로 현재 상태를 할당해준다.

  const signState = useSelector(state => state.signupReducer.users)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSign = (e) => {
    e.preventDefault();
    const uid = e.target.uid.value;
    const upw = e.target.upw.value;

    dispatch({type : "signup", payload: {uid, upw}})
   
    navigate('/login');
  }

  return(
    <div className="signup">
      <Form className={"form_area"} onSubmit={handleSign}>
        <div className="form_wrap">
          <h2>회원가입</h2>
          <div className="input_box">
          <Label className={"label_box"}>아이디</Label>
          <Input className={"input_class"} name={"uid"} type={"text"} placeholder="아이디를 입력해주세요" />
          </div>
          <div className="input_box">
            <Label className={"label_box"}>비밀번호</Label>
            <Input className={"input_class"} name={"upw"} type={"password"} placeholder="비밀번호를 입력해주세요"/>
          </div>
          <div className='button_area'>
            <Button className={"regist_btn"}>회원가입</Button>
            <Button className={"cancel_btn"}>취소</Button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Signup;