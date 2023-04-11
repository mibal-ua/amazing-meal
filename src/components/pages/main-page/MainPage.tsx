import React from 'react';
import * as styles from './MainPage.styles';
import {Box} from "@mui/material";

import MealCard from "@/components/common/mealCard/MealCard";

const meals = [
    {
        id: '1234',
        name: 'name',
        category: "Beef",
        area: "British",
        image: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    },
    {
        id: '213423op5',
        name: 'name2',
        category: "Beef",
        area: "British",
        image: 'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
    },
    {
        id: '32421432432',
        name: 'name3',
        category: "Beef",
        area: "British",
        image: 'https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg',
    },
    {
        id: '21344242',
        name: 'name4',
        category: "Beef",
        area: "British",
        image: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    },
    {
        id: '1233241',
        name: 'name5',
        category: "Beef",
        area: "British",
        image: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    },
];

const MainPage = () => {

    return (
        <Box sx={styles.pageWrapper}>
            {meals.map(({id, name, category, area, image}) =>
                <MealCard key={id} name={name} category={category} area={area} image={image}
                          onClick={() => alert(name)}/>)}
        </Box>
    );
};

export default MainPage;
