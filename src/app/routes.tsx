import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { RecommendationPage } from "./pages/RecommendationPage";
import { RoadmapPage } from "./pages/RoadmapPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "recommendation", Component: RecommendationPage },
      { path: "roadmap/:skillId", Component: RoadmapPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "resources", Component: ResourcesPage },
    ],
  },
]);
