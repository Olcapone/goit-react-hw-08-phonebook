import s from "./Login.module.css";

const Login = () => {
  return (
    <div className={s.container}>
      <form className={s.form}>
        <label className={s.formLabel}>
          <input
            name="email"
            type="email"
            placeholder="email"
            className={s.formControl}
          />
        </label>
        <label className={s.formLabel}>
          <input
            name="password"
            type="password"
            placeholder="password"
            className={s.formControl}
          />
        </label>

        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
