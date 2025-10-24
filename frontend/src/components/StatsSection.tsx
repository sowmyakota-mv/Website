import ScrollAnimation from "@/animation/ScrollAnimation";
import { useEffect, useState, useRef } from "react";

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollAnimation direction="up" delay={0.8}>
    <section className="bg-gray-50" ref={statsRef}>
      <div className="max-w-6xl mx-auto px-15">
        {/* Removed rounded-xl for square edges */}
        <div className="bg-white shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          <StatBox title="Placement" targetNumber={4000} isVisible={isVisible} suffix="+" />
          <Divider />
          <StatBox title="Sponsored Jobs" targetNumber={2500} isVisible={isVisible} suffix="+" />
          <Divider />
          <StatBox title="Interviews" targetNumber={6000} isVisible={isVisible} suffix="+" />
        </div>
      </div>
    </section></ScrollAnimation>
  );
}

function Divider() {
  return <div className="hidden md:block w-px bg-gray-300 h-16"></div>;
}

function StatBox({ title, targetNumber, isVisible, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setCount(0);
      const duration = 1000;
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const current = Math.floor(progress * targetNumber);
        setCount(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, targetNumber]);

  return (
    <div className="flex-1">
      <h3 className="text-4xl font-bold text-blue-600">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-600 text-lg mt-2">{title}</p>
    </div>
  );
}

export default StatsSection;
