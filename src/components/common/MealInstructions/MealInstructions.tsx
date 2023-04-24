import React, {FC} from "react";
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";
import {block, layout, rightPart, leftPart} from "@/components/common/MealInstructions/MealInstructions.styles";
import VideoPlayer from "@/components/common/MealVideoGuide/VideoPlayer";

export interface MealInstructionsProps {
    instructions: string,
    ingredients: {
        strIngredient1: string,
        strIngredient2: string,
        strIngredient3: string,
        strIngredient4: string,
        strIngredient5: string,
        strIngredient6: string,
        strIngredient7: string,
        strIngredient8: string,
        strIngredient9: string,
        strIngredient10: string,
        strIngredient11: string,
        strIngredient12: string,
        strIngredient13: string,
        strIngredient14: string,
        strIngredient15: string,
        strIngredient16: string,
        strIngredient17: string,
        strIngredient18: string,
        strIngredient19: string,
        strIngredient20: string,
    },
    measures: {
        strMeasure1: string,
        strMeasure2: string,
        strMeasure3: string,
        strMeasure4: string,
        strMeasure5: string,
        strMeasure6: string,
        strMeasure7: string,
        strMeasure8: string,
        strMeasure9: string,
        strMeasure10: string,
        strMeasure11: string,
        strMeasure12: string,
        strMeasure13: string,
        strMeasure14: string,
        strMeasure15: string,
        strMeasure16: string,
        strMeasure17: string,
        strMeasure18: string,
        strMeasure19: string,
        strMeasure20: string,
    },
    video: string,
}

const MealInstructions: FC<MealInstructionsProps> = ({instructions, ingredients, measures, video}) => {
    const ingredientsVals = Object.values(ingredients).filter((val) => val);
    const measuresVals = Object.values(measures).filter((val) => val);

    return (
        <Box sx={layout}>
            <Box sx={leftPart}>
                <Typography variant='h4'>Інгредієнти:</Typography>
                <List>
                    {ingredientsVals.map((value, index) => (
                        <ListItem key={value}>
                            <ListItemText primary={`${index + 1}. ${value} (${measuresVals[index]})`}/>
                        </ListItem>))}
                </List>
            </Box>
            <Box sx={rightPart}>
                <Box sx={block}>
                    <Typography variant='h4'>Інструкція</Typography>
                    <Typography width='matching-parent' variant='body1'>{instructions}</Typography>
                </Box>
                <Box sx={block}>
                    <Typography variant='h4'>Відео-гайд</Typography>
                    <VideoPlayer source={video}/>
                </Box>
            </Box>
        </Box>
    );
};

export default MealInstructions;
