import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,           
        autoplaySpeed: 2000,      // Delay between slides (3000ms = 3s)
    };

    return (
        <div className="carousel-container container mx-auto">
            <Slider {...settings}>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className='text-2xl my-4'>Advertising and Promotions</h3>
                            <ul className="list-disc pl-5">
                                <li className='my-2'> <strong>Billboards:</strong> Display advertisements for products and services.</li>
                                <li className='my-2'> <strong>Transit Advertising:</strong> Ads in buses, trains, and at stations.</li>
                                <li className='my-2'> <strong>Retail Environments:</strong> Promote sales and new arrivals.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/img/advertising.jpg`}
                                alt="Advertising"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className='text-2xl my-4'>Entertainment & Sports</h3>
                            <ul className="list-disc pl-5">
                                <li className='my-2'><strong>Scoreboards:</strong> Display real-time game scores and stats.</li>
                                <li className='my-2'><strong>Event Information:</strong> Share schedules and venue maps.</li>
                                <li className='my-2'><strong>Advertising:</strong> Promote sponsors and upcoming events.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/img/entertainment-sports.jpg`}
                                alt="Advertising"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className='text-2xl my-4'>BFSI</h3>
                            <ul className="list-disc pl-5">
                                <li className='my-2'><strong>Information Displays:</strong> Share financial news and updates.</li>
                                <li className='my-2'><strong>Queue Management:</strong> Inform customers of wait times.</li>
                                <li className='my-2'><strong>Marketing Displays:</strong> Promote products and services.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/img/bfsi.jpg`}
                                alt="Advertising"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className='text-2xl my-4'>Restaurant</h3>
                            <ul className="list-disc pl-5">
                                <li className='my-2'><strong>Digital Menu Boards:</strong> Display dynamic menus and promotions.</li>
                                <li className='my-2'><strong>Order Status Displays:</strong> Inform customers of order progress.</li>
                                <li className='my-2'><strong>Interactive Kiosks:</strong> Allow for self-service ordering.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/img/restaurant.jpg`}
                                alt="Advertising"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className='text-2xl my-4'>Health</h3>
                            <ul className="list-disc pl-5">
                                <li className='my-2'><strong>Arrival/Departure Boards:</strong> Display real-time schedule information.</li>
                                <li className='my-2'><strong>Wayfinding:</strong> Guide passengers through the facility.</li>
                                <li className='my-2'><strong>Advertising:</strong> Showcase promotions and local businesses.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/img/healthcare.jpg`}
                                alt="Advertising"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className='text-2xl my-4'>Education</h3>
                            <ul className="list-disc pl-5">
                                <li className='my-2'><strong>Digital Announcements:</strong> Share important school news and updates.</li>
                                <li className='my-2'><strong>Interactive Learning Tools:</strong> Provide educational content and interactive lessons.</li>
                                <li className='my-2'><strong>Wayfinding:</strong> Help students and visitors navigate the campus.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/img/education.jpg`}
                                alt="Advertising"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className='text-2xl my-4'>Corporate</h3>
                            <ul className="list-disc pl-5">
                                <li className='my-2'><strong>Digital Noticeboards:</strong> Display company announcements and updates.</li>
                                <li className='my-2'><strong>Meeting Room Displays:</strong> Manage room bookings and schedules.</li>
                                <li className='my-2'><strong>Employee Engagement:</strong> Share motivational content and company news.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/img/corporate.jpg`}
                                alt="Advertising"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className='text-2xl my-4'>Retail</h3>
                            <ul className="list-disc pl-5">
                                <li className='my-2'><strong>Promotional Displays:</strong> Highlight special offers and new products.</li>
                                <li className='my-2'><strong>Interactive Kiosks:</strong> Provide product information and self-service options.</li>
                                <li className='my-2'><strong>Wayfinding:</strong> Help customers navigate the store.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/img/led.jpg`}
                                alt="Advertising"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
                        {/* Content Section */}
                        <div className="flex-1">
                            <h3 className='text-2xl my-4'>Hospitality</h3>
                            <ul className="list-disc pl-5">
                                <li className='my-2'><strong>Digital Concierge:</strong> Offer information about hotel amenities and local attractions.</li>
                                <li className='my-2'><strong>Interactive Wayfinding:</strong> Guide guests through the property.</li>
                                <li className='my-2'><strong>Event Displays:</strong> Showcase schedules and information for conferences and events.</li>
                            </ul>
                        </div>

                        {/* Image Section */}
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/img/hospitality.jpg`}
                                alt="Advertising"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;