import {CardActionArea, Typography} from "@mui/material";
import React, {FC} from "react";
import * as styles from './MealCard.styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export interface MealCardProps {
    name: string;
    category: string;
    area: string;
    image: string;
    // @ts-ignore
    onClick: fn;
}

const MealCard: FC<MealCardProps> = ({name, category, area, image, onClick}) => {
    return (
        <Card sx={styles.card} onClick={onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Category: {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Area: {area}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MealCard;
