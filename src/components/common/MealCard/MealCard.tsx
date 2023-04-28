import {CardActionArea, Typography} from '@mui/material';
import React, {FC} from 'react';
import {card} from './MealCard.styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface MealCardProps {
    name: string;
    category: string;
    image: string;
    tags: string;
    // @ts-ignore
    onClick: fn;
}

const MealCard: FC<MealCardProps> = ({name, category, tags, image, onClick}) => (
    <Card sx={card} onClick={onClick}>
        <CardActionArea>
            <CardMedia
                component='img'
                height='140'
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Category: {category}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {tags?.split(',').join(' | ')}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

export default MealCard;
