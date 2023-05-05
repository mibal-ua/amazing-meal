import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export const pageWrapper: SxProps<Theme> = {
    paddingTop: "16px",
    paddingLeft: "128px",
    paddingRight: "128px",
    paddingDown: "32px",
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
