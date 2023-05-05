import React from "react";
import { useQuery } from "react-query";
import { Box, CircularProgress, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";

import MealInfo from "@/components/common/MealInfo";
import MealInstructions from "@/components/common/MealInstructions";
import {
    loadingWrapper,
    pageWrapper,
} from "@/components/pages/meal-page/MealPage.styles";
import MealService from "@/services/meal.service";
import { Meal } from "@/types/services";

const sliceObjIntoArrays = (srcObj: object, length: number) => {
    const src: string[] = Object.values(srcObj);
    return {
        ingredients: src.slice(0, length),
        measures: src.slice(length, length * 2),
    };
};

const MealPage = () => {
    const router = useRouter();
    const mealId = router.query.mealId as string;

    const { data, isLoading, isError } = useQuery(["meal", mealId], () =>
        MealService.getCurrentMeal(mealId)
    );

    if (isLoading || isError)
        return (
            <>
                <Head>
                    <title>Loading...</title>
                    <link rel="shortcut icon" href="/chicken.png" />
                </Head>
                <Box sx={loadingWrapper}>
                    <CircularProgress size={100} />
                </Box>
            </>
        );

    const meal = data?.meals?.[0] as Meal;
    if (!meal)
        return (
            <>
                <Head>
                    <title>Oops(</title>
                    <link rel="shortcut icon" href="/chicken.png" />
                </Head>
                <Box sx={pageWrapper}>
                    <Typography variant="h4" align="center">
                        Такої їжі немає(
                    </Typography>
                </Box>
            </>
        );

    const {
        idMeal,
        strMeal,
        strArea,
        strCategory,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
        ...rest
    } = meal;
    const { ingredients, measures } = sliceObjIntoArrays(rest, 20);
    return (
        <>
            <Head>
                <title>{strMeal}</title>
                <link rel="shortcut icon" href="/chicken.png" />
            </Head>
            <Box sx={pageWrapper}>
                <MealInfo
                    key={idMeal}
                    name={strMeal}
                    image={strMealThumb}
                    category={strCategory}
                    tags={strTags}
                />
                <MealInstructions
                    instructions={strInstructions}
                    ingredients={ingredients}
                    measures={measures}
                    video={strYoutube}
                />
            </Box>
        </>
    );
};

export default MealPage;
