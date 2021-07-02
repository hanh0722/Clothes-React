import React from "react";
import styles from "./scss/BasicUser.module.scss";
import Customer from "./Customer";
const BasicUser = ({ users, setUserHandler }) => {
  const renderUsers = users.map((items) => {
    let priority = "Customer";
    let background = '#fff';
    if (!items.priority) {
      priority = "Customer";
    } else {
      priority = "Admin";
      background = '#f8f8f8';
    }
    return (
      <Customer
        key={items.id}
        name={items.name}
        age={items.age}
        email={items.email}
        priority={priority}
        background={background}
        id={items.id}
        deleteUserHandler={setUserHandler}
      />
    );
  });
  return (
    <div className={styles["data-config"]}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Priority</th>
          </tr>
          {users.length > 0 ? (
            renderUsers
          ) : (
            <tr>
              <td colSpan="4">No user exited!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BasicUser;
