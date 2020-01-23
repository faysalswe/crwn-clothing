import React from 'react'
import { Route } from 'react-router-dom'

import './shop.styles.scss'

import { connect } from 'react-redux'

import { fetchCollectionStart } from '../../redux/shop/shop.action'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionContainer from '../collection/collection.container'

class Shop extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCollectionStart());
    }
    render () {
        const { match } = this.props;
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
        )
    }
}


// const mapDispatchToProps = dispatch => ({
//     updateCollections : collectionMap => 
//     dispatch(UpdateCollections(collectionMap))
// })
export default connect(null)(Shop);

// TODO: review topic 
// 1. selector how it work
// 2. how selector get state
