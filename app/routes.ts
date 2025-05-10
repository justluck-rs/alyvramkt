import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("auth/*", "routes/auth/layout.tsx", [
    route("sign-in", "routes/auth/sign-in.tsx"),
    route("sign-up", "routes/auth/sign-up.tsx"),
  ]),
  route(":path/*", "routes/404.tsx") // Corrigindo a sintaxe do catch-all para usar /* após o path
] satisfies RouteConfig;