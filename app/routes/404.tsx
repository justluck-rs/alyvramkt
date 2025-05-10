import { useRouteError } from "react-router";
import type { Route } from "./+types/404";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 - Página não encontrada" },
    { name: "description", content: "A página que você está procurando não existe." },
  ];
}

export default function NotFound() {
  const error = useRouteError();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        A página que você está procurando não existe.
      </p>
      {error instanceof Error && (
        <p className="mt-4 text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
} 