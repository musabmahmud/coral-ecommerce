import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Card from '../../components/Card';

const BestSellers = () => {



    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("products.json");
                const data = await response.json();

                let sortedItems = [...data];
                sortedItems = data.filter((product) => product.status === "Best Selers");

                setProducts(data);

            } catch (error) {
                console.log("Error Fetching Data", error);
            }
        }

        fetchData();
    },[])


    return (
        <section className='max-w-screen-2xl mx-auto container xl:px-28 px-4'>
            <div className='text-center'>
                <h2 className="title">Best Sellers</h2>
                <p className="text-black-default/75 capitalize md:w-2/3 mx-auto mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per </p>
            </div>
            {/* products slider */}
            <div>
                <Swiper
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        products.slice(0, 8).map((product) => (
                            <SwiperSlide key={product.id}><Card product={product} /></SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </section >
    )
}

export default BestSellers