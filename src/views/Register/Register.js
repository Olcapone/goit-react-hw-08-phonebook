import s from "./Register.module.css";

const Register = () => {
  return (
    <div className={s.container}>
      <form className={s.form}>
        <label className={s.formLabel}>
          <input
            name="name"
            type="text"
            placeholder="name"
            className={s.formControl}
          />
        </label>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
