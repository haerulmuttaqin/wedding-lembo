import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import useCountdown from './useCountdown';

export default function Content() {

    const [days, hours, minutes, seconds] = useCountdown('2022-07-23');

    return (
        <Box className="mobile-background">
            <div className="position-fixed">
                <div className="position-fixed orn orn-top-right aos-init aos-animate" data-aos="fade-left"></div>
                <div className="position-fixed orn orn-bottom-left aos-init aos-animate" data-aos="fade-right"></div>
            </div>
            <div className="mobile-width position-relative" data-bs-spy="scroll" data-bs-target="#navbar-scrollspy" data-bs-offset="0" >
                <section className="header position-relative pb-5" id="section_header">
                    <div className="paper"></div>
                    <div className="container pb-0 position-relative" style={{ zIndex: 10 }}>
                        <br />
                        <div className="text-center">
                            <img src="/top_love.png" className="mb-2" width="50" alt="" />
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-center aos-init aos-animate" data-aos="flip-right">
                            <div className="orn-circle-photo position-relative">
                                <div className="carousel slide carousel-fade w-100 h-100" data-ride="carousel">
                                    <div className="carousel-inner container-slider w-100 h-100">
                                        <div className="carousel-item h-100 w-100 active">
                                            <div className="slider-rounded slider d-block w-100 h-100" style={{ backgroundImage: 'url(/opening.jpeg)' }} ></div>
                                        </div>
                                    </div>
                                    <div className="orn-circle-frame-container"></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center h5 mt-5">Pernikahan dari</p>
                        <div className="hover-zoom mt-4">
                            <h1 className="font-hello title text-center mb-0 text-warna-3 fw-bold">
                                Lembo &amp; Ani
                            </h1>
                        </div>
                        <p className="text-center h5 mt-3 mb-0">Sabtu, 23 Juli 2022</p>
                        <p className="text-center mt-5 mx-4 fs-5">

                        </p>
                    </div>
                    <div className="orn orn-header-top-left aos-init aos-animate" data-aos="fade-right"></div>
                    <div className="orn orn-header-top-right aos-init aos-animate" data-aos="fade-right"></div>
                    <div className="orn orn-header-bottom-right aos-init" data-aos="fade-right"></div>
                    <div className="orn orn-header-bottom-left aos-init" data-aos="fade-right"></div>
                </section>

                <section className="batas-header text-white text-center bg-warna-2 w-100 py-3 pt-4" id="section_batas_header">
                    <p className="font-hello fs-2 mb-0 text-white aos-init aos-animate" data-aos="fade-up">

                    </p>
                    <Box className="text-white" p={4}>
                        Dan nikahkanlah orang-orang yang sendirian di antara kamu, dan orang-orang yang layak (menikah) dari hamba sahayamu yang lelaki dan hamba-hamba sahayamu yang perempuan. jika mereka miskin Allah akan mengkayakan mereka dengan karunianya. Dan Allah Maha Luas (pemberiannya) dan Maha Mengetahui. (QS. An Nuur (24) : 32)
                    </Box>
                </section>

                <section className="mempelai" id="mempelai">
                    <br /><br />
                    <div className="container mt-5">
                        <p className="text-center fs-1 title font-hello">Calon Pengantin</p>
                        <p className="text-center mx-3 mb-5"></p>
                        <div className="text-center mx-3 mb-5">
                            <div className="d-flex justify-content center align-items-center flex-column mb-3">
                                {/* <div className="orn-photo pertama aos-init aos-animate" data-aos="fade-left">
                                    <img className="photo aos-init aos-animate" src="https://nginvite.com/storage/images/uploads/44/foto_mempelai/pria_1642576190_300_300.png" alt="" data-aos="fade-left" data-aos-delay="400" />
                                </div> */}
                                <p className="h3 text-warna-3 mt-3 fw-bold mb-4 aos-init aos-animate" data-aos="fade-left">
                                    Saepuloh (Lembo)
                                </p>
                                <p data-aos="fade-left" className="aos-init aos-animate">
                                    Putra ke 2 Bpk. Dadun dan Ibu . itoh ( Almarhumah)
                                </p>
                                <div className="d-flex flex-row justify-content-center align-items-center mb-3 aos-init aos-animate" data-aos="fade-left">
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="font-hello" style={{ fontSize: '72px' }}>&amp;</p>
                            </div>
                            <div className="d-flex justify-content center align-items-center flex-column mt-3">
                                {/* <div className="orn-photo kedua aos-init aos-animate" data-aos="fade-right">
                                    <img className="photo aos-init aos-animate" src="https://nginvite.com/storage/images/uploads/44/foto_mempelai/wanita_1642576190_300_300.png" alt="" data-aos="fade-right" data-aos-delay="400" />
                                </div> */}
                                <p className="h3 text-warna-3 mt-3 fw-bold mb-4 aos-init" data-aos="fade-right">
                                    Maryani (Ani)
                                </p>
                                <p data-aos="fade-right" className="aos-init">
                                    Putri ke 3 dari Bpk. Empe (Almarhum) dan Ibu .Juhaenah
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="countdown" id="countdown" style={{ background: '#faad15' }}>
                    <Box className="position-relative">
                        <div className="overlay-countdown-1"></div>
                        <div className="overlay-countdown-2"></div>
                        <div className="position-relative pb-3">
                            <Box className="container mt-4 py-3">
                                <Center>
                                    <Box className="text-center mb-4 aos-init aos-animate" data-aos="fade-up">
                                        <img src="/orn_line_2.png" width="300" style={{ transform: 'scaleY(-1) !important' }} />
                                    </Box>
                                </Center>
                                <p className="text-center text-white fs-5" style={{ textAlign: 'justify' }}>

                                </p>
                                <div className="text-center">
                                    <h1 className="font-hello text-white text-save-the-date aos-init aos-animate" data-aos="flip-down">
                                        Hari Yang Ditunggu
                                    </h1>
                                    <br />
                                    <p className="text-white text-tanggal text-uppercase aos-init aos-animate" data-aos="flip-up">
                                        Sabtu,23 Juli 2022
                                    </p>
                                </div>
                            </Box>
                            <br />
                            <br />
                            <div className="line-countdown aos-init aos-animate" data-aos="zoom-in"></div>
                            <div className="container d-flex justify-content-center align-items-center flex-row">
                                <div className="frame-countdown aos-init aos-animate" data-aos="zoom-in">
                                    <div className="text-countdown text-center">
                                        <h4 className="font-bodoni mb-0 text-hari">{days}</h4>
                                        <p className="fs-6 mb-0">
                                            Hari
                                        </p>
                                    </div>
                                </div>
                                <div className="frame-countdown aos-init aos-animate" data-aos="zoom-in">
                                    <div className="text-countdown text-center">
                                        <h4 className="font-bodoni mb-0 text-jam">{hours}</h4>
                                        <p className="fs-6 mb-0">
                                            Jam
                                        </p>
                                    </div>
                                </div>
                                <div className="frame-countdown aos-init aos-animate" data-aos="zoom-in">
                                    <div className="text-countdown text-center">
                                        <h4 className="font-bodoni mb-0 text-menit">{minutes}</h4>
                                        <p className="fs-6 mb-0">
                                            Menit
                                        </p>
                                    </div>
                                </div>
                                <div className="frame-countdown aos-init aos-animate" data-aos="zoom-in">
                                    <div className="text-countdown text-center">
                                        <h4 className="font-bodoni mb-0 text-detik">{seconds}</h4>
                                        <p className="fs-6 mb-0">
                                            Detik
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Box className="text-center mt-5 aos-init aos-animate" data-aos="zoom-out" zIndex={99999}>
                                <Link href="https://www.google.com/calendar/event?action=TEMPLATE&amp;text=Lembo+%26+Ani&amp;details=Lembo+%26+Ani&amp;location=Kp.serang RT.002/001 Ds.Serang Kec.cikarang selatan (Belakang pasar serang)&amp;dates=20220723T120000/20220723T170000&amp;ctz=Asia%2FJakarta" className="btn btn-warna-2" target="_blank" rel="noreferrer">
                                    Tambah ke Kalender
                                </Link>
                            </Box>
                            <br />
                            <Center>
                                <div className="text-center aos-init aos-animate" data-aos="fade-down">
                                    <img src="/orn_line_2.png" width="300" />
                                </div>
                            </Center>

                        </div>
                    </Box>
                </section>


                <section className="informasi_acara position-relative" id="informasi_acara">
                    <div className="paper-informasi-acara"></div>
                    <div className="background-informasi-acara" style={{ backgroundImage: 'url(opening.jpeg)' }}>
                        <div className="overlay-informasi-acara"></div>
                    </div>
                    <div className="container py-5 container-informasi-acara">
                        <Center>
                            <div className="text-center">
                                <img src="/orn_line_3.png" width="200" />
                            </div>
                        </Center>
                        <div className="text-center my-5">
                            <div>
                                <h1 className="font-hello text-warna-4 fw-bold title">
                                    Acara Pernikahan
                                </h1>
                                <p className="text-warna-4 mx-4 mb-5">
                                    Untuk melaksanakan syariat agama-Mu, mengikuti sunnah rasul-Mu dalam membentuk keluarga yang Sakinah, Mawaddah, Warahmah yang Insya Allah akan diselenggarakan pada hari:
                                </p>
                            </div>
                            <div className="acara mt-3 mb-5">
                                <Center>
                                    <img src="/acara_1.png" height="48" alt="" />
                                </Center>
                                <p className="fs-2 text-warna-3 mt-3 fw-bold">
                                    Acara Akad & Resepsi
                                </p>
                                <p className="fw-light text-center">Sabtu,23 Juli 2022</p>
                                <p>09:00 - selesai</p>
                                <Box className="acara-map text-center px-5">
                                    <p className="fs-5 fw-bold mb-0">Kediaman Mempelai Wanita</p>
                                    <p>Kp.serang RT.002/001 Ds.Serang Kec.cikarang selatan (Belakang pasar serang)</p>
                                    <Box mt={4} borderWidth={1} borderRadius={'xl'}>
                                        <iframe width="100%" height="300" style={{ border: 0 }} loading="lazy" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBX1z2csAkPWnB9UiqeQV05gVPogmG1I3s
                                    &amp;q=-6.359489,107.1189018">
                                        </iframe>
                                    </Box>
                                    <a target="_blank" href="https://www.google.com/maps/dir/?api=1&amp;destination=-6.359489,107.1189018" className="btn btn-warna-2 mt-3">
                                        Lihat di peta
                                    </a>
                                </Box>
                            </div>
                        </div>
                        <Center>
                            <div className="text-center">
                                <img src="/orn_line_4.png" style={{ transform: 'scaleY(-1) !important' }} width="200" />
                            </div>
                        </Center>
                    </div>
                </section>

                <div id="fb-root"></div>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v14.0&appId=230102141039057&autoLogAppEvents=1" nonce="FWad5VrJ"></script>

                <section className="ucapan_pernikahan" id="section_ucapan_pernikahan">
                    <div className="container my-5 pt-3">
                        <div className="mb-5 text-center">
                            <div className="d-flex flex-row justify-content-center align-items-center px-md-4 mb-3">
                                <img src="/orn_title_right.png" width="50" style={{ transform: 'scaleX(-1) !important' }} />
                                <p className="fw-bold text-center font-title px-md-3 px-1 mb-0">Ucapan &amp; Harapan</p>
                                <img src="/orn_title_right.png" width="50" />
                            </div>
                            <p>Tiada hadiah yang paling indah yang kami harap selain Do'a &amp; harapan untuk kami</p>
                        </div>
                        <div className="fb-comments" data-href="https://lembo-ani.pasbe.id" data-width="100%" data-numposts="5"></div>

                    </div>
                </section>

                <section className="quote_doa" id="section_quote_doa">
                    <div className="container my-5 pt-3 text-center px-5">
                        <Center><img src="/orn_line_5.png" width="200" /></Center>
                        <p className="mt-5 fs-5">
                            "Ya Allah, sesungguhnya aku mohon kepada-Mu kebaikan dirinya dan kebaikan yang Engkau tentukan atas dirinya. Dan Aku berlindung kepada-Mu dari kejelekannya dan kejelekan yang Engkau tetapkan atas dirinya"
                        </p>
                    </div>
                </section>

                <section className="tgl_nikah_footer mt-5 position-relative" id="section_tanggal_nikah_footer">
                    <div className="container py-5">
                        <br />
                        <p className="text-center h5 mt-3 text-uppercase">
                            23 Juli 2022
                        </p>
                        <div className="hover-zoom mt-4">
                            <h1 className="font-hello title text-center mb-0 text-warna-3 fw-bold">
                                Lembo
                                &amp;
                                Ani
                            </h1>
                        </div>
                    </div>
                    <br />

                    <br />

                    <br />

                    <br />

                    <Center>www.pasbe.id</Center>

                    <br />
                    <br />
                    <br />


                </section>
            </div>
        </Box>
    )
}
