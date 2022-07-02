import React, { useState } from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'
import BottomNav from './__components/BottomNav';
import { Box, Button, Center, Container } from '@chakra-ui/react';
import Content from './Content';

const Btn = ({ toggleFullScreen }) => (
    <Flipped flipId="square">
        <Button colorScheme='gray' variant="outline" onClick={toggleFullScreen}>
            Buka Undangan
        </Button>
    </Flipped>
);

const FullScreenSquare = () => (
    <Flipped flipId="square">
        <div className="full-screen-square">
            <Content />
            <Center p={3}>
                <BottomNav />
            </Center>
        </div>
    </Flipped>
);

export default function Opening() {
    const [fullScreen, setFullScreen] = useState(false);
    const toggleFullScreen = () => setFullScreen(prevState => !prevState);

    return (
        <Flipper flipKey={fullScreen}>
            {fullScreen ? (
                <FullScreenSquare />
            ) : (

                <section className="top-cover" id="section_top_cover">
                    <Box className="carousel-border mb-4 aos-init aos-animate" data-aos="zoom-in">
                        <Box className="carousel-custom">
                            <div className="carousel carousel-fade slide w-100 h-100" data-ride="carousel">
                                <div className="carousel-inner container-slider w-100 h-100">
                                    <div className="carousel-item h-100 w-100 active">
                                        <div className="slider d-block" style={{ backgroundImage: 'url(/opening.jpeg)' }} ></div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Box>
                    <div className="container-orn d-flex justify-content-center align-items-center flex-column">
                        <div className="position-absolute orn orn-top-left aos-init aos-animate" data-aos="fade-right"></div>
                        <div className="position-absolute orn orn-top-right aos-init aos-animate" data-aos="fade-left"></div>
                        <div className="position-absolute orn orn-bottom-left aos-init aos-animate" data-aos="fade-right"></div>
                        <div className="position-absolute orn orn-bottom-right aos-init aos-animate" data-aos="fade-left"></div>
                        <Box mt={4} mb={4}>
                            <h1 className="font-hello title text-center mb-0 text-warna-3 fw-bold">
                                Lembo &amp; Ani
                            </h1>
                        </Box>

                        <Center mt={2}><Btn toggleFullScreen={toggleFullScreen} /></Center>

                    </div>
                </section>
            )}
        </Flipper>
    );
}
