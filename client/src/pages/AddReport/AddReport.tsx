import {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Navigation} from 'swiper';

import {axios} from '../../api/axios';
import {CustomInputLayout} from '../../components/layouts/customInputLayout';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import './addReport.scss';
import {useAppSelector} from '../../hooks/redux.hook';
import {useNavigate} from 'react-router-dom';
import {useGetUserReportsQuery} from '../../redux/services/userReports';

export const AddReport = () => {
  const navigate = useNavigate();
  const [tempData, setTempData] = useState<number>(283);
  const [titleData, setTitleData] = useState<string>('clear sky');
  const [descrData, setDescrData] = useState<string>('');
  const [textareaLengthCounter, setTextareaLengthCounter] = useState(0);
  const {city} = useAppSelector((state) => state.cityChange.location);
  const {user} = useAppSelector((state) => state.currentUser);
  const {refetch} = useGetUserReportsQuery({
    hour: new Date().getHours(),
    userId: user?.userId,
  });

  function handleSubmit() {
    axios
      .post(
        `${import.meta.env.VITE_BASE_JAVA_API_URL}/reports?userId=${
          user?.userId
        }`,
        {
          city,
          temperature: tempData,
          weatherDescription: descrData,
          title: titleData,
        }
      )
      .then(() => {
        refetch();
        navigate(`/weather/${user?.userLogin}`, {replace: true});
      });
  }

  return (
    <div className="add-report">
      <p className="title-justFw500 title_page">Add report</p>

      <div className="add-report__weatherInfo">
        <div className="add-report__weatherInfo_block">
          <div className="weather_temp">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={(index) =>
                setTempData(
                  Math.round(
                    parseInt(index.slides[index.activeIndex].innerHTML) + 273.15
                  )
                )
              }
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
              onSlideChange={(index) =>
                setTitleData(
                  index.slides[index.activeIndex].innerHTML.toLowerCase()
                )
              }
              // onSwiper={(swiper) => console.log(swiper)}
              navigation={true}
              mousewheel={true}
              direction="horizontal"
              modules={[Mousewheel, Navigation]}
            >
              <SwiperSlide>Clear sky</SwiperSlide>
              <SwiperSlide>Few clouds</SwiperSlide>
              <SwiperSlide>Scattered clouds</SwiperSlide>
              <SwiperSlide>Broken clouds</SwiperSlide>
              <SwiperSlide>shower rain</SwiperSlide>
              <SwiperSlide>Rain</SwiperSlide>
              <SwiperSlide>Thunderstorm</SwiperSlide>
              <SwiperSlide>Snow</SwiperSlide>
              <SwiperSlide>Mist</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

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
            value={descrData}
            onChange={(e) => {
              setTextareaLengthCounter(e.target.value.length);
              setDescrData(e.target.value);
            }}
          ></textarea>
          <span className="sub-title textarea-counter">
            {textareaLengthCounter}/500
          </span>
        </CustomInputLayout>
      </div>

      <button
        className="btn btn-edit"
        style={{marginRight: 0}}
        type="submit"
        onClick={(e) => {
          handleSubmit();
        }}
      >
        <span className="signInUpBtnSpan">Post</span>
      </button>
    </div>
  );
};
