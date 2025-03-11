import React, {useEffect, useState} from 'react';
import '../styles/pages/SignUpPage.scss';
import axios from 'axios';

export default function SignUpPage() {
    return (
        <div className="signup-container">
            <div className = "signup-logo">LOGO</div>
            <div className = "signup-header">회원가입</div>
            <div className = "signup-outer-container">
                <div className = "signup-inside-container">
                    <input className = "signup-input" type="text" placeholder="아이디를 입력하세요" />
                    <input className = "signup-input" type="text" placeholder="닉네임을 입력하세요" />
                    <input className = "signup-input" type="password" placeholder="비밀번호를 입력하세요" />
                    <input className = "signup-input" type="password" placeholder="비밀번호를 다시 입력하세요" />
                    <button className = "signup-button">가입하기</button>
                </div>  
            </div>
            <div>로그인으로 돌아가기</div>
        </div>
    )
}