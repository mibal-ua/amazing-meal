import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export const pageWrapper: SxProps<Theme> = {
    paddingTop: "32px",
    paddingLeft: "32px",
    paddingRight: "32px"
};

export const loadingWrapper: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh"
};
