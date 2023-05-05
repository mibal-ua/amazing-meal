import React, { ChangeEvent, FC, useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";

import MealCard from "@/components/common/MealCard/MealCard";
import * as styles from "@/components/common/MealCardList/MealCardList.styles";
import { Meal } from "@/types/services";

interface MealCardListLayoutProps {
    list: Meal[] | undefined;
}

const PAGE_ELEMENT_COUNT = 10;

const MealCardList: FC<MealCardListLayoutProps> = ({ list }) => {
    if (!list) return (<>
        <Box sx={styles.upperLayout}>
            <Typography variant="h2">Страви</Typography>
        </Box>
        <Box sx={styles.listLayout}>
            <Typography variant="h4">Пустий список(</Typography>
        </Box>
    </>);

    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = Math.ceil(list.length / PAGE_ELEMENT_COUNT);

    const start = PAGE_ELEMENT_COUNT * (currentPage - 1);
    const end = start + PAGE_ELEMENT_COUNT;
    return (<>
        <Box sx={styles.upperLayout}>
            <Typography variant="h2">Страви</Typography>
            <Pagination
                color="primary"
                count={pageCount}
                page={currentPage}
                onChange={(event: ChangeEvent<unknown>, number: number) =>
                    setCurrentPage(number)}
                hidePrevButton hideNextButton />
        </Box>
        <Box sx={styles.listLayout}>
            {list
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
                ))}
        </Box>
    </>);
};

export default MealCardList;
