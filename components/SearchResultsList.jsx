import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeDestination } from 'redux/searchInfoSlice';
import Router from 'next/router';
import Icon from './UI/Icon';

function SearchResultsList({ searchResults }) {
  const dispatch = useDispatch();

  const submitSearchResult = (data) => {
    dispatch(changeDestination(data));
    Router.push('/dates');
  };

  const checkLocation = (type) => {
    return (
      ['district', 'city', 'country', 'region'].find((el) => el === type)
        ?.length > 0
    );
  };

  return (
    <S.SearchResults>
      <h4>Popular results</h4>
      {searchResults.map((result) => (
        <S.SearchResult
          onClick={() => submitSearchResult(result)}
          key={result.dest_id}
        >
          {result.type === 'hotel' && <Icon type='icon-hotel' />}
          {checkLocation(result.type) && <Icon type='icon-location2' />}
          {result.type === 'landmark' && <Icon type='icon-landmark' />}
          {result.type === 'airport' && <Icon type='icon-airport' />}

          <h3>{result.name}</h3>
        </S.SearchResult>
      ))}
    </S.SearchResults>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};

S.SearchResult = styled.div`
  display: flex;
  align-items: center;
  transition: all ease 0.3s;
  cursor: pointer;
  padding: 0.7rem;
  border-radius: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray}7a;
  }

  .anticon {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.5em;
    margin-right: 1rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 500;
  }
`;

S.SearchResults = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  position: absolute;
  margin-top: 1rem;
  z-index: 9;
  padding: 1rem;
  overflow: auto;
  max-height: 22rem;
  width: 100%;
  box-shadow: 2px 0px 41px -4px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 480px) {
    padding: 1.5rem 1.3rem;
  }

  h4 {
    font-weight: 400;
    margin-bottom: 1rem;
    opacity: 0.7;
    padding-left: 0.7rem;
  }

  &::-webkit-scrollbar {
    width: 7px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* color of the scroll thumb */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray}7a;
    border-radius: 1rem; /* roundness of the scroll thumb */
  }
`;

export default SearchResultsList;
