import { ReportWeatherInformationBlock } from "../../components/Blocs/ReportWeatherInformationBlock";
import { SubHeader } from "../../components/SubHeader";

const Reports = () => {
  return (
    <div className="reports">
      <SubHeader />

      <p className="title-justFw500 title_page" style={{ marginTop: 30 }}>
        Reports
      </p>

      <div className="reports__list">
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
      </div>
    </div>
  );
};

export { Reports };
