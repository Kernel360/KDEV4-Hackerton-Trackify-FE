import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grid, Paper, Typography, Checkbox } from "@mui/material";

import axios from 'axios';

export default function TaskDetailPage() {
    return (
        <Container sx={{ py: 4 }}>
          {/* 캘린더 */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" fontWeight="bold">캘린더</Typography>
            <Grid container spacing={1} mt={2}>
              {[...Array(7)].map((_, index) => (
                <Grid item xs={1.7} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                  <Paper sx={{ p: 2, textAlign: "center", width: "100%" }}>{index + 1}</Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
    
          {/* 카테고리 목록 */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            카테고리 목록
          </Typography>
          <Grid container spacing={3}>
            {["업무", "공부", "운동"].map((category, index) => (
              <Grid item xs={4} key={index}>
                <Paper sx={{ p: 3, backgroundColor: ["#f8d7da", "#fff3cd", "#d4edda"][index] }}>
                  <Typography fontWeight="bold">{category}</Typography>
                  <Typography>목표 시간: 20:00</Typography>
                  <Typography>진행 시간: 16:00</Typography>
                  <Typography>달성률: 80%</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
    
          {/* Todo List */}
          <Typography variant="h6" fontWeight="bold" gutterBottom mt={4}>
            Todo
          </Typography>
          <Paper sx={{ p: 3 }}>
            {["프로젝트 기획안 작성", "영어 회화 연습", "저녁 조깅 30분"].map((task, index) => (
              <Grid container alignItems="center" spacing={2} key={index} sx={{ borderBottom: 1, borderColor: "divider", py: 1 }}>
                <Grid item>
                  <Checkbox color="primary" />
                </Grid>
                <Grid item>
                  <Typography>{task}</Typography>
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Container>
      );
}