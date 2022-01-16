import Router from 'next/router';
import styled from 'styled-components';
import Icon from './UI/Icon';

function NavItems({ active }) {
  return (
    <>
      <S.Page active={active === 'home'}>
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
    </>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.Page = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ active, theme }) =>
    active ? theme.colors.lightBlue : theme.colors.gray};
  width: 100%;

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

export default NavItems;
