import type { Route } from "./+types/home";
import { HomePage } from "../pages/home-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Alyvra Agency" },
    { name: "description", content: "Alyvra Marketing e Estratégia de Inovação" },
  ];
}

export default function Home() {
  return <HomePage />;
}
