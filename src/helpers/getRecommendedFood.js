import { axiosAuth } from './network';

export const getRecommendedFood = async () => {
  try {
    const { data } = await axiosAuth.get('/user/recomended-food', {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
