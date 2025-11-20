import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ViewWishes } from "../pages/ViewWishes";

export const router = createBrowserRouter([
  {
    path: "/final-project",
    element: <Home></Home>,
  },
  {
    path: "/final-project/xem-loi-chuc",
    element: <ViewWishes></ViewWishes>,
  },
]);
