import React, { useEffect } from "react";

import "../../assets/css/base.css";
import "../../assets/css/homeProduct.css";
import "../../assets/css/responsive.css";

import HomeProductItem from "./HomeProductItem";

import { connect } from "react-redux";

import * as productsAction from "../../redux/actions/index";

function HomeProduct(props) {
    const { products } = props;

    useEffect(() => {
        props.onFetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const [page, setPage] = useState(1);
    // const [limit] = useState(8);

    // useEffect(() => {
    //   props.onFetchData(page, limit);
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // const handleClickLoadMore = () => {
    //   if (page + 1 === 2) {
    //     props.onFetchData(page + 2, 4);
    //     setPage(page + 2);
    //   } else {
    //     props.onFetchData(page + 1, 4);
    //     setPage(page + 1);
    //   }
    // };

    return (
        <div className="home-product">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <h2>THỜI TRANG YODY</h2>
                </div>
                <div className="row">
                    <HomeProductItem producstItem={products} />
                </div>
                {/* <div className="row justify-content-center">
          <button
            className="btn-lg btn-load__more"
            onClick={handleClickLoadMore}
          >
            Load more
          </button>
        </div> */}
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
    //   onFetchData: (page, limit) =>
    //     dispatch(productsAction.actAddDataPagination(page, limit)),
    // };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeProduct);
