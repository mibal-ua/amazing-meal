import React, { FC } from "react";
import { Box, CircularProgress } from "@mui/material";

import * as styles from "./DataGettingCases.styles";


const Error: FC<Record<string, never>> = () => (
    <Box sx={styles.centerWrapper}>
        <CircularProgress size={100} />
    </Box>
);

export default Error;
