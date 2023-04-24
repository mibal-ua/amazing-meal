import React, {FC} from "react";
import {Box, Typography} from "@mui/material";
import {layout} from "@/components/common/MealInfo/MealInfo.styles";

export interface MealInfoProps {
    name: string,
    image: string,
    category: string,
    tags: string,
}

const MealInfo: FC<MealInfoProps> = ({name, image, category, tags}) => (
    <Box sx={layout}>
        <Box component="img"
             sx={{
                 height: 280,
                 width: 280,
                 borderRadius: '6px',
             }}
             alt='photo'
             src={image}
        />
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
        }}>
            <Typography variant='h2'>{name}</Typography>
            <Typography variant='h4'>Category: {category}</Typography>
            <Typography variant='h5'>{tags.split(',').join(' | ')}</Typography>
        </Box>

    </Box>
);

export default MealInfo;
