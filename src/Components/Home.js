import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Main from "./Main";
import Footer from "./Footer";

function Home()
{
    return(
        <div>
            <Header />
            <Slider />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;