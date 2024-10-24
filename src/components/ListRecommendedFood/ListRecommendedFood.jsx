import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { randomizeFood } from 'helpers/randomizeFood';

import { Item, List } from './ListRecommendedFood.styled';
import CardRecommendedProduct from 'components/CardRecommendedProduct';
import { selectRecommendedFood } from 'redux/RecommendedFood/recommendedFoodSelectors';
import { useSelector } from 'react-redux';

const RecommendedFoodList = ({ itemLimit }) => {
  const [arrayForRender, setArrayForRender] = useState([]);
  const arrayOfRecommendedFood = useSelector(selectRecommendedFood);

  useEffect(() => {
    setArrayForRender(randomizeFood(arrayOfRecommendedFood, itemLimit));
  }, [arrayOfRecommendedFood, itemLimit]);

  return (
    <List>
      {arrayForRender.map(({ img, name, amount, calories }) => (
        <Item key={`product-item_${name}`}>
          <CardRecommendedProduct
            img={img}
            name={name}
            amount={amount}
            calories={calories}
          />
        </Item>
      ))}
    </List>
  );
};
RecommendedFoodList.propTypes = {
  itemLimit: PropTypes.number.isRequired,
};

export default RecommendedFoodList;
