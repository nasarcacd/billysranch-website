import React from 'react';
import Container from '@material-ui/core/Container';
import PhotoGallery from '../../components/ui/photo-gallery/sigle-line-grid-list.component';

const HomePage = () => {
    return(
      <Container maxWidth="md">
        <PhotoGallery />
      </Container>
)};

export default HomePage;