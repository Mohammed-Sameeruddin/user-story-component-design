import { Avatar } from '@mui/material';
import React from 'react';

interface Avatar {
    avatar: string;
}

const AvatarComponent = ({ avatar }: Avatar) => {
    return(
        <>
            <Avatar src={avatar} />
        </>
    );
};

export default AvatarComponent;