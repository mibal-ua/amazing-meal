import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export const pageWrapper: SxProps<Theme> = {
    padding: "16px 128px 32px 128px",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
};

export const loadingWrapper: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh"
};
