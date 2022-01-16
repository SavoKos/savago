import styled from 'styled-components';
import Icon from './UI/Icon';
import Router from 'next/router';
import Logo from './Logo';
import { useState } from 'react';
import NavItems from './NavItems';

export default function Navigation({ active }) {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <>
      <S.Container>
        <S.Navigation>
          <Logo />
          <S.Pages>
            <NavItems />
          </S.Pages>
          <S.User>
            <Icon type='icon-login' className='login-icon-only' />
          </S.User>
          <S.RightSideNav>
            <Icon
              type='icon-menu'
              className='menu'
              onClick={() => setSidebarActive(true)}
            />
          </S.RightSideNav>
        </S.Navigation>

        {/* Overlay */}
        <S.Overlay
          sidebarActive={sidebarActive}
          onClick={() => setSidebarActive(false)}
        >
          {/* Sidebar */}
          <S.Sidebar className={sidebarActive ? 'sidebarActive' : ''}>
            <S.SidebarNavItems>
              <NavItems active={active} />
            </S.SidebarNavItems>
            <Icon
              type='icon-searchclose'
              className='close-sidebar'
              onClick={() => setSidebarActive(false)}
            />
          </S.Sidebar>
        </S.Overlay>
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
`;

S.Logo = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  .logo {
    margin-top: 1.5rem;
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
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

S.User = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  .anticon {
    cursor: pointer;
  }
`;

S.SidebarNavItems = styled.div`
  color: #fff;
  align-items: center;
  font-size: 1.875rem;
  line-height: 2.25rem;
  display: flex;
  flex-direction: column;
  height: 15%;
  gap: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .icon {
    margin-right: 1.5rem;
  }
`;

S.Sidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  width: 75%;
  position: fixed;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.3s;
  transform: translateX(100%);

  .anticon.close-sidebar {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: 3rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.lightBlue};
    cursor: pointer;
  }

  &.sidebarActive {
    transform: translateX(0%);
    transition: all ease 0.3s;
  }
`;

S.Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0;
  visibility: ${({ sidebarActive }) => !sidebarActive && 'hidden'};
`;

S.RightSideNav = styled.div`
  .anticon {
    cursor: pointer;
    display: block;
    font-size: 2em;
  }

  @media (min-width: 768px) {
    .anticon.menu {
      display: none;
    }
  }
`;
