import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './components/css/main.css'
import DataProvider from './components/Context'

export default function App() {
   return (
      <DataProvider>
         <div className="app">
            <Header />
            <Main />
         </div>
      </DataProvider>
   )
}
