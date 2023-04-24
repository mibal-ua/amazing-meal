import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

export const pageWrapper: SxProps<Theme> = {
    paddingTop: '32px',
    paddingLeft: '128px',
    paddingRight: '128px',
};

export const loadingWrapper: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
};
