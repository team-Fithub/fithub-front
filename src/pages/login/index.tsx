import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { SET_TOKEN } from '../../redux/slices/tokenSlice';

import { defaultLogin } from '../../apis/user';

import Layout from '../../components/form/Layout';
import FormLogo from '../../components/form/FormLogo';
import FormLabel from '../../components/form/FormLabel';
import FormInput from '../../components/form/FormInput';
import FormError, { ErrorText } from '../../components/form/FormError';
import FormHelperLink from '../../components/form/FormHelperLink';
import SocialLoginButton from '../../components/form/SocialLoginButton';
import SocialLoginHeader from '../../components/form/SocialLoginHeader';
import FormSubmitButton from '../../components/form/FormSubmitButton';

import kakaoBtn from '../../assets/kakao_symbol.png';
import naverBtn from '../../assets/naver_symbol.png';
import googleBtn from '../../assets/google_symbol.png';

import { ILoginFormError, ILoginFormValue } from '../../types/form';

import validateLoginForm from '../../validation/login/loginFormValidation';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initFormValue: ILoginFormValue = {
    email: '',
    password: '',
  };

  const initFormError: ILoginFormError = {
    email: '',
    password: '',
  };

  const [formValue, setFormValue] = useState<ILoginFormValue>(initFormValue);
  const [errorMsg, setErrorMsg] = useState<ILoginFormError>(initFormError);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formValue;

    // validation
    if (!validateLoginForm(email, password, setErrorMsg)) return;

    // send to server
    try {
      const response = await defaultLogin(email, password);
      if (response && response.status === 200) {
        dispatch(SET_TOKEN(response.data.accessToken));
        navigate('/');
      }
    } catch (err) {
      const error = err as unknown as AxiosError;
      console.log(error);
      if (error.status === 403) {
        // eslint-disable-next-line no-alert
        alert('비밀번호가 일치하지 않습니다.');
      } else if (error.status === 404) {
        // eslint-disable-next-line no-alert
        alert('존재하지 않는 회원입니다.');
      } else {
        // eslint-disable-next-line no-alert
        alert('로그인 도중 문제가 발생하였습니다.');
      }
    }
  };

  const handleChange = (id: string, value: string) => {
    setFormValue((prevInput) => ({ ...prevInput, [id]: value }));
  };

  return (
    <Layout>
      {/* 로고 영역. 클릭 시 home으로 navigate */}
      <FormLogo width="w-20" fontSize="text-2xl md:text-3xl" />
      {/* 이메일, 비밀번호 입력 form */}
      <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
        {/* 이메일 */}
        <FormLabel htmlFor="email" text="이메일">
          <FormInput
            id="email"
            type="email"
            placeholder="Email"
            value={formValue.email}
            onChange={handleChange}
            error={errorMsg}
          />
          <FormError>
            {errorMsg.email && <ErrorText text={errorMsg.email} />}
          </FormError>
        </FormLabel>

        {/* 비밀번호 */}
        <FormLabel htmlFor="password" text="비밀번호">
          <FormInput
            id="password"
            type="password"
            placeholder="Password"
            value={formValue.password}
            onChange={handleChange}
            error={errorMsg}
          />
          <FormError>
            {errorMsg.password && <ErrorText text={errorMsg.password} />}
          </FormError>
        </FormLabel>

        {/* 회원가입하기 <-> 아이디, 비밀번호 찾기 */}
        <div className="flex flex-row justify-between text-[#575757] mt-8">
          <FormHelperLink to="/signup/email" content="이메일로 회원가입하기" />
          <FormHelperLink to="/help/password" content="비밀번호 찾기" />
        </div>

        <FormSubmitButton text="로그인" />
      </form>

      {/* 소셜로그인 */}
      <SocialLoginHeader />
      <div className="flex flex-row justify-center mt-4 gap-8">
        {/* 카카오 */}
        <SocialLoginButton
          to={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_LOGIN_REDIRECT_URI}&response_type=code`}
          alt="kakao_login_btn"
          src={kakaoBtn}
          className="bg-[#FEE500] rounded-full flex items-center justify-center"
        />
        {/* 네이버 */}
        <SocialLoginButton
          to={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_KEY}&state=false&redirect_uri=${process.env.REACT_APP_NAVER_LOGIN_REDIRECT_URI}`}
          alt="naver_login_btn"
          src={naverBtn}
        />
        {/* 구글 */}
        <SocialLoginButton
          to={`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_KEY}&redirect_uri=${process.env.REACT_APP_GOOGLE_LOGIN_REDIRECT_URI}&scope=email profile`}
          alt="google_login_button"
          src={googleBtn}
        />
      </div>
    </Layout>
  );
}

export default Login;