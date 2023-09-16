import styles from "./UserInput.module.css";

const UserInput = () => {
  return (
    <div className={styles.box}>
      <form>
        <div className={styles.input}>
          <label>Username</label>
          <input />
        </div>
        <div className={styles.input}>
          <label>Age(Years)</label>
          <input type="number" />
        </div>
        <button className={styles.button}>Add User</button>
      </form>
    </div>
  );
};

export default UserInput;
