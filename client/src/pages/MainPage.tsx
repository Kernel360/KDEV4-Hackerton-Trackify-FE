import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";  // useNavigate 훅 사용
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import axios from 'axios';
import '../styles/pages/MainPage.scss';
import TaskModal from '../components/TaskModal.tsx';

export default function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleRegister = (title: string, startDate: string, endDate: string) => {
        console.log('등록된 항목: ', {title, startDate, endDate});
    }

    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

    // 대시보드 캘린더
    const getDaysInMonth = (year: number, month: number) => {
        const date = new Date(year, month, 1);
        const days: Date[] = []; // 여기에 타입 추가
        while (date.getMonth() === month) {
          days.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const Dashboard = () => {
        const [currentDate, setCurrentDate] = useState(new Date());
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const days = getDaysInMonth(year, month);
        const startDay = new Date(year, month, 1).getDay();
      
        const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
      
        const handlePrevMonth = () => {
          setCurrentDate(new Date(year, month - 1, 1));
        };
      
        const handleNextMonth = () => {
          setCurrentDate(new Date(year, month + 1, 1));
        };

        return (
            <Container sx={{ py: 4 }}>
                {/* 캘린더 */}
                <Paper sx={{ p: 3, mb: 4 }}>
                    <Typography variant="h6" fontWeight="bold">캘린더</Typography>
                    <Typography variant="h6" align="center" gutterBottom>
                        {year}년 {month + 1}월
                    </Typography>

                    <Grid container justifyContent="space-between" sx={{ mb: 2 }}>
                        <Typography variant="button" onClick={handlePrevMonth} sx={{ cursor: "pointer" }}>
                            ◀ 이전달
                        </Typography>
                        <Typography variant="button" onClick={handleNextMonth} sx={{ cursor: "pointer" }}>
                            다음달 ▶
                        </Typography>
                    </Grid>

                    {/* 요일 헤더 */}
                    <Grid container spacing={1} mt={2}>
                        {weekDays.map((day, index) => (
                            <Grid item xs={12 / 7} key={index} sx={{ textAlign: "center" }}>
                            <Typography fontWeight="bold">{day}</Typography>
                            </Grid>
                        ))}
                    </Grid>

                    {/* 날짜 렌더링 */}
                    <Grid container spacing={1} mt={1}>
                    {/* 시작 요일 이전 빈칸 */}
                    {Array.from({ length: startDay }).map((_, index) => (
                        <Grid item xs={12 / 7} key={`empty-${index}`} sx={{ height: 60 }}></Grid>
                    ))}

                    {days.map((day, index) => (
                        <Grid
                        item
                        xs={12 / 7}
                        key={index}
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 60 }}
                        >
                        <Paper sx={{ p: 2, textAlign: "center", width: "100%" }}>{day.getDate()}</Paper>
                        </Grid>
                    ))}
                    </Grid>
                </Paper>
            </Container>
        );
    };

    // 로그인 && 회원가입
    const UserInfoContent = () => {

        // 로그인 버튼 클릭 핸들러
        const handleLogin = () => {
            navigate("/signin");  // 로그인 페이지로 이동
        };

        // 회원가입 버튼 클릭 핸들러
        const handleSignUp = () => {
            navigate("/signup");  // 회원가입 페이지로 이동
        };

        return (
            <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {/* <Typography variant="h4" gutterBottom>
                로그인 / 회원가입
            </Typography> */}

            <Grid container spacing={2} direction="column" alignItems="center">
                {/* 로그인 버튼 */}
                <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleLogin}
                    sx={{ 
                        width: '100%',
                        backgroundColor: 'black',
                        color: 'white'
                    }}
                >
                    로그인
                </Button>
                </Grid>

                {/* 회원가입 버튼 */}
                <Grid item>
                <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    onClick={handleSignUp}
                    sx={{ 
                        width: '100%',
                        backgroundColor: 'black',
                        color: 'white'
                    }}
                >
                    회원가입
                </Button>
                </Grid>
            </Grid>
            </Container>
        );

    }
    
    return(
        <div className = "main-container">
            <div className = "upper-container">
                <div className = "user-container">
                    <UserInfoContent />
                </div>
                <div className = "task-container">
                    <div className = "task-inside-upper-box">
                        <div className = "task-title">TASK</div>
                        <button className = "task-add-button" onClick={openModal}>+ 새 작업</button>
                        <TaskModal isOpen={isModalOpen} onClose={closeModal} onRegister={handleRegister}/>
                    </div>
                    <div className = "task-inside-lower-box">
                        <div className = "single-task-box">태스크 이름</div>
                        <div className = "single-task-box">태스크 이름</div>
                    </div>
                </div>
                <div className = "calendar-container">
                    <Dashboard />
                </div>
            </div>
            <div className = "lower-container">
                <div className = "todo-container">
                    <div className = "todo-title">TODO</div>
                    <div className = "todos">
                        <div className = "single-todo-box">
                            <div className = "single-task-title">웹사이트 리뉴얼</div>
                            <div className = "single-todo-list">
                                <div className ="single-todo-item">
                                    <input type="checkbox" />
                                    <div className = "single-todo-content">디자인 시안 작성</div>
                                </div>
                                <div className ="single-todo-item">
                                    <input type="checkbox" />
                                    <div className = "single-todo-content">프로토타입 제작</div>
                                </div>
                                <div className ="single-todo-item">
                                    <input type="checkbox" />
                                    <div className = "single-todo-content">피드백 수집</div>
                                </div>
                            </div>
                        </div>
                        <div className = "single-todo-box">
                            <div className = "single-task-title">웹사이트 리뉴얼</div>
                            <div className = "single-todo-list">
                                <div className ="single-todo-item">
                                    <input type="checkbox" />
                                    <div className = "single-todo-content">디자인 시안 작성</div>
                                </div>
                                <div className ="single-todo-item">
                                    <input type="checkbox" />
                                    <div className = "single-todo-content">프로토타입 제작</div>
                                </div>
                                <div className ="single-todo-item">
                                    <input type="checkbox" />
                                    <div className = "single-todo-content">피드백 수집</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}