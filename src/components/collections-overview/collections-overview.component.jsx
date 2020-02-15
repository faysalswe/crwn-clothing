import React, { useContext } from "react";
import "./collections-overview.styles.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionContext from "../../context/collections/collections.context";

const CollectionsOverview = () => {
  const collection  = useContext(CollectionContext);
  return (
    <div className="collections-overview">
      {Object.values(collection).map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
