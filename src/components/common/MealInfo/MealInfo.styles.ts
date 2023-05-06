import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export const main: SxProps<Theme> = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px",
    borderRadius: "10px",
    boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.1)",
    display: "flex",
    gap: "32px",
    "@media (max-width: 750px)": {
        gap: "24px",
        padding: "24px",
    },
    "@media (max-width: 500px)": {
        gap: "12px",
        padding: "16px",
    },
};

export const image: SxProps<Theme> = {
    maxHeight: "200px",
    maxWidth: "200px",
    borderRadius: "6px",
    "@media (max-width: 750px)": {
        maxHeight: "150px",
        maxWidth: "150px",
    },
    "@media (max-width: 500px)": {
        maxHeight: "100px",
        maxWidth: "100px",
    },
    "@media (max-width: 400px)": {
        maxHeight: "80px",
        maxWidth: "80px",
    },
};

export const textLayout: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    "@media (max-width: 750px)": {
        gap: "8px",
    },
    "@media (max-width: 500px)": {
        gap: "4px",
    },
    "@media (max-width: 400px)": {
        gap: "2px",
    },
};

export const h3: SxProps<Theme> = {
    fontSize: "48px",
    color: "#323232",
    "@media (max-width: 750px)": {
        fontSize: "34px",
    },
    "@media (max-width: 500px)": {
        fontSize: "32px",
    },
    "@media (max-width: 400px)": {
        fontSize: "24px",
    },
};

export const h5: SxProps<Theme> = {
    fontSize: "24px",
    "@media (max-width: 750px)": {
        fontSize: "17px",
    },
    "@media (max-width: 400px)": {
        fontSize: "14px",
    },
};
