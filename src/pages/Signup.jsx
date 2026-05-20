import { useState } from "react";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account Created!");

    } catch (error) {

      alert(error.message);

    }

  };

  return (
    <div className="text-white flex justify-center items-center h-[80vh]">

      <div className="bg-slate-900 p-10 rounded-3xl max-w-md w-full">

        <h1 className="text-4xl font-bold text-center mb-8">
          Signup
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-950"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-950"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold"
          >
            Create Account
          </button>

        </div>

      </div>

    </div>
  );
}