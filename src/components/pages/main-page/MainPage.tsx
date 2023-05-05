import React from "react";
import { useQuery } from "react-query";
import { Box } from "@mui/material";

import Error from "@/components/common/DataGettingCases/Error";
import Loading from "@/components/common/DataGettingCases/Loading";
import MealCardList from "@/components/common/MealCardList";
import * as styles from "@/components/pages/main-page/MainPage.styles";
import MealService from "@/services/meal.service";

import PageMetadata from "../../common/PageMetadata";

const MainPage = () => {

    const { data, isLoading, isError } = useQuery(
        "meals",
        MealService.getAllMeals,
        {
            refetchOnWindowFocus: false
        }
    );

    if (isLoading) return (<>
        <PageMetadata title="Загрузка..." />
        <Loading />
    </>);

    if (isError || !data) return (<>
        <PageMetadata title="Помилка" />
        <Error message="Їжу з'їли((" />
    </>);

    return (<>
        <PageMetadata title="Неймовірна їжа" />
        <Box sx={styles.pageWrapper}>
            <MealCardList list={data.meals} />
        </Box>
    </>);
};

export default MainPage;
