"use client";
import React, {useState} from 'react';
import Bg from "@/app/assets/BG.png";
import Logo from "@/app/assets/Screenshot_2024-04-23_at_21.38.44-removebg copy.png";
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send a POST request to your server to send the confirmation code
      const response = await axios.post('http://localhost:3000/api/send-code', { email });
      setMessage(response.data.message);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An error occurred.');
      }
    }
  };

  // Check if window is defined to ensure this code runs only on the client side
  if (typeof window === 'undefined') return null;

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Confirmation Code</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
