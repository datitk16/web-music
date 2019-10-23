import React from "react";
import HomePage from "./Home/mainPage/HomePage";
import Song from "./Home/resultSong/Song";
const routes=[
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/result',
        exact:true,
        main:()=><Song/>
    }
]
export default routes;