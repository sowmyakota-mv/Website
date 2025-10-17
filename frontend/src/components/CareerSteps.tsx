import React, { useEffect, useState } from "react";
import {
  FileSearch,
  GraduationCap,
  Users,
  FileText,
  FolderKanban,
  Presentation,
  FileCheck,
  UserCheck,
  Award,
  Handshake,
  UserPlus,
} from "lucide-react";

const careerSteps = [
  { title: "Explore the Program", icon: FileSearch }, // person searching in files/documents
  { title: "Enroll in the Course", icon: GraduationCap },
  { title: "Engage in Interactive Classes", icon: Users },
  { title: "Assignments & Mock Interviews", icon: FileText },
  { title: "Work on Real-World Projects", icon: FolderKanban }, // project/folder management
  { title: "Industry-Ready Training & Mentorship", icon: Presentation }, // classroom/group presentation
  { title: "Professional CV Development", icon: FileCheck },
  { title: "Strategic CV Promotion", icon: UserPlus }, // graduation or success-oriented
  { title: "Career Mentoring & Grooming", icon: UserCheck },
  { title: "Guaranteed Job Placement", icon: Award },
  { title: "Ongoing Career Support", icon: Handshake }, // collaboration/support
];


const gradients = [
  "from-blue-400 to-blue-700",
  "from-purple-400 to-purple-700",
  "from-pink-400 to-pink-700",
  "from-green-400 to-green-700",
  "from-yellow-400 to-yellow-700",
  "from-orange-400 to-orange-700",
  "from-red-400 to-red-700",
  "from-cyan-400 to-cyan-700",
  "from-indigo-400 to-indigo-700",
  "from-fuchsia-400 to-fuchsia-700",
  "from-teal-400 to-teal-700",
];

const CARD_WIDTH = 240;
const CARD_HEIGHT = 200;

const CareerCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isShiftOut, setIsShiftOut] = useState(false);

  useEffect(() => {
    if (isShiftOut) return;

    const timer = setTimeout(() => {
      if (current < careerSteps.length - 1) {
        setCurrent(current + 1);
      } else {
        setIsShiftOut(true);
        setTimeout(() => {
          setCurrent(0);
          setIsShiftOut(false);
        }, 1000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [current, isShiftOut]);

  return (
    <div
  className="flex flex-col items-center py-6 bg-white relative overflow-visible"
  style={{ paddingBottom: CARD_HEIGHT / 2 }} // Add some bottom space for the cards
>
  <h3 className="text-3xl font-bold text-center text-blue-700 mb-8">
    DataArtisans Career Success Steps
  </h3>
      <div
        className="relative w-full flex justify-center items-center overflow-hidden"
        style={{ height: CARD_HEIGHT + 20 }}
      >
        <div
          className="relative flex items-center justify-center max-w-[2400px] w-full mx-auto"
          style={{ perspective: 1200 }}
        >
          {careerSteps.map((step, idx) => {
            const pos = idx - current;

            // Keep old cards visible on the left
           if (pos < 0 && !isShiftOut) {
  let scale;
  if (pos === -1) scale = 1.0;       // Previous card same size
  else scale = 0.9 + pos * 0.05;     // Farther left cards smaller

  const zIdx = 100 + pos;
  const yOffset = Math.abs(pos) * 6;
  const xOffset = pos * CARD_WIDTH * 0.18;

  return (
    <div
      key={idx}
      className="absolute shadow-xl rounded-[2em] cursor-pointer"
      style={{
        transform: `translateX(-50%) translateX(${xOffset}px) translateY(${yOffset}px) scale(${scale})`,
        zIndex: zIdx,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        opacity: 0.7,
      }}
    >
      <div
  className={`w-full h-full rounded-[2em] flex flex-col items-center justify-center text-center text-white text-2xl font-semibold px-6 bg-gradient-to-br ${
    gradients[idx % gradients.length]
  }`}
  style={{
    boxShadow: pos === 0 ? "0 8px 48px #0004" : "0 3px 15px #0003",
  }}
>
  {/* Icon above the title */}
  {(() => {
    const Icon = step.icon;
    return <Icon className="w-12 h-12 mb-4" />;
  })()}

  {/* Step title */}
  {step.title}
</div>
    </div>
  );
}

            // Current and next cards
            if (pos >= 0) {
  // ✅ Scale logic fix
  let scale;
  if (pos === 0) scale = 1.1;            // Main card slightly bigger (10%)
  else if (pos === 1) scale = 1.0;       // Next card same size
  else scale = 0.9 - pos * 0.05;         // Further cards smaller

  const zIdx = 100 - pos;
  const yOffset = pos === 0 ? 0 : pos * 6;
  const xOffset = pos * CARD_WIDTH * 0.20;

  const animStyle = isShiftOut
    ? {
        left: "150%",
        opacity: 0,
        transition: "all 1s ease",
      }
    : {
        left: "50%",
        opacity: pos === 0 ? 1 : 0.8,
        transition: "all 0.7s ease",
      };

  return (
    <div
      key={idx}
      className="absolute shadow-xl rounded-[2em] cursor-pointer"
      style={{
        ...animStyle,
        transform: `translateX(-50%) translateX(${xOffset}px) translateY(${yOffset}px) scale(${scale})`,
        zIndex: zIdx,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }}
    >
      <div
  className={`w-full h-full rounded-[2em] flex flex-col items-center justify-center text-center text-white text-2xl font-semibold px-6 bg-gradient-to-br ${
    gradients[idx % gradients.length]
  }`}
  style={{
    boxShadow: pos === 0 ? "0 8px 48px #0004" : "0 3px 15px #0003",
  }}
>
  {/* Icon above the title */}
  {(() => {
    const Icon = step.icon;
    return <Icon className="w-12 h-12 mb-4" />;
  })()}

  {/* Step title */}
  {step.title}
</div>
    </div>
  );
}

            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default CareerCarousel;
