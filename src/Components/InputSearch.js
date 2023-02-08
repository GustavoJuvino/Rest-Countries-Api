import React from 'react';
import { ReactComponent as SearchIcon } from '../Assets/search.svg';
import { SearchDiv } from './styles/InputSearch.styled';

const InputSearch = ({setSearch}) => {

  return (
        <SearchDiv>
            <SearchIcon className='SearchIcon'/>
            <input 
                type="text" 
                placeholder="Search for a country..."
                onChange={ (event) =>
                  setTimeout(() => {
                    setSearch(event.target.value)
                  }, 1200)
                }
              />
        </SearchDiv>
  )
}

export default InputSearch