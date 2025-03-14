import React from "react";

const CurvedPathMirrored: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      viewBox="0 0 1004 1545"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Thick White Path (Lower Opacity) */}
      <path
        d="M954 0V300C954 320 924 350 884 350H254C214 350 184 380 184 420V900C184 940 214 970 254 970H804C844 970 874 1000 874 1040V1545"
        stroke="white"
        strokeWidth="80" /* Thick stroke for the base */
        strokeLinecap="round"
        opacity="0.66" /* Lower opacity */
      />
      
      {/* Dashed Peach Line (Lower Opacity) */}
      <path
        d="M954 0V300C954 320 924 350 884 350H254C214 350 184 380 184 420V900C184 940 214 970 254 970H804C844 970 874 1000 874 1040V1545"
        stroke="#FFCBA3"
        strokeWidth="10" /* Thinner dashed line */
        strokeLinecap="round"
        strokeDasharray="30 20" /* Creates the dashed effect */
        opacity="0.66" /* Lower opacity */
      />
    </svg>
  );
};

export default CurvedPathMirrored;
