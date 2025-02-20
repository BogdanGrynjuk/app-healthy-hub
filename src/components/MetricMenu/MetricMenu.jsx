import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import {
  IconArrow,
  IconContainer,
  IconEdit,
  InfoBlockMetricMenu,
  TextContainer,
  TitleMetricMenu,
  Value,
  IconMetric,
  Unit,
  WrapperMetricMenu,
} from './MetricMenu.styled';

import { getGoalIcon } from 'helpers/getGoalIcon';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/Auth/authSelectors';

import imageWeightSrc from 'images/icons/weight-image.svg';
import imageArrowDownSrc from 'images/icons/arrow-down.svg';
import imageEditSrc from 'images/icons/edit.svg';

import ModalChangeGoal from 'components/Modals/ModalChangeGoal';
import ModalChangeWeight from 'components/Modals/ModalChangeWeight';

const MetricMenu = ({ metricName, onOpenInnerModal, onCloseInnerModal }) => {
  const [isOpenModalTarget, setIsOpenModalTarget] = useState(false);
  const [isOpenModalWeight, setIsOpenModalWeight] = useState(false);
  const { gender, goal, weight } = useSelector(selectUser);

  const goalIconSrc = useMemo(() => getGoalIcon(gender, goal), [gender, goal]);

  const metricConfig = {
    goal: {
      icon: goalIconSrc,
      title: 'Goal',
      value: goal || 'No goal yet',
      unit: '',
    },
    weight: {
      icon: imageWeightSrc,
      title: 'Weight',
      value: weight || 0,
      unit: 'kg',
    },
  };

  const metric = metricConfig[metricName];

  const openModal = useCallback(() => {
    onOpenInnerModal?.();
    if (metricName === 'weight') {
      setIsOpenModalWeight(true);
    } else {
      setIsOpenModalTarget(true);
    }
  }, [metricName, onOpenInnerModal]);

  const closeModal = useCallback(() => {
    onCloseInnerModal?.();
    if (metricName === 'weight') {
      setIsOpenModalWeight(false);
    } else {
      setIsOpenModalTarget(false);
    }
  }, [metricName, onCloseInnerModal]);

  return (
    <>
      <WrapperMetricMenu type="button" onClick={openModal}>
        <IconContainer>
          <IconMetric src={metric.icon} alt={metricName} />
        </IconContainer>
        <TextContainer>
          <TitleMetricMenu>{metric.title}</TitleMetricMenu>
          <InfoBlockMetricMenu>
            <Value>
              {metric.value} {metric.unit && <Unit>{metric.unit}</Unit>}
            </Value>
            {metric.title === 'Weight' ? (
              <IconEdit src={imageEditSrc} alt="edit" />
            ) : (
              <IconArrow
                src={imageArrowDownSrc}
                alt="arrow down"
                $isOpen={isOpenModalTarget}
              />
            )}
          </InfoBlockMetricMenu>
        </TextContainer>
      </WrapperMetricMenu>
      {isOpenModalTarget && <ModalChangeGoal onClose={closeModal} />}
      {isOpenModalWeight && <ModalChangeWeight onClose={closeModal} />}
    </>
  );
};

MetricMenu.propTypes = {
  metricName: PropTypes.string.isRequired,
  onOpenInnerModal: PropTypes.func,
  onCloseInnerModal: PropTypes.func,
};

export default MetricMenu;
