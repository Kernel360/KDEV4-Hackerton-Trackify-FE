import React, {useEffect, useState} from 'react';
import '../styles/pages/SignInPage.scss';
import axios from 'axios';

export default function SignInPage() {
    return (
        <div className="signin-container">
            <div className="signin-logo">LOGO</div>
            <div class = "signin-header">로그인</div>
            <div className = "signin-outer-container">
                <div className = "signin-inside-container">
                 <div className = "signin-title">아이디</div>
                 <input className = "signin-input" type="text" placeholder="아이디를 입력하세요" />
                 <div className = "signin-title">비밀번호</div>
                 <input className = "signin-input" type="password" placeholder="비밀번호를 입력하세요" />
                 <button className = "signin-button">로그인</button>
                 <div>또는</div>
                 <button className = "signup-button">회원가입</button>
                </div>  
            </div>
        </div>
    )
}