import {Box, Typography} from "@mui/material";
import React, {FC} from "react";
import MealCard from "@/components/common/mealCard/MealCard";
import {listLayout} from "@/components/common/MealCardList/MealCardList.styles";

export interface MealCardListLayoutProps {
    list: {
        idMeal: string,
        strMeal: string,
        strCategory: string,
        strMealThumb: string,
        strTags: string
    }[] | undefined
}

const MealCardList: FC<MealCardListLayoutProps> = ({list}) => {
    return (<>
        <Typography variant='h2'>Страви</Typography>
        <Box sx={listLayout}>
            {list?.map(({idMeal, strMeal, strCategory, strMealThumb, strTags}) =>
                <MealCard key={idMeal} name={strMeal} category={strCategory} image={strMealThumb} tags={strTags}
                          onClick={() => alert(name)}/>)}
        </Box>
    </>);
};

export default MealCardList;
