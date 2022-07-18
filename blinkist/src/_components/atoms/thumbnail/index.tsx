import React from 'react';

interface ThumbnailType {
    imgSrc: string;
}

const Thumbnail = ({ imgSrc }: ThumbnailType) => {
    return(
        <>
            <img src={imgSrc} alt="thumbnail" />
        </>
    );
};

export default Thumbnail;