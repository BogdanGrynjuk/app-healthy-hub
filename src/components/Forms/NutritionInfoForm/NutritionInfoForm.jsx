import PropTypes from 'prop-types';

import {
  ButtonRemove,
  Container,
  ErrorMsg,
  Input,
  InputWrapper,
  Label,
} from './NutritionInfoForm.styled';

import trash1x from 'images/trash.png';
import trash2x from 'images/trash@2x.png';

const NutritionInfoForm = ({
  isEditMode,
  indexForm,
  values,
  errors,
  touched,
  handleRemove,
}) => {
  const hasRemoveButton = values.productList.length > 1;

  return (
    <Container $hasRemoveButton={hasRemoveButton}>
      <InputWrapper>
        {isEditMode && (
          <Label htmlFor={`productList.${indexForm}.mealName`}>
            Product or dish name
          </Label>
        )}
        <Input
          type="text"
          id={`productList.${indexForm}.mealName`}
          name={`productList.${indexForm}.mealName`}
          placeholder="The name of the product or dish"
          value={values?.productList?.[indexForm]?.mealName}
          $error={
            touched?.productList?.[indexForm]?.mealName &&
            errors?.productList?.[indexForm]?.mealName
          }
        />
        <ErrorMsg name={`productList.${indexForm}.mealName`} component="div" />
      </InputWrapper>

      <InputWrapper>
        {isEditMode && (
          <Label htmlFor={`productList.${indexForm}.carbonohidrates`}>
            Carb.
          </Label>
        )}
        <Input
          type="number"
          id={`productList.${indexForm}.carbonohidrates`}
          name={`productList.${indexForm}.carbonohidrates`}
          placeholder="Carbohydrates"
          value={values?.productList?.[indexForm]?.carbonohidrates}
          $error={
            touched?.productList?.[indexForm]?.carbonohidrates &&
            errors?.productList?.[indexForm]?.carbonohidrates
          }
        />
        <ErrorMsg
          name={`productList.${indexForm}.carbonohidrates`}
          component="div"
        />
      </InputWrapper>

      <InputWrapper>
        {isEditMode && (
          <Label htmlFor={`productList.${indexForm}.protein`}>Protein</Label>
        )}
        <Input
          type="number"
          id={`productList.${indexForm}.protein`}
          name={`productList.${indexForm}.protein`}
          placeholder="Protein"
          value={values?.productList?.[indexForm]?.protein}
          $error={
            touched?.productList?.[indexForm]?.protein &&
            errors?.productList?.[indexForm]?.protein
          }
        />
        <ErrorMsg name={`productList.${indexForm}.protein`} component="div" />
      </InputWrapper>

      <InputWrapper>
        {isEditMode && (
          <Label htmlFor={`productList.${indexForm}.fat`}>Fat</Label>
        )}
        <Input
          type="number"
          id={`productList.${indexForm}.fat`}
          name={`productList.${indexForm}.fat`}
          placeholder="Fat"
          value={values?.productList?.[indexForm]?.fat}
          $error={
            touched?.productList?.[indexForm]?.fat &&
            errors?.productList?.[indexForm]?.fat
          }
        />
        <ErrorMsg name={`productList.${indexForm}.fat`} component="div" />
      </InputWrapper>

      <InputWrapper>
        {isEditMode && (
          <Label htmlFor={`productList.${indexForm}.calories`}>Calories</Label>
        )}
        <Input
          type="number"
          id={`productList.${indexForm}.calories`}
          name={`productList.${indexForm}.calories`}
          placeholder="Calories"
          value={values?.productList?.[indexForm]?.calories}
          $error={
            touched?.productList?.[indexForm]?.calories &&
            errors?.productList?.[indexForm]?.calories
          }
        />
        <ErrorMsg name={`productList.${indexForm}.calories`} component="div" />
      </InputWrapper>

      {hasRemoveButton && (
        <ButtonRemove type="button" onClick={handleRemove}>
          <img
            srcSet={`${trash1x} 1x, ${trash2x} 2x`}
            width={20}
            height={20}
            src={trash1x}
            alt="Trash"
          />
        </ButtonRemove>
      )}
    </Container>
  );
};

NutritionInfoForm.propTypes = {
  isEditMode: PropTypes.bool,
  indexForm: PropTypes.number.isRequired,
  values: PropTypes.shape({
    productList: PropTypes.arrayOf(
      PropTypes.shape({
        mealName: PropTypes.string.isRequired,
        carbonohidrates: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
        ]),
        protein: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        fat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        calories: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      })
    ).isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    productList: PropTypes.arrayOf(
      PropTypes.shape({
        mealName: PropTypes.string,
        carbonohidrates: PropTypes.string,
        protein: PropTypes.string,
        fat: PropTypes.string,
        calories: PropTypes.string,
      })
    ),
  }).isRequired,
  touched: PropTypes.shape({
    productList: PropTypes.arrayOf(
      PropTypes.shape({
        mealName: PropTypes.bool,
        carbonohidrates: PropTypes.bool,
        protein: PropTypes.bool,
        fat: PropTypes.bool,
        calories: PropTypes.bool,
      })
    ),
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default NutritionInfoForm;
