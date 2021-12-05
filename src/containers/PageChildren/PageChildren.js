import React, { useState, useEffect } from "react";

import SideBar from "./SideBar";
import Policy from "../../components/Policy/Policy";
import ProductChildren from "./ProductChildren";

import { connect } from "react-redux";

import * as productsAction from "../../redux/actions/index";

function PageChildren(props) {
    const { products } = props;
    useEffect(() => {
        props.onFetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [productChildren, setProductChildren] = useState(products);
    useEffect(() => {
        const listProducts = products.filter(
            (product) => product.type === "tre-em"
        );
        setProductChildren(listProducts);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <div>
            <Policy />
            <div className="page-children">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mobile-sidebar">
                            <SideBar />
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <ProductChildren
                                productChildren={productChildren}
                            />
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

export default connect(mapStateToProps, mapDispatchToProps)(PageChildren);
