import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Login to your account" },
  ];
}

export default function Login() {
  return <div className="flex flex-col items-center justify-center h-screen">Login</div>;
}
