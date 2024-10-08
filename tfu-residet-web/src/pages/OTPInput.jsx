import React, { useState, useRef } from 'react';

const OTPInput = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputsRef = useRef([]);

    // Hàm xử lý thay đổi khi người dùng nhập mã OTP
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Tự động focus vào ô input tiếp theo
        if (element.nextSibling && element.value) {
            inputsRef.current[index + 1].focus();
        }
    };

    // Hàm xử lý khi người dùng nhấn backspace để xóa
    const handleBackspace = (element, index) => {
        if (element.previousSibling && !element.value) {
            inputsRef.current[index - 1].focus();
        }
    };

    // Hàm xử lý khi người dùng submit mã OTP
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Mã OTP của bạn là: ${otp.join('')}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Nhập mã OTP</h2>
            <div>
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onKeyDown={e => e.key === "Backspace" && handleBackspace(e.target, index)}
                        ref={(el) => (inputsRef.current[index] = el)}
                        style={{
                            width: "40px",
                            height: "40px",
                            margin: "5px",
                            textAlign: "center",
                            fontSize: "20px"
                        }}
                    />
                ))}
            </div>
            <button type="submit">Xác nhận</button>
        </form>
    );
};

export default OTPInput;
