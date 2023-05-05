import React, { FC } from "react";
import { CardActionArea, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import * as styles from "./MealCard.styles";

interface MealCardProps {
    name: string;
    category: string;
    image: string;
    tags: string;
    link: string;
}

const MealCard: FC<MealCardProps> = ({ name, category, tags, image, link }) => (
    <Card sx={styles.card}>
        <CardActionArea href={link}>
            <CardMedia sx={styles.image}
                component="img"
                image={image}
                alt={name} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Category: {category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {tags?.split(",").join(" | ")}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

export default MealCard;
