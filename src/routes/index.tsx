import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const FAQ = React.lazy(() => import("../pages/Faq"));
const EyeTest = React.lazy(() => import("../pages/EyeTest"));
const About = React.lazy(() => import("../pages/About"));
const DryEye = React.lazy(() => import("../pages/EyeTest/DryEye"));
const DistanceVision = React.lazy(
  () => import("../pages/EyeTest/DistanceVision")
);
const NearVision = React.lazy(() => import("../pages/EyeTest/NearVision"));
const Astigmatism = React.lazy(() => import("../pages/EyeTest/Astigmatism"));
const ColorBlind = React.lazy(() => import("../pages/EyeTest/ColorBlind"));

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.FAQ, element: <FAQ /> },
  { path: PathConstants.EYETEST, element: <EyeTest /> },
  { path: PathConstants.ABOUT, element: <About /> },
  { path: PathConstants.DRYEYE, element: <DryEye /> },
  { path: PathConstants.DISTANCEVISION, element: <DistanceVision /> },
  { path: PathConstants.NEARVISION, element: <NearVision /> },
  { path: PathConstants.ASTIGMATISM, element: <Astigmatism /> },
  { path: PathConstants.COLORBLIND, element: <ColorBlind /> },
];
export default routes;
