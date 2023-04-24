import React from 'react';
import {Box, CircularProgress} from "@mui/material";
import {useQuery} from "react-query";
import MealService from "@/services/meal.service";
import {useRouter} from "next/router";
import MealInfo from "@/components/common/MealInfo/MealInfo";
import {loadingWrapper, pageWrapper} from "@/components/pages/meal-page/MealPage.styles";
import MealInstructions from "@/components/common/MealInstructions/MealInstructions";

interface MealFullInfo {
    idMeal: string,
    strMeal: string,
    strCategory: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strIngredient16: string,
    strIngredient17: string,
    strIngredient18: string,
    strIngredient19: string,
    strIngredient20: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11: string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string,
    strMeasure16: string,
    strMeasure17: string,
    strMeasure18: string,
    strMeasure19: string,
    strMeasure20: string,
}

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

    const {
        idMeal,
        strMeal,
        strCategory,
        strInstructions,
        strMealThumb,
        strTags,
        strYoutube,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
        strMeasure16,
        strMeasure17,
        strMeasure18,
        strMeasure19,
        strMeasure20,
    } = data?.meals[0] as MealFullInfo;

    const ingredients = {
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
    };
    const measures = {
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
        strMeasure16,
        strMeasure17,
        strMeasure18,
        strMeasure19,
        strMeasure20,
    };
    return (
        <Box sx={pageWrapper}>
            <MealInfo key={idMeal} name={strMeal} image={strMealThumb} category={strCategory} tags={strTags}/>
            <MealInstructions instructions={strInstructions} ingredients={ingredients} measures={measures}
                              video={strYoutube}/>
        </Box>
    );
};

export default MealPage;
