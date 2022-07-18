import React from "react";
import { Typography as MuiTypography } from '@mui/material';
import { TypographyProps } from "@mui/material";

interface PropsType extends TypographyProps {

}

const Typography: React.FC<PropsType> = ({ ...remProps }: PropsType) => {
  return (
    <MuiTypography 
        {...remProps} 
    />
  );
};

export default Typography;
