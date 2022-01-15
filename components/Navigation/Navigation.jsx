import styled from 'styled-components';
import Icon from '../UI/Icon';
import Router from 'next/router';
import Logo from '../Logo';
import NavigationPhone from './NavigationPhone';

export default function Navigation() {
  return (
    <>
      <NavigationPhone />
      <S.Container>
        <S.Navigation>
          <Logo />
          <S.Pages>
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
          </S.Pages>
          <S.User>
            <Icon type='icon-login' className='login-icon-only' />
          </S.User>
        </S.Navigation>
      </S.Container>
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 40;
  background-color: ${({ theme }) => theme.colors.white};
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

S.Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;

  .logo h1 {
    font-size: 1.5em;

    @media screen and (min-width: 1300px) {
      font-size: 2em;
    }
  }

  .anticon {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

S.Pages = styled.div`
  align-items: center;
  display: flex;
`;

S.User = styled.div`
  display: none;

  .anticon {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

S.Page = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0.5rem;

  @media screen and (min-width: 1300px) {
    margin: 0 2rem;
  }

  p {
    font-weight: 500;
    font-size: 0.8em;

    @media screen and (min-width: 1300px) {
      font-size: 1em;
    }
  }
`;
