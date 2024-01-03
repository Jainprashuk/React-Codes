import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, SetColor] = useState("olive");
  const [textcolor , SetTextColor] = useState("white")

  return (
    <div
      className="w-full h-screen duration-200 p-10"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-gray-100 text-center font-extrabold text-xl block sm:hidden mb-10"
            style={{color : textcolor}}
            >
              BackGround Color Changer
            </h1>
      <div className="flex">
      
        <div className=" w-3/4">
          <div className="fixed h-screen bg-gray-100 shadow-xl gap-6 p-6 rounded-xl flex flex-col">
            <button
              onClick={() => {
                SetColor("red")
                SetTextColor("yellow")
            }}
              className="outline-none px-4 py-2 rounded text-while shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
               onClick={() => {
                SetColor("green")
                SetTextColor("blue")
            }}
              className="outline-none px-4 py-2 rounded text-while shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
               onClick={() => {
                SetColor("blue")
                SetTextColor("white")
            }}
              className="outline-none px-4 py-2 rounded text-while shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
               onClick={() => {
                SetColor("orange")
                SetTextColor("blue")
            }}
              className="outline-none px-4 py-2 rounded text-while shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>
            <button
               onClick={() => {
                SetColor("yellow")
                SetTextColor("red")
            }}
              className="outline-none px-4 py-2 rounded text-while shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
               onClick={() => {
                SetColor("violet")
                SetTextColor("white")
            }}
              className="outline-none px-4 py-2 rounded text-while shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              violet
            </button>
          </div>
        </div>

        <div className="w-3/4   ml-10 px-5 ">
          <div className=" flex h-screen justify-center items-center">
            <h1 className="text-gray-100 text-center font-extrabold text-xl hidden sm:block"
            style={{color : textcolor}}
            >
              BackGround Color Changer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
