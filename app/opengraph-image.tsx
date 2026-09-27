import { ImageResponse } from "next/og";

export const alt = "Salva Aleu — Student, Youth Leader & Digital Innovator";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#17221e",
          color: "#f5f3ec",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          SALVA ALEU
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#78c4a5",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              maxWidth: "980px",
              fontSize: 80,
              lineHeight: 0.95,
              fontWeight: 800,
              letterSpacing: "-0.055em",
            }}
          >
            Student. Youth leader. Digital builder.
          </div>
          <div style={{ color: "#b9c9c1", fontSize: 28 }}>
            Science · Sustainable development · Technology · Community
          </div>
        </div>
      </div>
    ),
    size
  );
}
