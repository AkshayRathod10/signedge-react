import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Title } from '../components/Title';
import CardList from '../components/CardList';
import { Helmet } from 'react-helmet';

export const Products = () => {

    const [products, setProducts] = useState([
        {
            "title": "Accessories",
            "description": "Additional accessories such as digital signage enclosures, cables, connectors, power supplies, and mounting brackets to support the deployment and operation of digital signage displays.",
            "image": "assets/img/accessories.png"
        },
        {
            "title": "Mounting Hardware",
            "description": "Secure mounting solutions for installing displays in various locations, including wall mounts, ceiling mounts, floor stands, and freestanding kiosks. Mounting hardware ensures proper installation and stability.",
            "image": "assets/img/mounting-hardware.png"
        },
        {
            "title": "Interactive Touchscreens",
            "description": "Touch-enabled displays that allow users to interact with content through gestures, touch, and multi-touch capabilities. Interactive touchscreens are ideal for wayfinding, directories, and interactive presentations.",
            "image": "assets/img/interactive-touchscreen.png"
        },
        {
            "title": "Content Management Software (CMS)",
            "description": "Robust software platforms for creating, scheduling, and managing content for digital signage displays. CMS solutions offer intuitive interfaces, content templates, scheduling tools, and real-time updates.",
            "image": "assets/img/cms.png"
        },
        {
            "title": "Media Players",
            "description": "Dedicated media players or digital signage players to playback content on displays. These players support different content formats and offer remote management capabilities.",
            "image": "assets/img/media-player.png"
        },
        {
            "title": "Digital Signage Displays",
            "description": "High-quality commercial-grade displays available in various sizes and configurations, including indoor, outdoor, single-screen, and videowall displays.",
            "image": "assets/img/led.png"
        }
    ]
    )

    return (
        <>
            <Helmet>
                <title>SignEdge Digitech Pvt Ltd - Products</title>
                <meta name="description" content="" />
                <meta property="og:title" content="SignEdge Digitech Pvt Ltd" />
                <meta property="og:description" content="." />
            </Helmet>
            <Header />
            <Title name="Products" bg="#99ca3c" />
            <main className='container mx-auto'>
                <h2 className='text-2xl text-center my-5'>Our product range</h2>

                <CardList cardsData={products} />
            </main>
            <Footer />
        </>
    )
}
