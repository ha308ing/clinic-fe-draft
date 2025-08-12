import styles from "./Button.module.css";

interface IButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

export default Button;
