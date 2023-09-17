import styles from "./UsersList.module.css";

const UsersList = (props) => {
  console.log(props.listOfUser);
  return (
    <ul>
      {props.listOfUser.map((user) => {
        return (
          <li className={styles.box} key={user.userName + user.userAge}>
            <p>
              {user.userName} ({user.userAge} years old)
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
