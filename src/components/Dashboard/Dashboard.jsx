import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Arrow,
  ArrowReturn,
  BackLink,
  Button,
  ChartGrid,
  Header,
  HeaderBlock,
  LineChartBlock,
  MainHeaderBlock,
  ScaleChartBlock,
  SecondHeader,
  ToggleButton,
} from './Dashboard.styled';
import arrowDown from 'images/icons/arrow-down.svg';
import arrowLeft from 'images/icons/arrow-left.svg';
import LineChart from 'components/Charts/LineChart';
import ScaleChart from 'components/Charts/ScaleChart';
import { MONTH_NAME } from 'constants/monthName';
import { PERIOD_TYPES } from 'constants/periodTypes';
import { getStatistic } from 'redux/Statistic/statsOperations';

const Dashboard = () => {
  const [isYearView, setIsYearView] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState(PERIOD_TYPES.MONTH);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatistic(selectedPeriod));
  }, [dispatch, selectedPeriod]);

  const toggleDropdown = () => setIsToggleOpen(prev => !prev);

  const togglePeriod = () => {
    setIsYearView(prev => !prev);
    setSelectedPeriod(prev =>
      prev === PERIOD_TYPES.MONTH ? PERIOD_TYPES.YEAR : PERIOD_TYPES.MONTH
    );
    toggleDropdown();
  };

  const currentMonth = MONTH_NAME.FULL[new Date().getMonth() + 1];
  const currentYear = new Date().getFullYear();

  return (
    <>
      <HeaderBlock>
        <MainHeaderBlock>
          <BackLink to={backLinkLocationRef.current}>
            <ArrowReturn src={arrowLeft} alt="arrow left" />
          </BackLink>
          <Header>{isYearView ? 'Last year' : 'Last month'}</Header>
          <Button onClick={toggleDropdown}>
            <Arrow src={arrowDown} alt="arrow" $isOpen={isToggleOpen} />
          </Button>
          {isToggleOpen && (
            <ToggleButton onClick={togglePeriod}>
              {isYearView ? 'Last month' : 'Last year'}
            </ToggleButton>
          )}
        </MainHeaderBlock>
        <SecondHeader>{isYearView ? currentYear : currentMonth}</SecondHeader>
      </HeaderBlock>

      <LineChartBlock>
        <ChartGrid>
          <LineChart isYearData={isYearView} type="calories" />
        </ChartGrid>
        <ChartGrid>
          <LineChart isYearData={isYearView} type="water" />
        </ChartGrid>
      </LineChartBlock>
      <ScaleChartBlock>
        <ScaleChart isYearData={isYearView} />
      </ScaleChartBlock>
    </>
  );
};

export default Dashboard;
