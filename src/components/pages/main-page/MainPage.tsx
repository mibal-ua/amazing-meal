import React from 'react';
import {loadingWrapper, pageWrapper} from '@/components/pages/main-page/MainPage.styles';
import {Box, CircularProgress} from '@mui/material';
import MealCardList from '@/components/common/MealCardList/MealCardList';
import {useQuery} from 'react-query';
import MealService from '@/services/meal.service';

const MainPage = () => {

    const {data, isLoading, isError} = useQuery(
        'meals',
        MealService.getAllMeals
    );

    if (isLoading || isError) return (
        <Box sx={loadingWrapper}>
            <CircularProgress size={100}/>
        </Box>
    );

    return (
        <Box sx={pageWrapper}>
            <MealCardList list={data?.meals}/>
        </Box>
    );
};

export default MainPage;
