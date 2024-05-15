"use client";
import React, { useState } from "react";
import Bg from "@/app/assets/BG.png";
import Logo from "@/app/assets/Screenshot_2024-04-23_at_21.38.44-removebg copy.png";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [unfilledField, setUnfilledField] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setUnfilledField("Нэвтрэх");
      window.alert("Бүх талбарыг бөглөнө үү!");
      return;
    } 
      else if (!email) {
      setUnfilledField("Нэвтрэх");
      window.alert("И-Мэйлээ оруулна уу!");
      return;
    } 
      else if (!email.endsWith("@gmail.com")) {
      setUnfilledField("Нэвтрэх");
      window.alert("Заавал мэйл хаягаа оруулна уу!");
      return;
    } 
      else if (!password) {
      setUnfilledField("Нэвтрэх");
      window.alert("Нууц үгээ оруулна уу!");
      return;
    }

    setError("");
    router.push("/Dashboard");
  };

  return (
    <div>
      <img src={Bg.src} alt="Background Image" className="w-screen h-screen absolute opacity-100" />
      <div className="relative flex flex-col justify-center items-center gap-10 pt-[100px]">
        <div className="flex flex-col justify-center items-center">
          <img src={Logo.src} alt="Company Logo" className="w-[100px]" />
          <h1 className="text-white font-bold text-2xl text-center">
            Харилцаа холбооны <br />зохицуулах хороо
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="И-Мэйл хаяг"
            className="py-2 px-8 rounded-xl w-[450px] text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
             <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Show password if showPassword is true
              placeholder="Нууц үг"
              className="py-2 px-8 rounded-xl w-[450px] text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Toggle password visibility */}
            <span
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              style={{ color: "black" }}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="py-2 px-8 rounded-xl w-[450px] bg-[#004DEB] text-white"
            onClick={handleLogin}
          >
            Нэвтрэх
          </button>
          <div className="flex justify-between items-center">
            <button
              className="text-white font-light"
              onClick={() => router.push("/signup")}
            >
              Бүртгүүлэх
            </button>
            <div className="flex justify-between items-center">
              <button
              className="text-white font-light"
              onClick={() => router.push("/forgot_password")}
              >
                Нууц үг мартсан
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
