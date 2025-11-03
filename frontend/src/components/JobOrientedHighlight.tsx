import ScrollAnimation from "@/animation/ScrollAnimation";
import { useNavigate } from "react-router-dom";

export default function JobOrientedHighlight() {
    const navigate=useNavigate()
  return (
    <>
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          .animate-zoomInOut {
            animation: zoomInOut 2s ease-in-out infinite;
          }
        `}
      </style>

      {/* Wrap entire section for a base fade-up */}
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="w-full flex flex-col items-center justify-center py-20 bg-white relative px-6 md:px-12">

          {/* Outer Card Container */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="relative w-full max-w-lg overflow-visible">
              <div className="bg-gradient-to-tr from-sky-200 via-pink-100 to-yellow-100 text-gray-900 rounded-[1.5rem] px-8 py-12 shadow-xl text-center w-full md:h-90 overflow-visible relative">

                {/* Calendar Animation */}
                <ScrollAnimation direction="left" delay={0.5}>
                  <div className="absolute -top-8 left-4 w-40 h-36 z-10">
                    <div className="absolute top-6 -left-4 w-32 h-28 bg-gray-100 rounded-lg shadow-lg transform rotate-3 border border-gray-300"></div>
                    <div className="absolute top-3 -left-2 w-32 h-28 bg-gray-50 rounded-lg shadow-lg transform rotate-1 border border-gray-300"></div>
                    <div className="absolute top-0 left-0 w-32 h-28 bg-white rounded-lg shadow-2xl border border-gray-300 flex flex-col">
                      <div className="h-8 bg-green-600 rounded-t-lg flex items-center justify-center">
                        <span className="text-xl text-white font-bold tracking-widest">OCTOBER</span>
                      </div>
                      <div className="flex-grow flex items-center justify-center">
                        <span className="text-7xl font-extrabold text-gray-900">27</span>
                      </div>
                      <div className="absolute top-[-12px] left-6 w-4 h-4 border-2 border-gray-400 rounded-full bg-white shadow-inner"></div>
                      <div className="absolute top-[-12px] right-6 w-4 h-4 border-2 border-gray-400 rounded-full bg-white shadow-inner"></div>
                      <div className="absolute top-[84px] right-[-24px] w-12 h-12 rounded-full flex items-center justify-center shadow-lg rotate-24 bg-cyan-600 animate-zoomInOut">
                        <span className="text-white text-3xl">🔔</span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Title */}
                <ScrollAnimation direction="up" delay={0.6}>
                  <h2 className="font-extrabold text-3xl mb-6 ml-36">100% Job Oriented Course</h2>
                </ScrollAnimation>

                {/* Description */}
                <ScrollAnimation direction="up" delay={0.8}>
                  <p className="font-medium mb-6 text-lg">
                    Next batch starts <span className="font-bold underline">27th October</span>.
                    <br />
                    Timings: <span className="font-semibold">6:45 PM – 8:15 PM</span>
                  </p>
                </ScrollAnimation>

                {/* Highlight Text */}
                <ScrollAnimation direction="up" delay={1}>
                  <p className="text-yellow-700 font-semibold mb-8 text-xl">
                    🎁 Free 15 Days Classes Included
                  </p>
                </ScrollAnimation>

                {/* Button */}
                <ScrollAnimation direction="up" delay={1.2}>
                  <button onClick={()=>navigate("/register")} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-full shadow-md transition duration-300">
                    Register Now
                  </button>
                </ScrollAnimation>

              </div>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </>
  );
}


// export default function JobOrientedHighlight() {
//   return (
//     <>
//       <style>
//         {`
//           @keyframes zoomInOut {
//             0%, 100% { transform: scale(1); }
//             50% { transform: scale(1.2); }
//           }
//           .animate-zoomInOut {
//             animation: zoomInOut 2s ease-in-out infinite;
//           }
//           .bell-glow {
//             box-shadow:
//               0 0 8px #22d3ee,
//               0 0 16px #06b6d4,
//               0 0 24px #22d3ee;
//           }
//         `}
//       </style>

//       <div className="w-full flex flex-col items-center justify-center py-20 bg-white relative px-6 md:px-12">

//         <div className="relative w-full max-w-lg overflow-visible">

//           <div className="bg-gradient-to-tr from-sky-200 via-pink-100 to-yellow-100 text-gray-900 rounded-[1.5rem] px-8 py-12 shadow-xl text-center w-full h-90 overflow-visible relative">

//             {/* Calendar pages stack inside card */}
//             <div className="absolute -top-8 left-4 w-40 h-36 z-10">
//               <div className="absolute top-6 -left-4 w-32 h-28 bg-gray-100 rounded-lg shadow-lg transform rotate-3 border border-gray-300"></div>
//               <div className="absolute top-3 -left-2 w-32 h-28 bg-gray-50 rounded-lg shadow-lg transform rotate-1 border border-gray-300"></div>
//               <div className="absolute top-0 left-0 w-32 h-28 bg-white rounded-lg shadow-2xl border border-gray-300 flex flex-col">
//                 <div className="h-8 bg-green-600 rounded-t-lg flex items-center justify-center">
//                   <span className="text-xl text-white font-bold tracking-widest">OCTOBER</span>
//                 </div>
//                 <div className="flex-grow flex items-center justify-center">
//                   <span className="text-7xl font-extrabold text-gray-900">20</span>
//                 </div>
//                 <div className="absolute top-[-12px] left-6 w-4 h-4 border-2 border-gray-400 rounded-full bg-white shadow-inner"></div>
//                 <div className="absolute top-[-12px] right-6 w-4 h-4 border-2 border-gray-400 rounded-full bg-white shadow-inner"></div>
//                 {/* Bell icon with glow and zoom animation */}
//                 <div className="absolute top-[84px] right-[-24px] w-12 h-12 rounded-full flex items-center justify-center shadow-lg rotate-24 bg-cyan-600 animate-zoomInOut bell-glow">
//                   <span className="text-white text-3xl">🔔</span>
//                 </div>
//               </div>
//             </div>

//             {/* Main content */}
//             <h2 className="font-extrabold text-3xl mb-6 ml-28">100% Job Oriented Course</h2>
//             <p className="font-medium mb-6 text-lg">
//               Next batch starts <span className="font-bold underline">20th October</span>.
//               <br />
//               Timings: <span className="font-semibold">6:45 PM – 8:15 PM</span>
//             </p>
//             <p className="text-yellow-700 font-semibold mb-8 text-xl">🎁 Free 15 Days Classes Included</p>
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-full shadow-md transition duration-300">
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

