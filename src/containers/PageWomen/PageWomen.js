import React, { useEffect, useState } from "react";

import SideBar from "./SideBar";
import Policy from "../../components/Policy/Policy";
import ProductWomen from "./ProductWomen";

import { connect } from "react-redux";

import * as productsAction from "../../redux/actions/index";

function PageWomen(props) {
    const { products } = props;

    useEffect(() => {
        props.onFetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [productWomen, setProductWomen] = useState(products);
    useEffect(() => {
        const listProducts = products.filter(
            (product) => product.type === "nu"
        );
        setProductWomen(listProducts);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <div>
            <Policy />
            <div className="page-man">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mobile-sidebar">
                            <SideBar />
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <ProductWomen productWomen={productWomen} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PageWomen);
