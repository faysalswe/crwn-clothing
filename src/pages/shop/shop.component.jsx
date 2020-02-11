import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import "./shop.styles.scss";

import { connect } from "react-redux";

import { fetchCollectionStart } from "../../redux/shop/shop.action";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionContainer from "../collection/collection.container";

const Shop = ({ dispatch, match }) => {
  useEffect(() => {
    dispatch(fetchCollectionStart());
    console.log("Hello bangladesh");
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//     updateCollections : collectionMap =>
//     dispatch(UpdateCollections(collectionMap))
// })
export default connect(null)(Shop);

// TODO: review topic
// 1. selector how it work
// 2. how selector get state
