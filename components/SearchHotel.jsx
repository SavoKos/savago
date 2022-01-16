import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from './UI/Icon';

function SearchHotel() {
  const [searchResults, setSearchResults] = useState(null);

  const searchHandler = (e) => {
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
      params: { query: e.target.value },
      headers: {
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        'x-rapidapi-key': '06d2a290fdmsh3e28c357bce8b6ap106aa0jsn246e7755295c',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSearchResults(
          response?.data?.suggestions
            ?.filter((_, i) => i < 2)
            ?.flatMap((arr) => arr.entities)
            ?.filter((_, i) => i < 20)
        );
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

  console.log(searchResults);

  return (
    <S.SearchHotel>
      <Icon type='icon-search' className='search-icon' />
      <input
        type='text'
        placeholder='Destination or a hotel name'
        onChange={searchHandler}
      />
      <S.SearchBtn>
        <p>Let&apos;s Go</p>
        <Icon type='icon-arrow-right' />
      </S.SearchBtn>
      {searchResults && (
        <S.SearchResults>
          <h4>Popular results</h4>
          {searchResults.map((result) => (
            <S.SearchResult key={result.destinationId}>
              {result.type === 'HOTEL' ? (
                <Icon type='icon-hotel' />
              ) : (
                <Icon type='icon-location2' />
              )}
              <h3>
                {result.caption
                  .replace("<span class='highlighted'>", '')
                  .replace('</span>', '')}
              </h3>
            </S.SearchResult>
          ))}
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
    -webkit-box-shadow: 0px 10px 121px -42px rgba(0, 0, 0, 0.46);
    -moz-box-shadow: 0px 10px 121px -42px rgba(0, 0, 0, 0.46);
    box-shadow: 0px 10px 121px -42px rgba(0, 0, 0, 0.46);

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

S.SearchBtn = styled.div`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translate(-1%, -50%);
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  -webkit-box-shadow: 0px 2px 13px 1px rgba(0, 128, 255, 0.43);
  -moz-box-shadow: 0px 2px 13px 1px rgba(0, 128, 255, 0.43);
  box-shadow: 0px 2px 13px 1px rgba(0, 128, 255, 0.43);

  @media screen and (min-width: 768px) {
    border-radius: 100rem;
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
  }

  p,
  .anticon {
    color: #fff;

    @media screen and (min-width: 768px) {
      margin-left: 1rem;
    }
  }

  .anticon {
    font-size: 1.1em;

    @media screen and (min-width: 768px) {
      font-size: 1.3em;
    }
  }

  p {
    font-size: 1.05em;
    font-weight: 500;
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
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

export default SearchHotel;
