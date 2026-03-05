import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { UtilitiesPage } from "./pages/UtilitiesPage";
import { TokenPage } from "./pages/TokenPage";
import { LaunchpadPage } from "./pages/LaunchpadPage";
import { CreateTokenPage } from "./pages/CreateTokenPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "utilities", Component: UtilitiesPage },
      { path: "token", Component: TokenPage },
      { path: "launchpad", Component: LaunchpadPage },
      { path: "launchpad/create", Component: CreateTokenPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);