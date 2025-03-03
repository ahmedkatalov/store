import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../../pages/ui/Home";
import { FoodPage } from "../../pages/ui/FoodPage";
import { IzbaPage } from "../../pages/ui/IzbaPage";
import { ProductPage } from "../../pages/ui/ProductPage.jsx";
import { SignIn } from "../../features/model/auth/SignIn.jsx";
import { SignUp } from "../../features/model/auth/SignUp.jsx";
import { AssemblyAccaunt } from "../../features/model/accaunt/AssemblyAccaunt.jsx";
import { AssemblyCart } from "../../pages/model/AssemblyCart.jsx";
import { BuyFirst } from "../../entities/ui/buy/BuyFirst.jsx";
import { BuySecond } from "../../entities/ui/buy/BuySecond.jsx";
import { BuyThird } from "../../entities/ui/buy/BuyThird.jsx";
import { Success } from "../../entities/ui/buy/Success.jsx";
import { Condition } from "../../entities/ui/buy/Condition.jsx";
import { AssemblyDetail } from "../../pages/model/detailedpage/AssemblyDetail.jsx";
import { NotFoundPage } from "./NotFoundPage.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <AssemblyCart />,
  },
  {
    path: "mixes",
    element: <ProductPage />,
  },
  {
    path: "food",
    element: <FoodPage />,
  },
  {
    path: "izba",
    element: <IzbaPage />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "accaunt",
    element: <AssemblyAccaunt />,
  },
  {
    path: "buy1",
    element: <BuyFirst />,
  },
  {
    path: "buy2",
    element: <BuySecond />,
  },
  {
    path: "buy3",
    element: <BuyThird />,
  },
  {
    path: "success",
    element: <Success />,
  },
  {
    path: "condition",
    element: <Condition />,
  },
  {
    path: "detail",
    element: <AssemblyDetail />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
]);