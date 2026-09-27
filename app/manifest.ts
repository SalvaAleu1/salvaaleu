import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Salva Aleu",
    short_name: "Salva Aleu",
    description:
      "Personal website of Salva Aleu — student, youth leader and digital innovator.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3ec",
    theme_color: "#17221e",
  };
}
