import {Box, Typography} from "@mui/material";
import React, {FC, useState} from "react";
import MealCard from "@/components/common/MealCard/MealCard";
import {listLayout, upperLayout} from "@/components/common/MealCardList/MealCardList.styles";
import ListController from "@/components/common/ListController/ListController";
import {Meal} from "@/types/services";

interface MealCardListLayoutProps {
    list: Meal[] | undefined,
}

const PAGE_ELEMENT_COUNT = 10;

const MealCardList: FC<MealCardListLayoutProps> = ({list}) => {
    if (!list) {
        return (<>
            <Typography variant='h2'>Страви</Typography>
            <Box sx={listLayout}>
                <Typography variant='h4'>Пустий список(</Typography>
            </Box>
        </>);
    }
    const [state, setState] = useState(1);

    const pageCount = Math.ceil(list.length / PAGE_ELEMENT_COUNT);

    const start = PAGE_ELEMENT_COUNT * (state - 1);
    const end = start + PAGE_ELEMENT_COUNT;
    return (<>
        <Box sx={upperLayout}>
            <Typography variant='h2'>Страви</Typography>
            <ListController pageCount={pageCount} current={state} onChange={(number: number) => setState(number)}/>
        </Box>
        <Box sx={listLayout}>
            {list.slice(start, end)
                .map(({idMeal, strMeal, strCategory, strMealThumb, strTags}, index) =>
                    <MealCard key={idMeal} name={strMeal} category={strCategory} image={strMealThumb}
                              tags={strTags} onClick={() => window.open(`/${idMeal}`)}/>)}
        </Box>
    </>);
};

export default MealCardList;
