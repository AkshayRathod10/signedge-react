import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Title } from '../components/Title';
import CardList from '../components/CardList';

export const Services = () => {

    const [services, setServices] = useState([
        {
            "title": "Content Creation Tools",
            "description": "Software tools and templates for creating and designing multimedia content, including videos, images, graphics, text, and animations. Content creation tools offer editing, customization, and branding features.",
            "image": "assets/img/content-creation.png"
        },
        {
            "title": "Maintenance & Support",
            "description": "Enjoy peace of mind with our proactive maintenance and round-the-clock support services, ensuring your digital signage remains operational and up-to-date.",
            "image": "assets/img/maintenance-support.png"
        },
        {
            "title": "Installation & Deployment",
            "description": "Leave the technicalities to us. Our expert technicians ensure seamless installation and deployment of your digital signage solutions.",
            "image": "assets/img/installation-deployment.png"
        },
        {
            "title": "Content Creation",
            "description": "Our team of creative professionals crafts compelling content that resonates with your audience and reinforces your brand message.",
            "image": "assets/img/content-creation.png"
        },
        {
            "title": "Hardware Solutions",
            "description": "From displays and media players to mounts and accessories, we offer a wide selection of high-quality hardware options to suit any environment.",
            "image": "assets/img/hardware-solutions.png"
        },
        {
            "title": "Consultation & Planning",
            "description": "We work closely with you to understand your objectives and develop customized digital signage strategies tailored to your specific needs.",
            "image": "assets/img/consultation-planning.png"
        }
    ]
    )

    return (
        <>
            <Header />
            <Title name="Services" bg="#71d0da" />
            <main className='container mx-auto'>

                <h2 className='text-2xl text-center my-5'>Our Comprehensive Digital Signage Services</h2>

                <CardList cardsData={services} />
            </main>
            <Footer />
        </>
    )
}
