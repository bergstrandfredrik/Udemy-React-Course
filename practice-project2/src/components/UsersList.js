import styles from "./UsersList.module.css";

const UsersList = () => {
  return (
    <ul>
      <li className={styles.box}>
        <p>Fredrik (32 years old)</p>
      </li>
      <li className={styles.box}>
        <p>Max (31 years old)</p>
      </li>
      <li className={styles.box}>
        <p>John (56 years old)</p>
      </li>
      <li className={styles.box}>
        <p>Jane (54 years old)</p>
      </li>
    </ul>
  );
};

export default UsersList;
