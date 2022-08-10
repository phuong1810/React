import React from 'react';
import { useQuery, gql } from '@apollo/client';

import AlbumList from './components/AlbumList'

const pullQuery = gql`
    query albumList {
        albumList {
            id
            name
            thumbnailUrl
        }
    }
`
function AlbumFeature(props) {
    const { loading, error, data } = useQuery(pullQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data.albumList)
    
    return(
        <div>
            <div>Phuong</div>
            <AlbumList albumList={data.albumList} />
        </div>
    );


    // const { loading, error, data } = useQuery(pullQuery)
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error :(</p>
    // return (
    //     <div>
    //         <div>Phuong</div>
    //         <AlbumList albumList={data.albumList} />
    //     </div>
    // );
}

export default AlbumFeature;