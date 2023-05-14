import {useNavigate} from 'react-router-dom';
import {fetchUserRegister} from '../../api/auth';
import {AuthTemplate} from '../../components/AuthTemplate';
import {useAppDispatch} from '../../hooks/redux.hook';

export const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="authBlock">
      <div className="card">
        <h1 className="title-fw500">Register</h1>

        <AuthTemplate
          isLogin={false}
          getValueInput={(v: {
            email: string;
            password: string;
            username?: string;
          }) => {
            if (v.username !== undefined && typeof v.username === 'string')
              dispatch(
                fetchUserRegister(
                  v as {username: string; email: string; password: string}
                )
              ).then(() => navigate('/', {replace: false}));
          }}
        />
      </div>
    </div>
  );
};
