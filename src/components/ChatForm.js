"use client";
import { useState } from "react";
import axios from "axios";

export default function ChatForm({ setResponse }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/chat`, { prompt });
      setResponse(res.data.response);
    } catch (err) {
      setResponse("⚠️ Error fetching AI response.");
    } finally {
      setLoading(false);
      setPrompt("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4"
    >
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="💬 Ask anything..."
        className="flex-1 w-full bg-white/10 text-white placeholder:text-white/50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all duration-300 text-white font-bold tracking-wide shadow-lg disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Ask 🚀"}
      </button>
    </form>
  );
}
