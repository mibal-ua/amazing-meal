import React, {FC} from 'react';
import {Box, Typography} from '@mui/material';
import {
    blockLayout,
    imageStyle,
    textLayout,
    secondaryText
} from '@/components/common/MealInfo/MealInfo.styles';

export interface MealInfoProps {
    name: string,
    image: string,
    category: string,
    tags: string,
}

const MealInfo: FC<MealInfoProps> = ({name, image, category, tags}) => (
    <Box sx={blockLayout}>
        <Box component='img'
             sx={imageStyle}
             alt='photo'
             src={image}
        />
        <Box sx={textLayout}>
            <Typography variant='h3'>{name}</Typography>
            <Typography variant='h5' sx={secondaryText} >{tags.split(',').join(' | ')}</Typography>
            <Typography variant='h5' sx={secondaryText} >Category: {category}</Typography>
        </Box>

    </Box>
);

export default MealInfo;
