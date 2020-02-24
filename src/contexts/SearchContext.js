import React, { useState, createContext } from 'react';
export const SearchContext = createContext();

const SearchBarContext = (props) => {
  const [searchBarOpen, setsearchBarOpen] = useState(false);

  const searchToggleClickHandler = () => {
    setsearchBarOpen((prevState) => {
      return {
        searchBarOpen: !prevState.searchBarOpen
      }
    })
  }

  const backdropClickHandler = () => {
    setsearchBarOpen({
      searchBarOpen: false
    })
  }

  return (
    <SearchContext.Provider value={{ ...searchBarOpen, backdropClickHandler, searchToggleClickHandler }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchBarContext;