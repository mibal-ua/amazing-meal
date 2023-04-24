import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

export const layout: SxProps<Theme> = {
    paddingTop: '16px',
    display: 'flex',
    flexDirection: "column",
    gap: '32px'
};

export const element: SxProps<Theme> = {
    display: 'flex',
    flexDirection: "column",
    gap: '8px'
};
