import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

AlbumItem.propTypes = {
    album: PropTypes.object
};
AlbumItem.defaultProps = {
    album: {}
}
function AlbumItem({ album }) {
    return (
        <div className='col-12'>
            <div className="item-album">
                <div className='img-hv'>
                    <img src={album.thumbnailUrl} alt={album.name} />
                </div>
                <h3>{album.name}</h3>
            </div>
        </div>
    );
}

export default AlbumItem;