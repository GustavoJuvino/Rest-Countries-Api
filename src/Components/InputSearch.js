import React from 'react';
import { ReactComponent as SearchIcon } from '../Assets/search.svg';
import { SearchDiv } from './styles/Input.styled';

const InputSearch = ({setCountry}) => {

  return (
        <SearchDiv>
            <SearchIcon className='SearchIcon'/>
            <input 
                type="text" 
                placeholder="Search for a country..."
                onChange={ (event) =>
                  setTimeout(() => {
                    setCountry(event.target.value)
                  }, 1200)
                }
              />
        </SearchDiv>
  )
}

export default InputSearch