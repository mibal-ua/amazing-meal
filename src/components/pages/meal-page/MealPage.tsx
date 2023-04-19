import React from 'react';
import {loadingWrapper, pageWrapper} from "@/components/pages/main-page/MainPage.styles";
import {Box, CircularProgress} from "@mui/material";
import MealCardList from "@/components/common/MealCardList/MealCardList";
import {useQuery} from "react-query";
import MealService from "@/services/meal.service";
import {useRouter} from "next/router";

const MealPage = () => {

    const router = useRouter();
    const mealId = router.query.mealId as string;

    const {data, isLoading, isError} = useQuery(
        ['meal', mealId],
        () => MealService.getCurrentMeal(mealId),
    );

    if (isLoading || isError) return (
        <Box sx={loadingWrapper}>
            <CircularProgress size={100}/>
        </Box>
    );

    return (
        <Box sx={pageWrapper}>
            {data?.meals[0]?.strMeal}
        </Box>
    );
};

export default MealPage;
