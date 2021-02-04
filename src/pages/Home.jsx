import React from 'react'
import Navbar from "../Components/Navbar"
import Main from "../Components/Main"
import Pagination from '../Components/Pagination'
import Cards from "./Cards"


export default function Home() {
    return (
        <div>
          <Navbar/>
          <Main/>
          <Pagination/>
          <Cards/>
        </div>
    )
}
