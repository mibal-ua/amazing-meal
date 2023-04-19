import React from 'react';
import {pageWrapper} from "@/components/pages/main-page/MainPage.styles";
import {Box} from "@mui/material";
import MealCardList from "@/components/common/MealCardList/MealCardList";

export class Meal {
    id: string;
    name: string;
    category: string;
    area: string;
    image: string;

    constructor(id: string, name: string, category: string, area: string, image: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.area = area;
        this.image = image;
    }
}

const meals = [
    {
        id: '1234',
        name: 'name',
        category: "Beef",
        area: "British",
        image: 'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    },
    {
        id: '123443214',
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
].map(({id, name, category, area, image}) =>
    new Meal(id, name, category, area, image));

const MainPage = () => (
    <Box sx={pageWrapper}>
        <MealCardList list={meals}/>
    </Box>
);

export default MainPage;
