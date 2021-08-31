import React from 'react'
import Page from '../UI/Page'
import ImageSlider from '../UI/ImageSlider'
import About from '../UI/About'
import MapBox from '../UI/Map'

const Home = () => {
    return (
      <Page heading="Home">
        <About />
        <ImageSlider />
        <MapBox />
      </Page>
    );
}

export default Home
