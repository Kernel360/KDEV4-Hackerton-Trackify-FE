import React, { useState } from 'react';
import '../styles/components/TaskModal.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegister: (title: string, startDate: string, endDate: string) => void;
}

const TaskModal: React.FC<ModalProps> = ({ isOpen, onClose, onRegister }) => {
    const [title, setTitle] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value);
    };

    const handleSubmit = () => {
        if (title && startDate && endDate) {
            onRegister(title, startDate, endDate);
            onClose();  // 모달 닫기
        } else {
            alert('모든 필드를 입력해주세요.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <span className="modal-title">TASK 등록</span>
                    <button className="modal-close-btn" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="title">제목</label>
                        <input className = "modal-input"
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="제목을 입력하세요"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start-date">시작일</label>
                        <input className="modal-input"
                            type="date"
                            id="start-date"
                            value={startDate}
                            onChange={handleStartDateChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end-date">마감일</label>
                        <input className="modal-input"
                            type="date"
                            id="end-date"
                            value={endDate}
                            onChange={handleEndDateChange}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="modal-register-btn" onClick={handleSubmit}>등록</button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
