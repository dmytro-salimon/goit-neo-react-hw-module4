import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <p className={css.errMessage}>{message}</p>
);

export default ErrorMessage;
