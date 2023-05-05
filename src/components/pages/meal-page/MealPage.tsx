import React from "react";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

import Error from "@/components/common/DataGettingCases/Error";
import Loading from "@/components/common/DataGettingCases/Loading";
import MealInfo from "@/components/common/MealInfo";
import MealInstructions from "@/components/common/MealInstructions";
import PageMetadata from "@/components/common/PageMetadata";
import { pageWrapper } from "@/components/pages/meal-page/MealPage.styles";
import MealService from "@/services/meal.service";
import { Meal } from "@/types/services";

const sliceObjIntoArrays = (srcObj: object, length: number) => {
    const src: string[] = Object.values(srcObj);
    return {
        ingredients: src.slice(0, length),
        measures: src.slice(length, length * 2)
    };
};

const MealPage = () => {
    const router = useRouter();
    const mealId = router.query.mealId as string;

    const { data, isLoading, isError } = useQuery(["meal", mealId], () =>
        MealService.getCurrentMeal(mealId)
    );

    if (isLoading) return (<>
        <PageMetadata title="Загрузка..." />
        <Loading />
    </>);

    const meal = data?.meals?.[0] as Meal;
    if (isError || !meal) return (<>
        <PageMetadata title="Помилка" />
        <Error message="Їжу з'їли((" />
    </>);

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
    return (<>
        <PageMetadata title={strMeal} />
        <Box sx={pageWrapper}>
            <MealInfo
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
    </>);
};

export default MealPage;
