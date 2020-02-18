import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import CollectionOverview from './collections-overview.component'
import Spinner from '../spinner/spinner.component';

const GET_COLLECTION = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
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


