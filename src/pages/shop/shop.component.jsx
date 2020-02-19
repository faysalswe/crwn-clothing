import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import "./shop.styles.scss";

import { connect } from "react-redux";

import { fetchCollectionStart } from "../../redux/shop/shop.action";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const CollectionContainer = lazy(() =>
  import("../collection/collection.container")
);

const Shop = ({ dispatch, match }) => {
  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
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
