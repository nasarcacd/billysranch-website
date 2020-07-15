import React from 'react';
import Container from '@material-ui/core/Container';
import PhotoGallery from '../../components/ui/photo-gallery/gallery';
import HomeLayer from '../../components/ui/home-layer/MainFeaturedPost';
const HomePage = () => {
    return(
      <Container maxWidth="xl">
        <HomeLayer />
        <PhotoGallery />
      </Container>
)};

export default HomePage;