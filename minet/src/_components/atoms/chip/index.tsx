import React from 'react';
import { Chip } from "@mui/material";

interface ChipProps {
    label: string;
}

const ChipComponent = ({ label } : ChipProps) => {
    return(
        <>
             <Chip label={label} />
        </>
    );
};

export default ChipComponent;