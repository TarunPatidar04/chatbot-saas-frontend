"use client";
import { useState } from "react";
import ChatForm from "../components/ChatForm";
import ResponseBox from "../components/ResponseBox";
import ChatHistory from "@/components/ChatHistory";

export default function Home() {
  const [response, setResponse] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center px-4 py-10 font-mono">
      <div className="w-full max-w-3xl p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6 tracking-widest text-cyan-400 drop-shadow-lg">
          ⚡ ChatBot SaaS Clone
        </h1>
          <ChatHistory onSelect={setResponse} />
        <ChatForm setResponse={setResponse} />
        {response && <ResponseBox response={response} />}
      </div>
    </main>
  );
}
