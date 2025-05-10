import { Outlet } from "react-router";
import type { Route } from "./+types/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Auth" },
    { name: "description", content: "Authentication routes" },
  ];
}

export default function AuthLayout() {
  return <div className="flex flex-col items-center justify-center h-screen">
    <Outlet />
  </div>;
}
