import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/pages/SignUpPage.scss';
import axios from 'axios';

export default function SignUpPage() {
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅
    const [formData, setFormData] = useState({
        userId: "",
        userPassword: "",
        userNickname: "",
      });
    
      const [errors, setErrors] = useState({
        userId: "",
        userPassword: "",
        userNickname: "",
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const validateForm = () => {
        let newErrors = { userId: "", userPassword: "", confirmPassword: "", userNickname: "" };
        let isValid = true;
    
        if (!formData.userId) {
          newErrors.userId = "아이디를 입력하세요.";
          isValid = false;
        }
        if (formData.userPassword.length < 6) {
          newErrors.userPassword = "비밀번호는 6자 이상이어야 합니다.";
          isValid = false;
        }
        if (formData.userPassword !== formData.confirmPassword) {
            console.log(formData.userPassword);
            console.log(formData.confirmPassword);
          newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
          isValid = false;
        }
        if (!formData.userNickname) {
          newErrors.userNickname = "닉네임을 입력해주세요.";
          isValid = false;
        }
    
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
    
        console.log("회원가입 정보:", formData);
        try {
        //   const response = await axios.post("/api/auth/signup", formData);
        const response = await axios.post(
            "/api/auth/signup", // 백엔드 서버 URL 명시
            formData,
            { withCredentials: true } // CORS 문제 해결
        );
          console.log(response.data);
          navigate("/");
        } catch (error) {
          console.error("회원가입 오류:", error);
        }
    };

    return (
        <div className="signup-container">
            <div className = "signup-logo">LOGO</div>
            <div className = "signup-header">회원가입</div>
            <div className = "signup-outer-container">

                <form onSubmit={handleSubmit}>
                    <div className = "signup-inside-container">
                        <input 
                            className = "signup-input" 
                            name = "userId"
                            type = "text" 
                            value = {formData.userId}
                            onChange = {handleChange}
                            placeholder="아이디를 입력하세요" 
                        />
                        {errors.userId && <p className="text-red-500 text-sm">{errors.userId}</p>}
                        <input 
                            className = "signup-input" 
                            name = "userNickname"
                            type="text" 
                            value={formData.userNickName}
                            onChange = {handleChange}
                            placeholder="닉네임을 입력하세요" 
                        />
                        {errors.userNickName && <p className="text-red-500 text-sm">{errors.userNickname}</p>}
                        <input 
                            className = "signup-input" 
                            name = "userPassword"
                            type = "password" 
                            value = {formData.userPassword}
                            onChange = {handleChange}
                            placeholder="비밀번호를 입력하세요" 
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}                        <input 
                            className = "signup-input" 
                            name = "confirmPassword"
                            type="password" 
                            value = {formData.confirmPassword}
                            onChange = {handleChange}
                            placeholder="비밀번호를 다시 입력하세요" 
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        <button className = "signup-button">가입하기</button>
                    </div>  
                </form>

            </div>
            <div>로그인으로 돌아가기</div>
        </div>
    )
}