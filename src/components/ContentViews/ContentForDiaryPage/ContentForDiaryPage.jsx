import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import arrowLeft from 'images/icons/arrow-left.svg';
import {
  ArrowReturn,
  HeaderPage,
  LinkToBack,
  TitlePage,
} from './ContentForDiaryPage.styled';
import Diary from 'components/Diary';

const ContentForDiaryPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  return (
    <>
      <HeaderPage>
        <LinkToBack to={backLinkLocationRef.current}>
          <ArrowReturn src={arrowLeft} alt="arrow left" />
        </LinkToBack>
        <TitlePage>Diary</TitlePage>
      </HeaderPage>

      <Diary />
    </>
  );
};

export default ContentForDiaryPage;
