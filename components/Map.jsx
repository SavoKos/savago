import styled from 'styled-components';
import Logo from './Logo';
import Icon from './UI/Icon';
import Link from 'next/link';

function Map({ active = '' }) {
  console.log(active);
  return (
    <S.Map>
      <p className='map-header'>
        Your next vacation destination <br />
        is closer than you think.
      </p>
      <S.Savago>
        <h1 className='quote'>The world is yours.</h1>
        <Logo />
      </S.Savago>

      <S.Steps>
        <S.Line />
        <Link href='/'>
          <S.Step active={active === 'location' || active === 'dates'}>
            <Icon type='icon-location' />
            <p>Location</p>
          </S.Step>
        </Link>
        <S.Step active={active === 'dates'}>
          <Icon type='icon-date_fill' />
          <p>Stay dates</p>
        </S.Step>
        <S.Step active={active === 'guests'}>
          <Icon type='icon-guests' />
          <p>Guests</p>
        </S.Step>
      </S.Steps>
    </S.Map>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Map = styled.div`
  display: none;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  width: 40%;
  border-radius: 3rem;
  min-height: 80vh;
  position: relative;
  overflow: hidden;
  background-image: url('/map.webp');
  background-position-x: center;

  .map-header {
    text-align: center;
    margin-top: 3rem;
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 1300px) {
    display: block;
  }
`;

S.Savago = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  .quote {
    color: #fff;
  }
`;

S.Steps = styled.div`
  width: 70%;
  left: 50%;
  bottom: 13%;
  transform: translate(-50%, 13%);
  position: absolute;
`;

S.Step = styled.div`
  top: -1.32rem;
  right: 0;
  position: absolute;
  cursor: pointer;

  &:nth-of-type(2) {
    right: unset;
    left: 0;
  }

  &:nth-of-type(3) {
    right: unset;
    left: 50%;
    transform: translateX(-50%);
  }

  .anticon {
    width: fit-content;

    color: ${({ active, theme }) => (active ? theme.colors.lightBlue : '#fff')};
    background-color: ${({ active }) =>
      active ? '#fff' : 'rgba(255, 255, 255, 0.15)'};

    font-size: 1.4em;
    border-radius: 50%;
    padding: 0.6rem;
    backdrop-filter: blur(5px);
  }

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    color: ${({ theme }) => theme.colors.white};
    margin-top: 0.3rem;
  }
`;

S.Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.3;
`;

export default Map;
