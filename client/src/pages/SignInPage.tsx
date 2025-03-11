import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/pages/SignInPage.scss';
import axios from 'axios';

export default function SignInPage() {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

    const handleLogin = () => {
        console.log("로그인 요청: ", { userId, userPassword });

        // axios.post("/api/auth/login", { userId, userPassword })
        axios.post("http://3.37.130.205:8080/api/auth/login", 
            { userId, userPassword }, 
            { withCredentials: true } // CORS 허용을 위한 설정
        )
            .then(response => {
                console.log("서버 응답: ", response.data);

                if (response.data.sessionId) {
                    sessionStorage.setItem("userId", response.data.userId);
                    sessionStorage.setItem("sessionId", response.data.sessionId);
                    console.log("세션 저장 완료: ", response.data.userId);
                }
                navigate("/");
            })
            .catch(error => console.error("로그인 실패: ", error));
    };

    return (
        <div className="signin-container">
            <div className="signin-logo">LOGO</div>
            <div class = "signin-header">로그인</div>
            <div className = "signin-outer-container">
                <div className = "signin-inside-container">
                 <div className = "signin-title">아이디</div>
                 <input 
                    className = "signin-input" 
                    type="text" 
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="아이디를 입력하세요" 
                />
                 <div className = "signin-title">비밀번호</div>
                 <input 
                    className = "signin-input" 
                    type="password" 
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="비밀번호를 입력하세요" 
                />
                 <button className = "signin-button" onClick={handleLogin}>로그인</button>
                 <div>또는</div>
                 <button className = "signup-button">회원가입</button>
                </div>  
            </div>
        </div>
    )
}