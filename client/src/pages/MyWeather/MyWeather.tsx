import {Link} from 'react-router-dom';
import {ReportWeatherInformationBlock} from '../../components/Blocs/ReportWeatherInformationBlock';
import {SubHeader} from '../../components/SubHeader';

import './myWeather.scss';
import {useGetUserReportsQuery} from '../../redux/services/userReports';
import {useAppDispatch, useAppSelector} from '../../hooks/redux.hook';
import {ErrorMessage} from '../../components/ErrorMessage';
import {Loading} from '../../components/Loading';
import axios from 'axios';

export function MyWeather() {
  const {user} = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();
  const {
    refetch,
    data: userReportsData,
    isFetching,
    error,
  } = useGetUserReportsQuery({
    hour: new Date().getHours(),
    userId: user?.userId,
  });

  if (isFetching) return <Loading />;

  if (error) return <ErrorMessage />;

  return (
    <div className="my-weather" style={{marginBottom: 40}}>
      <SubHeader />

      <p className="title-justFw500 title_page" style={{marginTop: 30}}>
        My Weathers
      </p>

      {userReportsData && userReportsData.length > 0 ? (
        userReportsData?.map((report) => (
          <div className="my-weather__reports" key={report.reportId}>
            <ReportWeatherInformationBlock
              likeNumber={142}
              customWeatherText={report.weatherDescription}
              moreInformation={{
                created: `${new Date(report.createdAt)
                  .toUTCString()
                  .substring(0, 15)} at ${new Date(report.createdAt)
                  .toUTCString()
                  .substring(16, 25)} by ${report.userName}`,
                edit: `${new Date(report.lastUpdateAt)
                  .toUTCString()
                  .substring(0, 15)} at ${new Date(report.lastUpdateAt)
                  .toUTCString()
                  .substring(16, 25)}`,
              }}
              weatherTemp={Math.round(report.temperature - 273.15)}
              weatherDescription={
                report.title.charAt(0).toUpperCase() + report.title.slice(1)
              }
              isConfirmedAdmin={true}
              icon={report.icon}
            />
            {/* <ReportsMethod id={report.reportId} /> */}
            <div>
              <div style={{marginBottom: 10}}>
                <Link to={`/edit/report/${report.reportId}`}>
                  <span className="icon-edit">
                    <i className="ion-edit" />
                  </span>
                </Link>
              </div>

              <span
                className="icon-edit"
                onClick={() => {
                  axios
                    .delete(
                      `${
                        import.meta.env.VITE_BASE_JAVA_API_URL
                      }/reports/remove/${report.reportId}`
                    )
                    .then(() => refetch());
                }}
              >
                <i className="ion-trash-a" />
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="my-weather__reports">
          Sorry, but you don't have a report yet
        </div>
      )}
    </div>
  );
}

const ReportsMethod = (props: {id: number}) => {
  return (
    <div>
      <div style={{marginBottom: 10}}>
        <Link to={`/edit/report/${props.id}`}>
          <span className="icon-edit">
            <i className="ion-edit" />
          </span>
        </Link>
      </div>

      <span
        className="icon-edit"
        onClick={() => {
          axios.delete(
            `${import.meta.env.VITE_BASE_JAVA_API_URL}/reports/remove/${
              props.id
            }`
          );
          // .then(() => refetch());
        }}
      >
        <i className="ion-trash-a" />
      </span>
    </div>
  );
};
