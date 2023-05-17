import {ReportWeatherInformationBlock} from '../../components/Blocs/ReportWeatherInformationBlock';
import {ErrorMessage} from '../../components/ErrorMessage';
import {Loading} from '../../components/Loading';
import {SubHeader} from '../../components/SubHeader';
import {useAppSelector} from '../../hooks/redux.hook';
import {useGetAllReportsQuery} from '../../redux/services/allReports';

const Reports = () => {
  const {user} = useAppSelector((state) => state.currentUser);

  const {
    data: reportsData,
    isFetching: isFetchingReports,
    error,
  } = useGetAllReportsQuery({
    hour: new Date().getHours(),
    userId: user?.userId,
  });

  if (isFetchingReports) return <Loading />;

  if (error) return <ErrorMessage />;

  return (
    <div className="reports">
      <SubHeader />

      <p className="title-justFw500 title_page" style={{marginTop: 30}}>
        Reports
      </p>

      <div className="reports__list">
        {reportsData?.map((report) => (
          <ReportWeatherInformationBlock
            key={report.reportId}
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
        ))}
      </div>
    </div>
  );
};

export {Reports};
