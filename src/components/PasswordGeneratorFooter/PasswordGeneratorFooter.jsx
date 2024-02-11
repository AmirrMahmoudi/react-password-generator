import s from "./style.module.css";
import copyPaseIcon from "../../assets/copy-paste.svg";
export function PasswordGeneratorFooter(props) {
  const saveInClipboard = () => {
    navigator.clipboard.writeText(props.password);
  };
  return (
    <div className={s.root} onClick={saveInClipboard}>
      <div>{props.password}</div>
      <img className={s.icon} src={copyPaseIcon} alt="Copy pase icon" />
    </div>
  );
}
