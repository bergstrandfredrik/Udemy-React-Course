import styles from "./modal.module.css";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles["modal-box"]}>
        <div className={styles["modal-header"]}>Invalid input</div>
        <div className={styles["modal-div"]}>Please enter a valid age (>0)</div>
        <div className={styles["modal-button"]}>
          <button>Okay</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
