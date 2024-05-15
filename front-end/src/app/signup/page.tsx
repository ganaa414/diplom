"use client";
import React, {useState} from 'react';
import Bg from "@/app/assets/BG.png";
import Logo from "@/app/assets/Screenshot_2024-04-23_at_21.38.44-removebg copy.png";
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff } from "react-icons/fi";

function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [register, setRegister] = useState("");
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const [unfilledField, setUnfilledField] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleSignup = () => {
    if (!surname || !name || !register || !email || !password) {
      setUnfilledField("Бүртгүүлэх");
      window.alert("Бүх талбарыг бөглөнө үү!");
      return;
    } else if (!email.endsWith("@gmail.com")) {
      window.alert("И-Мэйл нь заавал @gmail.com байх ёстой.");
      setUnfilledField("Бүртгүүлэх");
      return;
    }
      else if (register.length !== 7) { 
    window.alert("Байгууллагын регистр байх ёстой.");
    setUnfilledField("Бүртгүүлэх");
    return;
  }

    setError("");
    setRegistered(true);
    router.push("/login");

    window.alert("Бүртгэл амжилттай!");
  };
  
  return (
    <div>
      <img src={Bg.src} alt="" className="w-screen h-screen absolute opacity-100"/>
      <div className="relative flex flex-col justify-center items-center gap-10 ">
        <div className="flex flex-col justify-center items-center">
          <img src={Logo.src} alt="" className=" w-[100px]" />
          <h1 className="text-white font-bold text-2xl text-center">Харилцаа холбооны <br />зохицуулах хороо</h1>
        </div>
        <div className="flex flex-col gap-6">
          <input 
            type="text" 
            placeholder="Овог" 
            className="py-2 px-8 rounded-xl w-[450px] text-black"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />

          <input 
            type="text" 
            placeholder="Нэр" 
            className="py-2 px-8 rounded-xl w-[450px] text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input 
            type="number" 
            placeholder="Регистр" 
            className="py-2 px-8 rounded-xl w-[450px] text-black"
            value={register}
            onChange={(e) => setRegister(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="И-мэйл" 
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
          <button 
            className="py-2 px-8 rounded-xl w-[450px] bg-[#004DEB] text-white"
            onClick={handleSignup}
          >
           {unfilledField || "Бүртгүүлэх"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
          
        </div>
      </div>
    </div>
  );
}

export default Signup;
