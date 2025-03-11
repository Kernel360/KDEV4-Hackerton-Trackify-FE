import React from 'react';
import MainPage from './pages/MainPage.tsx';
import SignInPage from './pages/\bSignInPage.tsx';
import SignUpPage from './pages/SignUpPage';
import TaskDetailPage from './pages/TaskDetailPage';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/signin" element={<SignInPage/>}/>

        {/* 회원가입 페이지 */}
        <Route path="/signup" element={<SignUpPage/>}/>

        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage/>}/>

        {/* 테스크 상세 페이지 */}
        <Route path="/task/:taskId" element={<TaskDetailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

