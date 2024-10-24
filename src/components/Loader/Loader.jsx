import { Oval } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { Wrapper, Text } from './Loader.styled';

const modalRoot = document.querySelector('#modal-root');

const Loader = () => {
  return createPortal(
    <Wrapper>
      <Oval
        ariaLabel="loading-indicator"
        height={150}
        width={150}
        strokeWidth={5}
        strokeWidthSecondary={5}
        color="#45FFBC"
        secondaryColor="#292928"
        visible={true}
      />
      <Text>Loading...</Text>
    </Wrapper>,
    modalRoot
  );
};

export default Loader;
