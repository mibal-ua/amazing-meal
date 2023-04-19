import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

export const listLayout: SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '16px',
    paddingTop: '16px',
    paddingBottom: '16px',
};
