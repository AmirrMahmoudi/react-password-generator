import s from "./style.module.css";
import copyPaseIcon from "../../assets/copy-paste.svg";
export function PasswordGeneratorFooter(props) {
  return (
    <div className={s.root}>
      <div>{props.password}</div>
      <img className={s.icon} src={copyPaseIcon} alt="Copy pase icon" />
    </div>
  );
}
