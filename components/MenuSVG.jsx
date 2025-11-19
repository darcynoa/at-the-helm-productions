export default function MenuSVG({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={33.913}
      height={24}
      fill="#e5f1f2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        id="menuOpen"
        d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m7-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
        style={{
          strokeWidth: 1,
          stroke: "#e5f1f2",
          strokeOpacity: 1,
        }}
      />

      <path
        id="menuClose"
        className="invisible"
        d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z"
        style={{
          strokeWidth: 1,
          stroke: "#e5f1f2",
          strokeOpacity: 1,
        }}
      />
    </svg>
  );
}
