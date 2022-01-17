import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchResultsList from './SearchResultsList';
import Icon from './UI/Icon';
import Spinner from './UI/Spinner';

function SearchHotel() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const searchHandler = () => {
    console.log(searchValue);
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
      params: { query: searchValue },
      headers: {
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        'x-rapidapi-key': '06d2a290fdmsh3e28c357bce8b6ap106aa0jsn246e7755295c',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const filteredResults = response?.data?.suggestions
          ?.filter((_, i) => i < 2)
          ?.flatMap((arr) => arr.entities)
          ?.filter((_, i) => i < 20);

        // for some reason, caption(name) I get from API has span elements so there is a way to remove them
        filteredResults.forEach(
          (result) =>
            (result.caption = result.caption
              .replaceAll("<span class='highlighted'>", '')
              .replaceAll('</span>', ''))
        );

        setSearchResults(filteredResults);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    document.body.addEventListener('click', () => setSearchResults(null));

    return function cleanup() {
      window.removeEventListener('click', () => setSearchResults(null));
    };
  }, []);

  useEffect(() => {
    if (!searchValue) return setSearchResults([]);

    setLoading(true);
    const delayDebounceFn = setTimeout(searchHandler, 700);
    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return (
    <S.SearchHotel>
      <Icon type='icon-search' className='search-icon' />
      <input
        type='text'
        placeholder='Destination or a hotel name'
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchResults?.length > 0 && !loading && (
        <SearchResultsList searchResults={searchResults} />
      )}
      {loading && (
        <S.SearchResults>
          <Spinner />
        </S.SearchResults>
      )}
    </S.SearchHotel>
  );
}

// -------------------------------------------------- styling ----------------------------------------------
const S = {};
S.SearchHotel = styled.div`
  position: relative;
  width: 100%;

  input {
    padding: 1.5rem 0 1.5rem 3rem;
    width: 100%;
    border-radius: 100rem;
    outline: 0;
    border: 0;
    font-size: 0.75em;
    box-shadow: 2px 0px 41px -4px rgba(0, 0, 0, 0.08);

    @media screen and (min-width: 480px) {
      font-size: 1em;
      padding: 1.5rem 0 1.5rem 4rem;
    }

    @media screen and (min-width: 768px) {
      padding: 2rem 0 2rem 5rem;
    }
  }

  .search-icon {
    color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    top: 50%;
    left: 6%;
    transform: translate(-6%, -50%);
    font-size: 1.1em;

    @media screen and (min-width: 768px) {
      font-size: 1.5em;
    }
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
`;

export default SearchHotel;
