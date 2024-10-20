import { axiosAuth } from './network';

export const getRecommendedFood = async () => {
  try {
    const { data } = await axiosAuth.get('/user/recomended-food');
    return data;
  } catch (err) {
    console.log(err);
  }
};
