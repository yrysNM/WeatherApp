import { Link } from "react-router-dom";
import { ReportWeatherInformationBlock } from "../../components/Blocs/ReportWeatherInformationBlock";
import { SubHeader } from "../../components/SubHeader";

import "./myWeather.scss";

export interface ICalendarProps {}

export function MyWeather(props: ICalendarProps) {
  return (
    <div className="my-weather">
      <SubHeader />

      <p className="title-justFw500 title_page" style={{ marginTop: 30 }}>
        My Weathers
      </p>

      <div className="my-weather__reports">
        <ReportWeatherInformationBlock
          likeNumber={142}
          customWeatherText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque provident non corporis ullam asperiores temporibus, quasi error iure consequuntur quae architecto suscipit maiores distinctio culpa illo harum delectus vero in."
          moreInformation={{
            created: "Apr 30 2023 at 14:30:20",
            edit: "Apr 30 2023 at 14:30:20",
          }}
          weatherTemp={27}
          weatherDescription="Rainny"
          isConfirmedAdmin={true}
        />
        <ReportsMethod id={1} />
      </div>

      <div className="my-weather__reports">
        <ReportWeatherInformationBlock
          likeNumber={0}
          customWeatherText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque provident non corporis ullam asperiores temporibus, quasi error iure consequuntur quae architecto suscipit maiores distinctio culpa illo harum delectus vero in."
          moreInformation={{
            created: "Apr 30 2023 at 14:30:20",
          }}
          weatherTemp={13}
          weatherDescription="Rainny"
        />
        <ReportsMethod id={1} />
      </div>
    </div>
  );
}

const ReportsMethod = (props: { id: number }) => {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Link to={`/edit/report/${props.id}`}>
          <span className="icon-edit">
            <i className="ion-edit" />
          </span>
        </Link>
      </div>

      <span className="icon-edit">
        <i className="ion-trash-a" />
      </span>
    </div>
  );
};
