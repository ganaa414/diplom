"use client";
import React from "react";
import Logo from '@/app/assets/Screenshot_2024-04-23_at_21.38.44-removebg copy.png';
import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import Select from "react-select"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [changeCor, setChangeCor] = useState(true)

  const options = [
{value: "mobicom", label: "Mobicom", color: "#000"},
{value: "unitel", label: "Unitel"},
{value: "skytel", label: "Skytel"},
{value: "gmobile", label: "G-mobile"},
{value: "ondo", label: "Ondo"},
  ]

  const notify = () => 
  toast.success('Амжилттай орууллаа!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
    const notif = () => 
    toast.success('Амжилттай илгээлээ!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
      const noti = () => 
      toast.success('Амжилттай орууллаа!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

  

  const handleChange = (selectedOption: any) => {
console.log(handleChange, selectedOption);

  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen">
      <div className="flex w-screen justify-between px-10 items-center">
        <div className="flex gap-4 items-center">
          <img src={Logo.src} alt="" className="w-[80px]" />
          <h1 className="font-bold text-xl border-l-[1px] border-l-solid border-l-black pl-4">
            ХАРИЛЦАА ХОЛБООНЫ <br></br>ЗОХИЦУУЛАХ ХОРОО
          </h1>
        </div>
        <ToastContainer />
        <Avatar>H</Avatar>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center mt-[170px]">
        <div>
        <button
    className="btn w-[450px] rounded-lg text-white bg-[#000A66] py-2 font-extralight"
    onClick={() => {
        const modal = document.getElementById("my_modal_1")as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    }}
>
    Албан бичгийн стандарт оруулах
</button>

          <dialog
            id="my_modal_1"
            className="modal px-[130px] py-[90px] rounded-xl"
          >
            <div className="modal-box flex flex-col justify-center items-center">
              <div className="flex flex-col gap-4">
                <input
                  type="file"
                  className="bg-white w-[500px] h-[30px] rounded-lg"
                />
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#004DEB] text-white w-[400px] h-[30px]  rounded-xl mt-[15px] " onClick={notify}>
                    {" "}
                    Стандарт оруулах
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#004DEB] text-white w-[400px] h-[30px]  rounded-xl mt-[15px]">
                    Хаах
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div>
        <button
    className="btn w-[450px] rounded-lg text-white bg-[#000A66] py-2 font-extralight"
    onClick={() => {
        const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    }}
>
    Байгууллагууд
</button>

          <dialog
            id="my_modal_2"
            className="modal px-[130px] py-[90px] rounded-xl"
          >
            <div className="modal-box flex flex-col justify-center items-center">
            <Select options={options} onChange={handleChange} isMulti className="w-[400px]"></Select>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#004DEB] text-white w-[400px] h-[30px]  rounded-xl mt-[15px]" onClick={notif}>
                    {" "}
                    Илгээх
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#004DEB] text-white w-[400px] h-[30px]  rounded-xl mt-[15px]">
                    Хаах
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div>
        <button
    className="btn w-[450px] rounded-lg text-white bg-[#000A66] py-2 font-extralight"
    onClick={() => {
        const modal = document.getElementById("my_modal_3");
        if (modal) {
            (modal as HTMLDialogElement).showModal();
        }
    }}
>
    Санал хүсэлт оруулах
</button>

          <dialog
            id="my_modal_3"
            className="modal px-[130px] py-[90px] rounded-xl"
          >
            <div className="modal-box flex flex-col justify-center items-center">
              <div className="flex flex-col gap-4">
                <input
                  type="file"
                  className="bg-white w-[500px] h-[30px] rounded-lg"
                />
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#004DEB] text-white w-[400px] h-[30px]  rounded-xl mt-[15px]" onClick={noti}>
                    {" "}
                    Оруулах
                  </button>
                </form>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-[#004DEB] text-white w-[400px] h-[30px]  rounded-xl mt-[15px]">
                    Хөрвүүлэх
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div>
        <button
    className="btn w-[450px] rounded-lg text-white bg-[#000A66] py-2 font-extralight"
    onClick={() => {
        const modal = document.getElementById("my_modal_1");
        if (modal) {
            (modal as HTMLDialogElement).showModal();
        }
    }}
>
    Тайлан гаргах
</button>

          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
