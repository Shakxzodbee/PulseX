import React, { useState, useEffect } from 'react';
import './Time.css'
const CountdownTimer = () => {
    // Dastlabki vaqtni foydalanuvchi uchun tushunarli tarzda ajratamiz
    const initialHours = 16;  // 16 soat
    const initialMinutes = 30;  // 30 daqiqa
    const initialSeconds = 15;  // 15 soniya

    // Vaqtni soniyada hisoblash
    const totalSeconds = (initialHours * 3600) + (initialMinutes * 60) + initialSeconds;

    // localStorage’dan oldingi qolgan vaqtni olish
    const storedTime = localStorage.getItem('remainingTime');
    const initialTime = storedTime ? parseInt(storedTime, 10) : totalSeconds;

    const [remainingTime, setRemainingTime] = useState(initialTime);

    useEffect(() => {
        const timerId = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime > 0) {
                    const newTime = prevTime - 1;
                    localStorage.setItem('remainingTime', newTime); // Yangi vaqtni localStoragega saqlash
                    return newTime;
                }
                localStorage.removeItem('remainingTime'); // Vaqt tugasa, localStorage'dan olib tashlash
                return 0;
            });
        }, 1000);

        // Cleanup: intervalni to'xtatish
        return () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        // Agar vaqt o'zgartirilsa, yangi vaqtni olish
        const storedTime = localStorage.getItem('remainingTime');
        const newInitialTime = storedTime ? parseInt(storedTime, 10) : totalSeconds;
        setRemainingTime(newInitialTime);
    }, [totalSeconds]);

    // Soat, daqiqa, va sekundlarni hisoblash
    const displayHours = Math.floor(remainingTime / 3600);
    const displayMinutes = Math.floor((remainingTime % 3600) / 60);
    const displaySeconds = remainingTime % 60;

    return (
        <div>
            <div>
                {String(displayHours).padStart(2, '0')}soat
                {String(displayMinutes).padStart(2, '0')}
                {String(displaySeconds).padStart(2, '0')}
            </div>
        </div>
    );
};

export default CountdownTimer;