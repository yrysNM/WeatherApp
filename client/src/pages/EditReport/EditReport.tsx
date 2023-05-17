import {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Mousewheel, Navigation} from 'swiper';

import {axios} from '../../api/axios';
import './editReport.scss';
import {CustomInputLayout} from '../../components/layouts/customInputLayout';
import {useGetUserReportsQuery} from '../../redux/services/userReports';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/redux.hook';

export const EditReport = () => {
  const navigate = useNavigate();
  const {reportId} = useParams();
  const {user} = useAppSelector((state) => state.currentUser);
  const {city} = useAppSelector((state) => state.cityChange.location);
  const {data} = useGetUserReportsQuery({
    hour: new Date().getHours(),
    userId: user?.userId,
  });

  const [tempData, setTempData] = useState<number>(0);
  const [titleData, setTitleData] = useState<string>('');
  const [descrData, setDescrData] = useState<string>('');
  const [textareaLengthCounter, setTextareaLengthCounter] = useState(0);

  useEffect(() => {
    if (reportId) {
      const filterReport = data?.filter(
        (o) => o.reportId === parseInt(reportId)
      );

      if (filterReport) {
        setDescrData(filterReport[0].weatherDescription);
        setTextareaLengthCounter(filterReport[0].weatherDescription.length);
        setTitleData(filterReport[0].title);
        setTempData(filterReport[0].temperature);
      }
    }
  }, [data]);

  function handleSubmit() {
    axios
      .put(`${import.meta.env.VITE_BASE_JAVA_API_URL}/reports/${reportId}`, {
        city,
        temperature: tempData,
        weatherDescription: descrData,
        title: titleData,
      })
      .then(() => {
        navigate(`/weather/${user?.userLogin}`);
      });
  }

  return (
    <div className="edit-report">
      <p className="title-justFw500 title_page">Edit report</p>
      <div className="edit-report__headInfo">
        <p className="edit-report__headInfo_text">Friday, Aprip 30 2023</p>
        <p className="edit-report__headInfo_text">Almaty, Kazakhstan</p>
      </div>

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
          e.preventDefault();
          handleSubmit();
        }}
      >
        <span className="signInUpBtnSpan">Save</span>
      </button>
    </div>
  );
};
