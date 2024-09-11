import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
                <div>2</div>
                <div>3</div>
            </Slider>
        </div>
    );
};

export default Carousel;
