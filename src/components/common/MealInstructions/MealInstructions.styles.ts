import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export const layout: SxProps<Theme> = {
    maxWidth: "1200px",
    padding: "32px",
    margin: "0 auto",
    borderRadius: "10px",
    boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
    gap: "28px",
    '@media (max-width: 750px)': {
        flexDirection: "column",
    },
    "@media (max-width: 500px)": {
        padding: "20px",
        gap: "20px"
    },
};

export const block: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
};

export const rightPart: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    "@media (max-width: 750px)": {
        gap: "20px",
    },
};

export const ingredients: SxProps<Theme> = {
    minWidth: "320px",
    "@media (max-width: 750px)": {
        minWidth: "200px",
    },
};

export const h4: SxProps<Theme> = {
    fontSize: "34px",
    "@media (max-width: 750px)": {
        fontSize: "24px",
    },
    "@media (max-width: 400px)": {
        fontSize: "20px",
    },
}

export const body1: SxProps<Theme> = {
    fontSize: "16px",
    "@media (max-width: 400px)": {
        fontSize: "14px",
    },
}
