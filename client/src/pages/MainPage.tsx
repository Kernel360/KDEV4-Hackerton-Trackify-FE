import React, {useEffect, useState} from 'react';
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

    return(
        <div className = "main-container">
            <div className = "upper-container">
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