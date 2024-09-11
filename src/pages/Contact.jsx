import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Title } from '../components/Title';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

export const Contact = () => {
    return (
        <>
            <Header />
            <Title name="Reach Us" bg="#f2663a" />
            <main className='container mx-auto'>

                <h2 className='text-2xl text-center my-5'>Get in touch today</h2>

                <p>Ready to take your business to the next level with cutting-edge digital signage solutions? Contact us today to schedule a consultation or request more information. Our Professional team is here to answer your questions and guide you every step of the way.</p>

                <p className='mt-6'>Join the digital revolution with SignEdge Digitech. Transform the way you connect, engage, and inspire your audience with our innovative digital signage solutions.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                    {/* Contact Info Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Info</h4>
                        <div className="mb-4">
                            <i className="fas fa-phone text-yellow-500"></i>{' '}
                            <a href="tel:919833035262">
                                +91 9833035262
                            </a>{' '}
                            ,{' '}
                            <a href="tel:9667667826">
                                +91 9667667826
                            </a>
                        </div>
                        <div className="mb-4">
                            <i className="fas fa-envelope text-green-500"></i>{' '}
                            <a href="mailto:info@signedgeindia.com" >
                                info@signedgeindia.com
                            </a>
                        </div>
                        <h4 className="text-lg font-bold mt-6">Address</h4>
                        <div className="mb-4">
                            <i className="fas fa-map-marker-alt text-pink-500"></i>{' '}
                            A-432, 2nd Floor, Vashi Plaza, Vashi, Navi Mumbai -400703
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8826953079183!2d72.99533297414881!3d19.068894482134244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18d9a0f2377%3A0xeb69a81457fd381d!2sVashi%20Plaza!5e0!3m2!1sen!2sin!4v1715755438653!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="my-5"
                        ></iframe>
                    </div>

                    {/* Form Section */}
                    <div>
                        <div className="mb-5">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="name"
                                placeholder="Your Name!"
                            />
                            <div id="nameError" className="text-red-500 text-sm"></div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="email"
                                placeholder="Your Email!"
                            />
                            <div id="emailError" className="text-red-500 text-sm"></div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="message"
                                rows="7"
                                placeholder="Your Message!"
                            ></textarea>
                            <div id="messageError" className="text-red-500 text-sm"></div>
                        </div>
                        <div className="mb-5">
                            <div id="captcha" data-sum="15" className="mb-2">
                                7 + 8 = ?
                            </div>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="captchaInput"
                                placeholder="Enter CAPTCHA"
                            />
                            <div id="captchaError" className="text-red-500 text-sm"></div>
                        </div>
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                            id="send"
                        >
                            Send
                        </button>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}
