import React from 'react'
import Button from '../common/Button';

function Map() {
  return (
    <div className='my-10 '>
      <Button text={'View All'} customClass={'mx-auto !w-[22%] leading-[24px] !text-[20px] !font-normal !py-[10px]'}/>
      <div className='flex justify-center items-center pt-10'>
      <img  src="/images/image 15.png" alt="" />

      </div>
      {/* <div className='ml-10'>
             <input type="range"  />
      </div> */}
    </div>
  )
}

export default Map;

// import React, { useState } from 'react';

// function Map() {
//   const [progress, setProgress] = useState(0); // Initial progress set to 50%

//   return (
//     <div className="w-full max-w-lg mx-auto my-8">
//       {/* Labels for breakpoints */}
//       <div className="flex justify-between text-gray-700 mb-1">
//         <span>0</span>
//         <span onClick={() => setProgress(prev => Math.max(prev + 20, ))}
          
//           >20</span>
//         <span onClick={() => setProgress(prev => Math.min(prev + 20))}>30</span>
//         <span onClick={() => setProgress(prev => Math.min(prev + 20))}>40</span>
//         <span onClick={() => setProgress(prev => Math.min(prev + 20))}>50</span>
//         <span onClick={() => setProgress(prev => Math.min(prev + 20))}>60</span>

//         {/* <span>Middle</span>
//         <span>End</span> */}
//       </div>

//       {/* Progress Bar Container */}
//       <div className="relative h-4 bg-gray-200 rounded-full">
//         {/* Background for completed progress */}
//         <div
//           className="absolute top-0 left-0 h-4 bg-blue-500 rounded-full"
//           style={{ width: `${progress}%` }}
//         ></div>

//         {/* Breakpoints on the progress bar */}
//         <div className="absolute top-0 left-0 w-full h-4 flex justify-between">
//           <div
//             className={`relative w-4 h-4 rounded-full -translate-y-1/2 ${
//               progress >= 0 ? 'bg-blue-500' : 'bg-gray-400'
//             }`}
          
//           >
            
            
//           </div>
// {/*         
//           <div
//             className={`relative w-4 h-4 rounded-full -translate-y-1/2 ${
//               progress >= 50 ? 'bg-blue-500' : 'bg-gray-400'
//             }`}
//           ></div>
//           <div
//             className={`relative w-4 h-4 rounded-full -translate-y-1/2 ${
//               progress === 100 ? 'bg-blue-500' : 'bg-gray-400'
//             }`}
//           ></div> */}
//         </div>
//       </div>

//       {/* Buttons to Control Progress (Optional) */}
//       <div className="flex justify-center space-x-4 mt-4">
//         <button
//           onClick={() => setProgress(prev => Math.max(prev - 18, 0))}
//           className="px-4 py-2 bg-red-500 text-white rounded  "
//         >
//           Decrease
//         </button>
//         <button
//           onClick={() => setProgress(prev => Math.min(prev + 20, 100))}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Increase
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Map;
