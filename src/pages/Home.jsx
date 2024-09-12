import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import { Helmet } from 'react-helmet';

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>SignEdge Digitech Pvt Ltd - Home</title>
                <meta name="description" content="" />
                <meta property="og:title" content="SignEdge Digitech Pvt Ltd" />
                <meta property="og:description" content="." />
            </Helmet>
            <Header />
            <div className="banner">
                <img src={`${import.meta.env.BASE_URL}assets/img/banner.jpg`} alt="Banner image" />
                <video
                    className="overlay-video"
                    id="videoElement"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={`${import.meta.env.BASE_URL}assets/videos/banner.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <main className='my-9'>
                <div className="container mx-auto text-justify">
                    <p className="mb-4">
                        Digital signage offers a powerful platform for communication, advertising, and engagement across various industries. By leveraging dynamic content, real-time updates, and analytics-driven insights, organizations can effectively captivate audiences, drive revenue, and stay ahead of the competition. As technology continues to evolve, embracing emerging trends and best practices will be crucial for maximizing the impact of digital signage in the future.
                    </p>

                    <p>
                        Digital signage has become an integral part of modern communication strategies across various industries. With its ability to deliver dynamic, eye-catching content in real-time, digital signage offers unparalleled advantages over traditional static displays.
                    </p>
                </div>

                <h2 className='text-center text-4xl my-8'>Tailored for your industry</h2>

                <div className="border-4 container mx-auto p-8">
                    <Carousel />
                </div>

            </main>
            <Footer />
        </>
    )
}
