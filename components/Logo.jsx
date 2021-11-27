import styled from 'styled-components';
import Image from 'next/image';
import Router from 'next/router';

function Logo() {
  return (
    <S.Logo onClick={() => Router.push('/')}>
      <Image
        src='/logo.webp'
        height='40'
        width='40'
        className='logo'
        alt='Greenery Logo'
      />
      <h1>savago</h1>
    </S.Logo>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-left: 1rem;
  }
`;

export default Logo;
