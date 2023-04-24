import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

export const blockLayout: SxProps<Theme> = {
    padding: '32px',
    borderRadius: '10px',
    boxShadow: '0px 5px 11px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    gap: '32px'
};

export const imageStyle: SxProps<Theme> = {
    height: '200px',
    borderRadius: '6px',
};

export const textLayout: SxProps<Theme> ={
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
};

export const secondaryText: SxProps<Theme> ={
    color: '#323232',
};
