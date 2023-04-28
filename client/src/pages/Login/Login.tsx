import { AuthTemplate } from "../../components/AuthTemplate";

export const Login = () => {
  return (
    <div className="authBlock">
      <div className="card">
        <h1 className="title-fw500">Login</h1>

        <AuthTemplate
          isLogin={true}
          getValueInput={(v: { email: string; password: string }) =>
            console.log(v)
          }
        />
      </div>
    </div>
  );
};
