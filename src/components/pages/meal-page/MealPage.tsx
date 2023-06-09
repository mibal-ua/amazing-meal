import React from "react";
import { useQuery } from "react-query";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

import Error from "@/components/common/DataGettingCases/Error";
import Loading from "@/components/common/DataGettingCases/Loading";
import MealInfo from "@/components/common/MealInfo";
import MealInstructions from "@/components/common/MealInstructions";
import PageMetadata from "@/components/common/PageMetadata";
import * as styles from "@/components/pages/meal-page/MealPage.styles";
import MealService from "@/services/meal.service";
import { Utils } from "@/utils/utils";

const MealPage = () => {
    const router = useRouter();
    const mealId = router.query.mealId as string;

    const { data, isLoading, isError } = useQuery(
        ["meal", mealId],
        () => MealService.getCurrentMeal(mealId),
        {
            refetchOnWindowFocus: false
        }
    );

    if (isLoading) return (<>
        <PageMetadata title="Загрузка..." />
        <Loading />
    </>);

    const meal = data?.meals?.[0];
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
    const { ingredients, measures } = Utils.sliceObjIntoArrays(rest, 20);

    return (<>
        <PageMetadata title={strMeal} />
        <Box sx={styles.pageWrapper}>
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
