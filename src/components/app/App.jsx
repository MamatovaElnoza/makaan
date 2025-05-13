import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navbar/navbar';
import CarouselSection from '../carousel/carousel-section';
import NestedExample from '../search-bar/search-bar';


const App = () => {
  return (
    <>
    <NavBar />
    <CarouselSection />
    <NestedExample />
    </>
  )
}

export default App