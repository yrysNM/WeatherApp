import {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Navigation} from 'swiper';

import {CustomInputLayout} from '../../components/layouts/customInputLayout';

import {ReactComponent as DateIcon} from '../../assets/icons/myWeather.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import './addReport.scss';

export const AddReport = () => {
  return (
    <div className="add-report">
      <p className="title-justFw500 title_page">Add report</p>

      <WeatherDataTypes />
      <WeatherDataDescription />
      <button className="btn btn-edit" style={{marginRight: 0}}>
        <span className="signInUpBtnSpan">Post</span>
      </button>
    </div>
  );
};

export const WeatherDataTypes = () => {
  return (
    <div className="add-report__weatherInfo">
      <div className="add-report__weatherInfo_block">
        <div className="weather_temp">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            mousewheel={true}
            direction="horizontal"
            modules={[Mousewheel, Navigation]}
          >
            <SwiperSlide>10</SwiperSlide>
            <SwiperSlide>20</SwiperSlide>
            <SwiperSlide>30</SwiperSlide>
            <SwiperSlide>40</SwiperSlide>
          </Swiper>
          <div className="weather_temp-type">C°</div>
        </div>
      </div>
      <div className="add-report__weatherInfo_block">
        <div className="weather_temp">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
            mousewheel={true}
            direction="horizontal"
            modules={[Mousewheel, Navigation]}
          >
            <SwiperSlide>Rainny</SwiperSlide>
            <SwiperSlide>Sunny</SwiperSlide>
            <SwiperSlide>Dramatic Cloudy</SwiperSlide>
            <SwiperSlide>Wend</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export const WeatherDataDescription = () => {
  const [textareaLengthCounter, setTextareaLengthCounter] = useState(0);

  return (
    <div className="add-report__descr">
      <CustomInputLayout
        labelText="Weather description"
        htmlFor="weather_description"
        isBlur={{
          active: Boolean(textareaLengthCounter),
          typeInput: 'weather_description',
        }}
      >
        <textarea
          id="weather_description"
          name="weather_description"
          maxLength={500}
          placeholder="..."
          className="textarea-weather"
          onChange={(e) => setTextareaLengthCounter(e.target.value.length)}
        ></textarea>
        <span className="sub-title textarea-counter">
          {textareaLengthCounter}/500
        </span>
      </CustomInputLayout>
    </div>
  );
};
