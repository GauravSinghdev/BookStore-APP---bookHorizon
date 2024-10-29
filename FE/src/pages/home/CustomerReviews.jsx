import React from "react";
import { reviews } from "../../utils/reviews"; // Import the reviews data

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Avatar } from "@mui/material";

const CustomerReviews = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Customer Reviews</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12 px-5 border-2">
              {/* Review Content */}
              <div className="py-4">
                <h3 className="text-lg font-medium mb-4">{review.name}</h3>
                <div className="flex items-center mb-4">
                  {/* Render stars based on the rating */}
                  {Array.from({ length: review.rating }, (_, index) => (
                    <span key={index} className="text-primary">★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }, (_, index) => (
                    <span key={index} className="text-gray-300">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>

              {/* User Image */}
              {/* <div className="flex-shrink-0">
                <img
                  src={review.image}
                  alt={review.name}
                  className="object-cover" // Avatar size
                />
              </div> */}
              <Avatar alt={review.name} src={review.image} sx={{ width: 150, height: 150 }}/>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
