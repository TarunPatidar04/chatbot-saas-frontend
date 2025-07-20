export default function ResponseBox({ response }) {
  return (
    <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 text-white shadow-inner backdrop-blur-lg animate-fade-in">
      <h3 className="font-semibold text-xl mb-3 text-pink-400">💡 AI Response:</h3>
      <p className="whitespace-pre-line leading-relaxed tracking-wide">{response}</p>
    </div>
  );
}
