import React from "react";

import Carousel from "../../components/Carousel/Carousel";
import Polyci from "../../components/Policy/Policy";
import HomeProduct from "../HomeProduct/HomeProduct";

function PageHome(props) {
    return (
        <React.Fragment>
            <Carousel></Carousel>
            <Polyci></Polyci>
            <HomeProduct />
        </React.Fragment>
    );
}

export default PageHome;
