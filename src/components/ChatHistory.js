import { useEffect, useState } from "react";
import axios from "axios";

export default function ChatHistory({ onSelect }) {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/chat`);
      setHistory(res.data);
    } catch (err) {
      console.error("Error loading chat history", err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/chat/${id}`);
      setHistory((prev) => prev.filter((chat) => chat._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-md max-h-[300px] overflow-y-auto mb-4">
      <h3 className="text-cyan-300 font-bold text-lg mb-3 flex items-center gap-2">
        ⏳ Chat History
      </h3>
      <ul className="space-y-2 text-sm font-mono text-white/90">
        {history.map((chat, i) => (
          <li
            key={chat._id}
            className="flex justify-between items-center bg-white/5 hover:bg-white/10 p-2 rounded-md transition-all duration-200"
          >
            <span
              className="cursor-pointer hover:text-sky-400 transition"
              onClick={() => onSelect(chat.response)}
            >
              {i + 1}. {chat.prompt.slice(0, 30)}...
            </span>
            <button
              className="text-pink-500 text-lg hover:text-red-500 transition cursor-pointer"
              onClick={() => handleDelete(chat._id)}
            >
              🗑 
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
