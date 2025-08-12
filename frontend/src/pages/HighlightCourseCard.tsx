import { Calendar } from "@/components/ui/calendar";
import { Clock, Gift} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* 🔥 Highlight Course Card Component */
function HighlightCourseCard() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-08-20T18:45:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft("Started!");
        clearInterval(timer);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="my-10">
      <div className="relative p-6 text-white bg-blue-900 rounded-lg shadow-lg animate-glow">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          {/* <Calendar /> 100% Job Oriented Course */}
        </h3>
        <p className="mt-2 flex items-center gap-2">
          <Clock /> Starts 20th August | 6:45 PM – 8:15 PM
        </p>
        <p className="mt-2 flex items-center gap-2">
          <Gift /> Free Classes for 15 Days
        </p>
        <p className="mt-4 text-lg font-semibold">
          Starts in: <span className="text-yellow-400">{timeLeft}</span>
        </p>
        <Link
          to="/register"
          className="mt-6 inline-block bg-yellow-400 text-black px-5 py-2 font-semibold rounded hover:bg-yellow-500 transition"
        >
          Register Now
        </Link>
        <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-border-glow"></div>
      </div>
    </div>
  );
}

export default HighlightCourseCard