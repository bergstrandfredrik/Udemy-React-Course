import styles from "./modal.module.css";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-box"]}>
        <p>Invalid input</p>
        <button>Back</button>
      </div>
    </div>
  );
};

export default Modal;
