import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// import { updateGoal } from '../../redux/Auth/authOperations';
import { selectUser } from '../../redux/Auth/authSelectors';
import HeaderOverlay from './HeaderOverlay';

import {
  ModalWrapper,
  Modal,
  ModalTitle,
  ModalText,
  ModalForm,
  TargetImg,
  ImgBorder,
  TargetWrapper,
  TargetText,
  ModalBtn,
  CloseBtn,
  CancelBtn,
} from './TargetModal.styled';

import loseFatMen from '../../images/icons/lose-fat-image-men.svg';
import maintainMen from '../../images/icons/maintain-image-men.svg';
import maintainGirl from '../../images/icons/maintain-image-girl.svg';
import loseFatGirl from '../../images/icons/lose-fat-image-girl.svg';
import muscle from '../../images/icons/gain-muscle.svg';
import close from '../../images/icons/close-circle.svg';

export default function TargetModal({ onCloseModal }) {
  // const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userGender = user.gender;
  const currentUserGoal = user.goal;
  const [userGoal, setUserGoal] = useState(currentUserGoal);

  let loseFatIcon = userGender === 'Female' ? loseFatGirl : loseFatMen;
  let maintainIcon = userGender === 'Female' ? maintainGirl : maintainMen;
  let muscleIcon = muscle;

  const newLosefatGoal = () => setUserGoal('Lose fat');
  const newMaintainGoal = () => setUserGoal('Maintain');
  const newGailMuscleGoal = () => setUserGoal('Gain muscle');

  const handleNewUserGoal = event => {
    event.preventDefault();
    // dispatch(updateGoal(userGoal));
    onCloseModal();
  };

  const closeBtnHandler = () => {
    console.log(onCloseModal());
    onCloseModal();
  };

  return (
    <HeaderOverlay onCloseOverlay={onCloseModal}>
      <ModalWrapper>
        <CloseBtn onClick={closeBtnHandler}>
          <img src={close} alt="close" width={16} onClick={closeBtnHandler} />
        </CloseBtn>
        <Modal onClick={e => e.stopPropagation()}>
          <ModalTitle>Target selection</ModalTitle>
          <ModalText>
            The service will adjust your calorie intake to your goal
          </ModalText>
          <ModalForm onSubmit={handleNewUserGoal}>
            <ul>
              <TargetWrapper onClick={newLosefatGoal}>
                <ImgBorder
                  style={{
                    border:
                      userGoal === 'Lose fat'
                        ? '2px solid #B6C3FF'
                        : '1px solid #B6B6B6',
                  }}
                >
                  <TargetImg src={loseFatIcon} alt="Lose fat" />
                </ImgBorder>
                <TargetText
                  style={{
                    color: userGoal === 'Lose fat' ? '#B6C3FF' : '#B6B6B6',
                  }}
                >
                  Lose fat
                </TargetText>
              </TargetWrapper>
              <TargetWrapper onClick={newMaintainGoal}>
                <ImgBorder
                  style={{
                    border:
                      userGoal === 'Maintain'
                        ? '2px solid #B6C3FF'
                        : '1px solid #B6B6B6',
                  }}
                >
                  <TargetImg src={maintainIcon} alt="Maintain" />
                </ImgBorder>
                <TargetText
                  style={{
                    color: userGoal === 'Maintain' ? '#B6C3FF' : '#B6B6B6',
                  }}
                >
                  Maintain
                </TargetText>
              </TargetWrapper>
              <TargetWrapper onClick={newGailMuscleGoal}>
                <ImgBorder
                  style={{
                    border:
                      userGoal === 'Gain muscle'
                        ? '2px solid #B6C3FF'
                        : '1px solid #B6B6B6',
                  }}
                >
                  <TargetImg src={muscleIcon} alt="Gain muscle" />
                </ImgBorder>
                <TargetText
                  style={{
                    color: userGoal === 'Gain muscle' ? '#B6C3FF' : '#B6B6B6',
                  }}
                >
                  Gain muscle
                </TargetText>
              </TargetWrapper>
            </ul>
            <ModalBtn type="submit">Confirm</ModalBtn>
          </ModalForm>
        </Modal>
        <CancelBtn onClick={closeBtnHandler}>Cancel</CancelBtn>
      </ModalWrapper>
    </HeaderOverlay>
  );
}

TargetModal.propTypes = {
  onCloseOverlay: PropTypes.func.isRequired,
};
