import React, { createContext, useState } from 'react'

export const DataContext = createContext();

export default function DataProvider(props) {
   const [searchInput, setSearchInput] = useState();

   const search = (input) => {
      setSearchInput(input);
   }


   return (
      <DataContext.Provider value={{ search, searchInput }}>
         {props.children}
      </DataContext.Provider>
   )
}
