import { AuthTemplate } from "../../components/AuthTemplate";

export const Register = () => {
  return (
    <div className="authBlock">
      <div className="card">
        <h1 className="title-fw500">Register</h1>

        <AuthTemplate
          isLogin={false}
          getValueInput={(v: { email: string; password: string }) =>
            console.log(v)
          }
        />
      </div>
    </div>
  );
};
