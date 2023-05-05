import React from "react";
import { Box, Typography } from "@mui/material";

import MealCard from "@/components/common/MealCard";
import * as styles from "@/components/common/MealCardList/MealCardList.styles";
import { Meal } from "@/types/services";

const PAGE_ELEMENT_COUNT = 10;

const usePageNumber = (list: Meal[] | undefined, currentPage: number) => {
    if (!list) return (
        {
            data: <>
                <Box sx={styles.upperLayout}>
                    <Typography variant="h2">Страви</Typography>
                </Box>
                <Box sx={styles.listLayout}>
                    <Typography variant="h4">Пустий список(</Typography>
                </Box>
            </>,
            pageCount: 0
        });

    const pageCount = Math.ceil(list.length / PAGE_ELEMENT_COUNT);

    const start = PAGE_ELEMENT_COUNT * (currentPage - 1);
    const end = start + PAGE_ELEMENT_COUNT;

    const data = list
        .slice(start, end)
        .map(({ idMeal, strMeal, strCategory, strMealThumb, strTags }) => (
            <MealCard
                key={idMeal}
                name={strMeal}
                category={strCategory}
                image={strMealThumb}
                tags={strTags}
                link={`/${idMeal}`}
            />
        ));

    return { data, pageCount };
};

export default usePageNumber;
