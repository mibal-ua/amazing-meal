import React, { FC } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

import * as styles from "@/components/common/MealInstructions/MealInstructions.styles";
import VideoPlayer from "@/components/common/VideoPlayer";

interface MealInstructionsProps {
    instructions: string;
    ingredients: string[];
    measures: string[];
    video: string;
}

const MealInstructions: FC<MealInstructionsProps> = ({
    instructions,
    ingredients,
    measures,
    video,
}) => {
    const filteredIngredients = ingredients.filter((val) => val);
    const filteredMeasures = measures.filter((val) => val);

    return (
        <Box sx={styles.layout}>
            <Box sx={styles.ingredients}>
                <Typography sx={styles.h4} variant="h4">Інгредієнти:</Typography>
                <List>
                    {filteredIngredients.map((value, index) => (
                        <ListItem key={value} sx={styles.body1}>
                            <ListItemText primaryTypographyProps={{sx: styles.body1}}
                                primary={`${index + 1}. ${value} (${filteredMeasures[index]})`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={styles.instructions}>
                <Box sx={styles.dataBlock}>
                    <Typography sx={styles.h4} variant="h4">Інструкція:</Typography>
                    <Typography sx={styles.body1} variant="body1">
                        {instructions}
                    </Typography>
                </Box>
                <Box sx={styles.dataBlock}>
                    <Typography sx={styles.h4} variant="h4">Відео-гайд</Typography>
                    <VideoPlayer source={video} />
                </Box>
            </Box>
        </Box>
    );
};

export default MealInstructions;
