import React from 'react';
import {loadingWrapper, pageWrapper} from '@/components/pages/main-page/MainPage.styles';
import {Box, CircularProgress} from '@mui/material';
import MealCardList from '@/components/common/MealCardList';
import {useQuery} from 'react-query';
import MealService from '@/services/meal.service';
import Head from 'next/head';

const MainPage = () => {

    const {data, isLoading, isError} = useQuery(
        'meals',
        MealService.getAllMeals
    );

    if (isLoading || isError) return (<>
        <Head>
            <title>Loading...</title>
            <link rel='shortcut icon' href='/chicken.png' />
        </Head>
        <Box sx={loadingWrapper}>
            <CircularProgress size={100}/>
        </Box>
    </>);

    return (<>
        <Head>
            <title>Amazing meal</title>
            <link rel='shortcut icon' href='/chicken.png' />
        </Head>
        <Box sx={pageWrapper}>
            <MealCardList list={data?.meals}/>
        </Box>
    </>);
};

export default MainPage;
