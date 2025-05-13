import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navbar/navbar';
import CarouselSection from '../carousel/carousel-section';
import NestedExample from '../search-bar/search-bar';
import Features from '../features/featurews';
import About from '../about/about';


const App = () => {
  return (
    <>
    <NavBar />
    <CarouselSection />
    <NestedExample />
    <Features />
    <About />
    </>
  )
}

export default App