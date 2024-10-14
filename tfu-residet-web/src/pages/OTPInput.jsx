import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../config/axiosConfig";

const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputsRef = useRef([]);
    const { id } = useParams();

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
  const handleSubmit = async (e) => {
    e.preventDefault();
      // alert(`Mã OTP của bạn là: ${otp.join("")}`);
      const payload = {
          userId: id,
          typeOtp: "string",
          otp: otp.join(""),
      };
      const res = await axiosInstance.post(`/auth/confirm-otp`, JSON.stringify(payload));
      if (res.status === 200) {
          alert("Xác thực mã OTP thành công");
      }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h2>Nhập mã OTP</h2>
          <div style={{
              display: 'flex',
              justifyContent: "center",
      }}>
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) =>
              e.key === "Backspace" && handleBackspace(e.target, index)
            }
            ref={(el) => (inputsRef.current[index] = el)}
            style={{
              width: "40px",
              height: "40px",
              margin: "5px",
              textAlign: "center",
              fontSize: "20px",
            }}
          />
        ))}
      </div>
          <button style={{
              background: '#2ca8a2',
              padding: '10px 40px',
              border: 'none',
              outline: 'none',
              appearance: 'none',
              borderRadius: 5, color: '#fff',
              cursor: 'pointer',
      }} type="submit">Xác nhận</button>
    </form>
  );
};

export default OTPInput;
