export default function Loading(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        display="block"
        width="30"
        height="30"
        fill="rgb(238, 224, 203)"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="rgb(238, 224, 203)"
          stroke-width="8"
          fill="none"
        >
          <animate
            attributeName="stroke-dasharray"
            dur="2s"
            repeatCount="indefinite"
            from="0 280.8"
            to="138.24 280.8"
          />
          <animate
            attributeName="stroke-dashoffset"
            dur="2s"
            repeatCount="indefinite"
            from="0"
            to="-139.2"
          />
        </circle>
      </svg>
      <p className="text-[#EEE0CB]">Loading</p>
    </div>
  );
}
