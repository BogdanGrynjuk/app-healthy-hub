import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRecommendedFood } from 'helpers/getRecommendedFood';
import { randomizeFood } from 'helpers/randomizeFood';

import { Item, List } from './ListRecommendedFood.styled';
import CardRecommendedProduct from 'components/CardRecommendedProduct';

const RecommendedFoodList = ({ itemLimit }) => {
  const [arrayForRender, setArrayForRender] = useState([]);

  useEffect(() => {
    getRecommendedFood()
      .then(response => {
        setArrayForRender(randomizeFood(response, itemLimit));
      })
      .catch(err => console.error(err));
  }, [itemLimit]);

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
