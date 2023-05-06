import React, { FC } from "react";
import { Box, Typography } from "@mui/material";

import * as styles from "@/components/common/MealInfo/MealInfo.styles";

interface MealInfoProps {
    name: string;
    image: string;
    category: string;
    tags: string;
}

const MealInfo: FC<MealInfoProps> = ({ name, image, category, tags }) => (
    <Box sx={styles.blockLayout}>
        <Box component="img" sx={styles.imageStyle} alt="photo" src={image} />
        <Box sx={styles.textLayout}>
            <Typography variant="h3" sx={styles.h3}>{name}</Typography>
            <Typography variant="h5" sx={styles.h5}>
                {tags?.split(",").join(" | ")}
            </Typography>
            <Typography variant="h5" sx={styles.h5}>
                Category: {category}
            </Typography>
        </Box>
    </Box>
);

export default MealInfo;
