import React, { useEffect, useState } from "react";

import Policy from "../../components/Policy/Policy";
import SideBar from "./SideBar";
import ProductMan from "./ProductMan";

import { connect } from "react-redux";

import * as productsAction from "../../redux/actions/index";

function PageMan(props) {
    const { products } = props;
    const [productMan, setProductMan] = useState(products);
    const [styles, setStyles] = useState("");
    const [price, setPrice] = useState();

    useEffect(() => {
        props.onFetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //   const listProducts = products.filter((product) => product.type === "nam");
    //   setProductMan(listProducts);
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [products]);

    useEffect(() => {
        let listProducts;
        listProducts = products.filter((product) => product.type === "nam");
        if (styles === "ao-nam") {
            listProducts = listProducts.filter(
                (product) => product.style === "ao-nam"
            );
        }
        if (styles === "quan-nam") {
            listProducts = listProducts.filter(
                (product) => product.style === "quan-nam"
            );
        }
        if (styles === "phu-kien-nam") {
            listProducts = listProducts.filter(
                (product) => product.style === "phu-kien-nam"
            );
        }
        if (price === "duoi-300") {
            listProducts = listProducts.filter(
                (product) => product.price < 300000
            );
        } else if (price === "300-500") {
            listProducts = listProducts.filter(
                (product) => product.price < 500000 && product.price >= 300000
            );
        } else if (price === "500-1000") {
            listProducts = listProducts.filter(
                (product) => product.price < 1000000 && product.price >= 500000
            );
        } else if (price === "tren-1000000") {
            listProducts = listProducts.filter(
                (product) => product.price > 1000000
            );
        }
        setProductMan(listProducts);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products, styles, price]);

    return (
        <div>
            <Policy />
            <div className="page-man">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mobile-sidebar">
                            <SideBar
                                setStyles={setStyles}
                                setPrice={setPrice}
                            />
                            {/* <SideBar /> */}
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <ProductMan productMan={productMan} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.allproducts.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchData: () => dispatch(productsAction.actFetchDataRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageMan);
