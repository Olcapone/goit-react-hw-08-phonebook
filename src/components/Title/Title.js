import s from "./Title.module.css";

const Title = ({ name }) => {
  return <h2 className={s.mainTitle}>{name}</h2>;
};

export default Title;
