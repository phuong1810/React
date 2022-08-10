import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';
import './style.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired
};
AlbumList.defaultProps = {
    albumList: []
}
function AlbumList({ albumList }) {
    return (
        <div className='container'>
            <div className='row'>
                {albumList.map(album => (
                    <AlbumItem key={album.id} album={album} />
                ))}
            </div>
        </div>
    );
}

export default AlbumList;