import React from 'react';
import styled from 'styled-components';

function Map() {
    return (
        <Wraper>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9855450899363!2d119.50857661430013!3d-5.10602945315618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefbf2ca8e3ba3%3A0x70d6b5cab4ff8174!2sJl.%20Perintis%20Kemerdekaan%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1633674629672!5m2!1sid!2sid" width="100%" height="600" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </Wraper>
    )
}

export default Map

const Wraper = styled.div``