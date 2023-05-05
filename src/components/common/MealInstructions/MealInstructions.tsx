import React, {FC} from 'react';
import {Box, List, ListItem, ListItemText, Typography} from '@mui/material';
import {block, layout, rightPart, leftPart} from '@/components/common/MealInstructions/MealInstructions.styles';
import VideoPlayer from '@/components/common/VideoPlayer';

interface MealInstructionsProps {
    instructions: string,
    ingredients: string[],
    measures: string[],
    video: string,
}

const MealInstructions: FC<MealInstructionsProps> = ({instructions, ingredients, measures, video}) => {
    const ingredientsValues = ingredients.filter((val) => val);
    const measuresValues = measures.filter((val) => val);

    return (
        <Box sx={layout}>
            <Box sx={leftPart}>
                <Typography variant='h4'>Інгредієнти:</Typography>
                <List>
                    {ingredientsValues.map((value, index) => (
                        <ListItem key={value}>
                            <ListItemText primary={`${index + 1}. ${value} (${measuresValues[index]})`}/>
                        </ListItem>))}
                </List>
            </Box>
            <Box sx={rightPart}>
                <Box sx={block}>
                    <Typography variant='h4'>Інструкція:</Typography>
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
