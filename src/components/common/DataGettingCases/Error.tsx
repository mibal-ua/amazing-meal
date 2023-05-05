import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

import * as styles from "./DataGettingCases.styles";

interface ErrorProps {
    message: string;
}

const Error: FC<ErrorProps> = ({ message }) => (
    <Box sx={styles.centerWrapper}>
        <Typography variant="h2">{message}</Typography>
    </Box>
);

export default Error;
