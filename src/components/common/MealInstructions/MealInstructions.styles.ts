import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

export const layout: SxProps<Theme> = {
    padding: '32px',
    borderRadius: '10px',
    boxShadow: '0px 5px 11px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: "row",
    gap: '64px'
};

export const block: SxProps<Theme> = {
    display: 'flex',
    flexDirection: "column",
    gap: '8px'
};

export const rightPart: SxProps<Theme> = {
    display: 'flex',
    flexDirection: "column",
    gap: '32px'
};

export const leftPart: SxProps<Theme> = {
    minWidth: '320px',
};
