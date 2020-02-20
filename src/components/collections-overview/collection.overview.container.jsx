import React from 'react';
import { Query } from 'react-apollo';
import CollectionOverview from './collections-overview.component'
import Spinner from '../spinner/spinner.component';
import { GET_COLLECTION } from '../../graphql/query';

const CollectionOverviewContainer = () => {
    return (
        <Query query={GET_COLLECTION}>
        {
            ({ loading, data}) => {
                if (loading) return <Spinner/>;
                return <CollectionOverview collections={data.collections}/>
            }
        }
        </Query>
    )
}

export default CollectionOverviewContainer;


