import TheHelmWave, { TheHelmWaveShape } from "./TheHelmWave";

export default function TheHelmMask({ ...props }) {
  return (
    <svg
      width="653"
      xmlns="http://www.w3.org/2000/svg"
      height="189"
      id="screenshot-f2d1f21a-3bf4-80d5-8007-1c9f22355545"
      viewBox="8 22 653 189"
      {...props}
    >
      {/* Path of the bounding box */}
      <path
        stroke="#fff"
        strokeWidth={2}
        d="M27,116L172,25L661,22L631.0999755859375,210L8,211L27,116"
        className="fills"
        transform="translate(0 52)"
      />
      <g className="strokes">
        <g className="inner-stroke-shape">
          <defs>
            {/* define the clip using userSpaceOnUse and the same translated path */}
            <clipPath id="bounding-box-clip" clipPathUnits="userSpaceOnUse">
              <path
                id="bounding-box"
                d="M27,116L172,25L661,22L631.0999755859375,210L8,211L27,116"
                transform="translate(0 52)"
                style={{
                  fill: "none",
                  strokeWidth: 4,
                  stroke: "#e20b0b",
                  strokeOpacity: 1,
                }}
              />
            </clipPath>
          </defs>
          {/* optionally draw the stroke outline (already transformed above) */}
        </g>
      </g>
      {/* now testRect uses 0-based coordinates and will be clipped by the transformed path */}
      <g clipPath="url(#bounding-box-clip)">
        {/* keep test rects if you need them */}

        <path
          transform="translate(-500 100) scale(3)"
          fill="#e5f1f2"
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />

        {/* <rect
          id="testRect"
          x={-500}
          y={150}
          width="500"
          height="500"
          rx="170"
          fill="#e5f1f2c7"
        /> */}

        {/* <g>
          <TheHelmWaveShape id={"wave1"} x={-347} y={128} />
        </g> */}

        {/* <g>
          <path
            transform="translate(0 106) scale(-1, 1)"
            id="testwave"
            fill="#e5f1f2"
            d="M600,8.1c0,0-14.6-0.6-19.7-1.1c-5-0.5-10.2-1-20.3-1s-15.3,0.5-20.3,1 c-5.1,0.5-9.8,1-19.7,1c-9.8,0-14.6-0.5-19.7-1c-5-0.5-10.2-1-20.3-1c-10.2,0-15.4,0.8-20.5,1.5c-5,0.8-9.8,1.5-19.5,1.5 c-9.7,0-14.4-0.9-19.4-1.9C415.5,6,410.3,5,400,5c-10.4,0-15.7,1.3-20.8,2.6c-4.9,1.2-9.6,2.4-19.2,2.4c-9.5,0-14.2-1.4-19.1-2.9 C335.8,5.6,330.5,4,320,4c-10.5,0-15.9,1.9-21.1,3.7C294,9.4,289.4,11,280,11c-9.4,0-14-1.8-18.8-3.8C256,5.2,250.6,3,240,3 c-10.7,0-16.1,2.4-21.3,4.8C213.8,10,209.3,12,200,12c-9.2,0-13.8-2.3-18.6-4.7C176.2,4.7,170.7,2,160,2c-10.9,0-16.6,3.4-21.7,6.5 c-4.7,2.8-9.2,5.5-18.3,5.5c-9,0-13.2-3-18.2-6.4C96.8,4,91,0,80,0C69,0,63.2,4,58.2,7.6C53.2,11,49,14,40,14s-13.2-3-18.2-6.4 C16.8,4,11,0,0,0v200h600h200V8.1H600z"
          />
        </g> */}
        {/* <g>
          <TheHelmWaveShape id={"wave2"} x={-250} y={250} />
        </g> */}
      </g>
      {/* optional: keep the standalone waveform SVG if needed elsewhere */}
      {/* <TheHelmWave /> */}
    </svg>
  );
}
