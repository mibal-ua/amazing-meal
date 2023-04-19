import {Box, Typography} from "@mui/material";
import React, {FC} from "react";
import {Meal} from "@/components/pages/main-page/MainPage";
import MealCard from "@/components/common/mealCard/MealCard";
import {listLayout} from "@/components/common/MealCardList/MealCardList.styles";

export interface MealCardListLayoutProps {
    list: Meal[],
}


const MealCardList: FC<MealCardListLayoutProps> = ({list}) => {
    return (<>
        <Typography variant='h2'>Страви</Typography>
        <Box sx={listLayout}>
            {list.map(({id, name, category, area, image}) =>
                <MealCard key={id} name={name} category={category} area={area} image={image}
                          onClick={() => alert(name)}/>)}
        </Box>
    </>);
};

export default MealCardList;
