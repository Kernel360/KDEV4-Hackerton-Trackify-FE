import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function TestPage() {
        const fetchData = async () => {
            try {
                const res = await axios({
                    method: 'post',
                    url: '/api/test',
                    data: {
                        content: "데이터 송신 완료"
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                console.log(res.data);
            }catch (error) {
                console.log('error: ', error);
            }
        };
        

    return (
        <>
            <button onClick = {fetchData}>테스트 시작</button>
        </>
    )
}