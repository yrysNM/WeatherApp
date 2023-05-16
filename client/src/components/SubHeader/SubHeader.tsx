import {Link} from 'react-router-dom';
import React, {useRef, useState} from 'react';
import DatePicker, {ReactDatePicker} from 'react-datepicker';

import {CustomDate} from '../../utils/helpers/CustomDate';

import {ReactComponent as CalendarIcon} from '../../assets/icons/myWeather.svg';
import {ReactComponent as SearchIcon} from '../../assets/icons/searchIcon.svg';
import 'react-datepicker/dist/react-datepicker.css';
import './subHead.scss';

const SubHeader = () => {
  const [date, setDate] = useState<Date>(new Date());
  const datePick = useRef<ReactDatePicker>(null);

  function handleDatePickerBlockClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.stopPropagation();
    datePick.current?.setOpen(true);
  }

  return (
    <React.Fragment>
      <div className="subHeader">
        <div className="subHeader-filter">
          <div className="datePicker" onClick={handleDatePickerBlockClick}>
            <span className="icon">
              <CalendarIcon />
            </span>
            <div>
              <span className="getDayName">{CustomDate.getDayName(date)}</span>
              <DatePicker
                ref={datePick}
                selected={date}
                onChange={(date) => setDate(date ?? new Date())}
                showTimeSelect={false}
                dateFormat={'MMMM d, yyyy'}
                minDate={new Date()}
                showDisabledMonthNavigation
              />
            </div>
          </div>
          <div className="location-textBlock">
            <span className="location-text">Almaty, Kazakhstan</span>
          </div>
        </div>

        <Link to={'/add/report'}>
          <span className="icon-edit">
            <i className="ion-edit" />
          </span>
        </Link>
      </div>
    </React.Fragment>
  );
};

export {SubHeader};
