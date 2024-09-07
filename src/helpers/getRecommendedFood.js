import axios from 'axios';

export const getRecommendedFood = async () => {
  try {
    const { data } = await axios.get('/api/user/recommended-food', {
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
