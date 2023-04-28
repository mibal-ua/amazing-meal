import {SxProps} from '@mui/system';
import {Theme} from '@mui/material';

export const pageWrapper: SxProps<Theme> = {
    paddingTop: '32px',
    paddingLeft: '32px',
    paddingRight: '32px',
};

export const loadingWrapper: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
};
