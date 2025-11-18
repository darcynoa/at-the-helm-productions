export default function TheHelmWave({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={452.264}
      height={203}
      fill="none"
      {...props}
    >
      <defs>
        <linearGradient
          id="gradient"
          x1={0.625}
          x2={0.641}
          y1={0.09}
          y2={0.983}
        >
          <stop offset={0.04} stopColor="#e5f1f2" />
          <stop offset={1} stopColor="#2e62ff" />
        </linearGradient>
        <pattern
          id="wavePattern"
          width={452.264}
          height={203}
          x={0}
          y={0}
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 0h452.264v203H0z"
            style={{
              fill: "url(#gradient)",
            }}
          />
        </pattern>
      </defs>
      <path
        fill="url(#wavePattern)"
        d="M434.002 142c37 7 9 48-7.383 49.084-26.082 1.723-127.892 2.916-154.074 9.466-11.527 2.881-232.233.439-251.318 2.304-32.528 3.18-17.813-46.769-18.446-49.561-.633-2.784 37.557-9.157 40.35-9.796 23.01-6.306 39.02-14.508 59.578-26.53 19.715-11.533 38.904-24.777 55.281-40.77 24.557-23.984 42.9-56.73 76.016-70.376 6.02-2.484 12.969-4.74 19.482-5.434 42.112-4.462 73.23 30.314 73.99 72.444A4.815 4.815 0 0 1 323 77.955a4.791 4.791 0 0 1-3.863-1.545c-6.676-6.284-15.66-10.144-25.559-10.144-22.67 0-37.295 16.68-37.295 37.252 0 20.195 18.11 38.05 48.871 38.05"
        className="fills"
      />
    </svg>
  );
}

// Reusable wave group (coordinates are in the original large user-space).
export function TheHelmWaveShape({ x = 0, y = 0, transform, ...rest }) {
  // combine any incoming transform with the translate from x/y
  const translate = `translate(${x} ${y})`;
  const combined = transform ? `${translate} ${transform}` : translate;
  return (
    <path
      {...rest}
      transform={combined}
      fill="#e5f1f2"
      d="M434.002 142c37 7 9 48-7.383 49.084-26.082 1.723-127.892 2.916-154.074 9.466-11.527 2.881-232.233.439-251.318 2.304-32.528 3.18-17.813-46.769-18.446-49.561-.633-2.784 37.557-9.157 40.35-9.796 23.01-6.306 39.02-14.508 59.578-26.53 19.715-11.533 38.904-24.777 55.281-40.77 24.557-23.984 42.9-56.73 76.016-70.376 6.02-2.484 12.969-4.74 19.482-5.434 42.112-4.462 73.23 30.314 73.99 72.444A4.815 4.815 0 0 1 323 77.955a4.791 4.791 0 0 1-3.863-1.545c-6.676-6.284-15.66-10.144-25.559-10.144-22.67 0-37.295 16.68-37.295 37.252 0 20.195 18.11 38.05 48.871 38.05"
    />
  );
}
