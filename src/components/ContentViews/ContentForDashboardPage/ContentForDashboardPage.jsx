import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Arrow,
  ArrowReturn,
  ButtonToggleDropdown,
  DropdownPeriodToggle,
  GridContainer,
  HeaderPage,
  LinkToBack,
  MainHeaderBlock,
  SecondHeader,
  TitlePage,
} from './ContentForDashboardPage.styled';
import arrowDown from 'images/icons/arrow-down.svg';
import arrowLeft from 'images/icons/arrow-right-open.svg';
import LineChart from 'components/Charts/LineChart/LineChart';
import ScaleChart from 'components/Charts/ScaleChart/ScaleChart';
import { MONTH_NAME } from 'constants/monthName';
import { PERIOD_TYPES } from 'constants/periodTypes';
import { getStatistic } from 'redux/Statistic/statsOperations';
import { selectIsLoading } from 'redux/Statistic/statsSelectors';
import Loader from 'components/Loader';

const ContentForDashboardPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const [isYearView, setIsYearView] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isTransitionActive, setIsTransitionActive] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState(PERIOD_TYPES.MONTH);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistic(selectedPeriod));
  }, [dispatch, selectedPeriod]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeDropdown();
      }
    };

    if (isToggleOpen) {
      document.body.style.overflowY = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (isToggleOpen) {
        document.body.style.overflowY = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isToggleOpen]);

  const toggleDropdown = () => {
    setIsToggleOpen(true);
    setTimeout(() => {
      setIsTransitionActive(true);
    }, 0);
  };

  const closeDropdown = () => {
    setIsTransitionActive(false);
    setTimeout(() => {
      setIsToggleOpen(false);
    }, 300);
  };

  const togglePeriod = () => {
    setIsYearView(prev => !prev);
    setSelectedPeriod(prev =>
      prev === PERIOD_TYPES.MONTH ? PERIOD_TYPES.YEAR : PERIOD_TYPES.MONTH
    );
    closeDropdown();
  };

  const currentMonth = MONTH_NAME.FULL[new Date().getMonth() + 1];
  const currentYear = new Date().getFullYear();

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <HeaderPage>
        <MainHeaderBlock>
          <LinkToBack to={backLinkLocationRef.current}>
            <ArrowReturn src={arrowLeft} alt="arrow left" />
          </LinkToBack>
          <ButtonToggleDropdown onClick={toggleDropdown}>
            <TitlePage>{isYearView ? 'Last year' : 'Last month'}</TitlePage>
            <Arrow src={arrowDown} alt="arrow down" $isOpen={isToggleOpen} />
          </ButtonToggleDropdown>
          {isToggleOpen && (
            <DropdownPeriodToggle
              className={isTransitionActive ? 'active' : ''}
              onClick={togglePeriod}
            >
              {isYearView ? 'Last month' : 'Last year'}
            </DropdownPeriodToggle>
          )}
        </MainHeaderBlock>
        <SecondHeader>{isYearView ? currentYear : currentMonth}</SecondHeader>
      </HeaderPage>

      <GridContainer>
        <LineChart isYearData={isYearView} type="calories" />
        <LineChart isYearData={isYearView} type="water" />
        <ScaleChart isYearData={isYearView} />
      </GridContainer>
    </>
  );
};

export default ContentForDashboardPage;
