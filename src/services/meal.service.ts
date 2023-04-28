import instance from '@/services/instance';
import {getAllMealsDTO, getCurrentMealDTO} from '@/types/services';

class Meal {

    getAllMeals = async (): Promise<getAllMealsDTO> => {
        const res = await instance.get('/search.php?f=b');
        return res.data;
    };

    getCurrentMeal = async (id: string):Promise<getCurrentMealDTO> => {
        const res = await instance.get(`/lookup.php?i=${id}`);
        return res.data;
    };
}

const MealService = new Meal();

export default MealService;
