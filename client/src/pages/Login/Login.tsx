import {useNavigate} from 'react-router-dom';
import {fetchUserLogin} from '../../api/auth';
import {AuthTemplate} from '../../components/AuthTemplate';
import {useAppDispatch} from '../../hooks/redux.hook';

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="authBlock">
      <div className="card">
        <h1 className="title-fw500">Login</h1>

        <AuthTemplate
          isLogin={true}
          getValueInput={(v: {email: string; password: string}) =>
            dispatch(fetchUserLogin(v)).then(() =>
              navigate('/', {replace: false})
            )
          }
        />
      </div>
    </div>
  );
};
