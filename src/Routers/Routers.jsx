import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Men from "../Page/Men/Men";

const router=createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
          path:'/men',
          element:<Men></Men>
        }
      ]
    }
])


export default router