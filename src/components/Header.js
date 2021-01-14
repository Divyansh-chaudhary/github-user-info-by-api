import React, { useContext, useState } from 'react'
import logo from './img/github-brands.svg'
import searchIcon from './img/searchengin-brands.svg'
import './css/header.css'
import { DataContext } from './Context'

export default function Header(props) {
   const { search } = useContext(DataContext);
   const [input, setInput] = useState();

   const submit = (e) => {
      e.preventDefault();
      search(input);
   }

   const inputEvent = (e) => {
      setInput(e.target.value);
   }


   return (
      <header style={{display:"flex"}}>
         <div className="logo">
            <img src={logo} alt="logo" />
         </div>
         <form onSubmit={submit}>
            <input onChange={inputEvent} type="text" />
            <button>
               <img src={searchIcon} alt="search" />
            </button>
         </form>
      </header>
   )
}
