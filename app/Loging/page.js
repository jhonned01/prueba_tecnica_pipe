"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Loging({ setUser }) {
  const [Login, setLogin] = useState({});
  console.log("Chanchito", Login);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    alert("estoy logeándome");
    setUser(true);
    // const response = await fetch("Post", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(Login),
    // }).then((res) => {
    //   return res.json();
    // });
  };
  const handlerChange = (e) => {
    setLogin({
      ...Login,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="bg-blue-400 h-screen w-screen">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div className="flex rounded-lg h-[100%] shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0">
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-extrabold">
                Bienvenido
              </h1>
              <div className="w-full mt-4">
                <form
                  className="form-horizontal w-3/4 mx-auto"
                  // onSubmit={handlerSubmit}
                >
                  <div className="flex flex-col mt-4">
                    <input
                      onChange={handlerChange}
                      id="email"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="email"
                      defaultValue
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      onChange={handlerChange}
                      id="password"
                      type="password"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="password"
                      required
                      placeholder="Contraseña"
                    />
                  </div>

                  <div className="flex flex-col mt-8">
                    <button
                      onClick={handlerSubmit}
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <Link
                    className="no-underline hover:underline text-blue-dark text-xs"
                    href="/Registro"
                  >
                    Registar usuario
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg"
            style={{
              background:
                'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
