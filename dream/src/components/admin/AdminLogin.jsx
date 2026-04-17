import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin({ onClose }) {
  const { login } = useAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Small delay for UX feel
    await new Promise((r) => setTimeout(r, 400));

    const success = login(password);
    if (success) {
      onClose();
    } else {
      setError("Incorrect password. Access denied.");
      setPassword("");
    }
    setLoading(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-white/10 p-8 w-full max-w-sm mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase mb-2">
            Restricted
          </p>
          <h2 className="text-2xl font-serif text-white">Admin Access</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white/50 text-xs tracking-widest uppercase block mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter admin password"
              autoFocus
              className="w-full bg-[#0F0F0F] border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-white/20"
            />
          </div>

          {error && (
            <p className="text-red-400 text-xs tracking-wide">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 bg-[#D4AF37] text-black text-sm font-semibold tracking-widest uppercase disabled:opacity-40 hover:bg-[#c9a430] transition-colors"
          >
            {loading ? "Verifying..." : "Enter"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors text-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
