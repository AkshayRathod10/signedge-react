import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Title } from '../components/Title';

export const About = () => {
    return (
        <>
            <Header />
            <main>
                <Title name="About Us" bg="#fecd08" />

                <div className="container mx-auto">
                    <div className="text-center">
                        <img src={`${import.meta.env.BASE_URL}assets/img/about-us.png`} alt="About us" className='block mx-auto my-5' />
                    </div>

                    <p className='my-5'>
                        <p>Your Premier Digital Signage Solution Provider<br /><br />Unlock the Power of Dynamic Digital Displays for Your Business<br />At Signdege Digitech, we specialize in delivering cutting-edge digital signage solutions tailored to meet the unique needs of your business. Whether you’re looking to enhance customer engagement, streamline communication, or boost brand visibility, our innovative technology and expert team are here to make it happen.<br /><br />Explore our comprehensive range of digital signage solutions designed to transform the way you connect with your audience and elevate your brand presence.<br /><br />Established with a vision to redefine the digital landscape, SignEdge Digitech has been at the forefront of delivering top-tier digital signage solutions to businesses of all sizes and industries.<br /><br />With a team of seasoned experts and a passion for innovation, we strive to empower businesses with the tools they need to captivate audiences, drive sales, and stay ahead in today’s competitive market.<br />Discover our story, mission, and commitment to excellence as your trusted digital signage partner.</p>
                    </p>
                </div>




            </main>
            <Footer />
        </>
    )
}
