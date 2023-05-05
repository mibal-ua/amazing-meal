import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

const maxWidth = "1200px";

export const listLayout: SxProps<Theme> = {
    maxWidth,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
    gap: "16px",
    paddingTop: "16px",
    paddingBottom: "16px"
};

export const upperLayout: SxProps<Theme> = {
    maxWidth,
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    '@media (max-width: 450px)': {
        flexDirection: "column",
        gap: "8px",
    }
};

export const pagination: SxProps<Theme> = {
    display: "flex",
};

export const typography: SxProps<Theme> = {
    display: "flex",
};
