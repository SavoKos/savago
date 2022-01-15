import Icon from '@components/UI/Icon';
import styled from 'styled-components';
import Router from 'next/router';
import Logo from '@components/Logo';

function NavigationPhone() {
  return (
    <>
      <S.Logo>
        <Logo />
      </S.Logo>

      <S.Navigation>
        <S.Page>
          <Icon type='icon-compass2' onClick={() => Router.push('/')} />
          <p>Discover</p>
        </S.Page>
        <S.Page>
          <Icon type='icon-search' className='search' />
          <p>Search</p>
        </S.Page>
        <S.Page>
          <Icon
            type='icon-heart2'
            className='favorites'
            onClick={() => Router.push('/favorites')}
          />
          <p>Favorites</p>
        </S.Page>
        <S.Page>
          <Icon
            type='icon-Settings'
            className='settings'
            onClick={() => Router.push('/settings')}
          />
          <p>Settings</p>
        </S.Page>
      </S.Navigation>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Logo = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  .logo {
    margin-top: 1.5rem;
  }
`;

S.Navigation = styled.div`
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 20;
  bottom: 0;
  display: flex;
  background-color: #fff;
  padding: 1rem 0;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0px -6px 31px -6px rgba(0, 0, 0, 0.12);
  justify-content: space-around;
  left: 0;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

S.Pages = styled.div`
  align-items: center;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

S.Page = styled.div`
  flex-direction: column;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  gap: 0.3rem;

  p {
    font-weight: 500;
    font-size: 0.8em;
  }

  .anticon {
    font-size: 1.5rem;
  }
`;

export default NavigationPhone;
