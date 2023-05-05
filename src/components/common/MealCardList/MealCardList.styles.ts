import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

export const listLayout: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "16px",
    paddingTop: "16px",
    paddingBottom: "16px"
};

export const upperLayout: SxProps<Theme> = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
};
