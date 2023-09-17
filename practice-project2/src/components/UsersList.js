import styles from "./UsersList.module.css";

const UsersList = (props) => {
  const RemoveUserHandler = (user) => {
    props.removeUser(user);
  };

  return (
    <ul>
      {props.listOfUser.map((user) => {
        let key = props.listOfUser.findIndex(
          (u) => u.userName === user.userName
        );
        return (
          <li
            className={styles.box}
            key={key}
            onClick={() => RemoveUserHandler(key)}
          >
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
