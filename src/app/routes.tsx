import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { RecommendationPage } from "./pages/RecommendationPage";
import { RoadmapPage } from "./pages/RoadmapPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "login", Component: LoginPage },
      { path: "signup", Component: SignupPage },
      { path: "resources", Component: ResourcesPage },
      {
        Component: ProtectedRoute,
        children: [
          { path: "recommendation", Component: RecommendationPage },
          { path: "roadmap/:skillId", Component: RoadmapPage },
          { path: "dashboard", Component: DashboardPage },
        ],
      },
    ],
  },
]);
