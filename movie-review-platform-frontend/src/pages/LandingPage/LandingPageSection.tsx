import { FC } from "react";
import { imageData } from "../../interfaces/imageData.interface";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

interface Props {
  title: string;
  imageData: imageData[];
  delay?: number;
  loginRequired: boolean;
}

const LandingPageSection: FC<Props> = ({
  title,
  imageData,
  delay = 850,
  loginRequired,
}) => {
  return (
    <section className="text-white text-center mt-8">
      {!loginRequired}
      <h2 className="mx-auto font-olive-village text-4xl w-[75%] border-b-2 border-secondary-bg mb-2">
        {title}
      </h2>
      {/* ONLY FOR TESTING PURPOSES */}
      {!loginRequired && (
        <div className="mb-12 mt-8 mx-12 flex gap-x-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={100}
            freeMode={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: delay,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              540: { slidesPerView: 2, centeredSlides: false },
              760: { slidesPerView: 3, centeredSlides: false },
              920: { slidesPerView: 5, centeredSlides: false },
            }}
            modules={[FreeMode, Autoplay]}
          >
            <SwiperSlide>
              <MovieCard
                imgUrl={imageData[0].imageUrl}
                title={imageData[0].title}
                releaseDate={imageData[0].releaseDate}
              ></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard
                imgUrl={imageData[0].imageUrl}
                title={imageData[0].title}
                releaseDate={imageData[0].releaseDate}
              ></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard
                imgUrl={imageData[0].imageUrl}
                title={imageData[0].title}
                releaseDate={imageData[0].releaseDate}
              ></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard
                imgUrl={imageData[0].imageUrl}
                title={imageData[0].title}
                releaseDate={imageData[0].releaseDate}
              ></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard
                imgUrl={imageData[0].imageUrl}
                title={imageData[0].title}
                releaseDate={imageData[0].releaseDate}
              ></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard
                imgUrl={imageData[0].imageUrl}
                title={imageData[0].title}
                releaseDate={imageData[0].releaseDate}
              ></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard
                imgUrl={imageData[0].imageUrl}
                title={imageData[0].title}
                releaseDate={imageData[0].releaseDate}
              ></MovieCard>
            </SwiperSlide>
            <SwiperSlide>
              <MovieCard
                imgUrl={imageData[0].imageUrl}
                title={imageData[0].title}
                releaseDate={imageData[0].releaseDate}
              ></MovieCard>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
      {loginRequired && (
        <button
          type="button"
          className="my-12 text-white font-semibold mx-2 bg-button-primary-bg w-36 h-12 text-xl rounded-xl border-2 border-black hover:text-black hover:bg-primary hover:border-secondary transition ease-in-out duration-500"
        >
          Login to view
        </button>
      )}
    </section>
  );
};

export default LandingPageSection;
