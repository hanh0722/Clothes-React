import React, { useReducer, useRef } from "react";
import styles from "./ViewUser.module.scss";
import classes from "../../BlogAdmin/BlogAdmin.module.scss";
import p1 from "../../../img/16-13-avatar.png";
import Badge from "./Badge/Badge";
import ToggleButton from "./ToggleButton/ToggleButton";
import Container from "../container/Container";
import Input from "../UI/Input";
const userReducer = (state, action) => {
  switch (action.type) {
    case "IS_BANNED":
      return {
        isBanned: !state.isBanned,
        role: state.role
      };
    case 'CHANGE_ROLE':
      return {
        isBanned: state.isBanned,
        role: action.payload
      }
    default:
      return {
        isBanned: false,
        role: state.role
      };
  }
};

const ViewUser = ({ data }) => {
  const inputRefName = useRef();
  const inputRefAge = useRef();
  const inputRefEmail = useRef();
  const inputRefRole = useRef();
  const [state, dispatch] = useReducer(userReducer, {
    isBanned: false,
    role: data.priority
  });
  const isBannedHandler = () => {
    dispatch({
      type: "IS_BANNED",
    });
  };
  const onChangeRoleHandler = (event) => {
    dispatch({
      type: "CHANGE_ROLE",
      payload: Boolean(event.target.value)
    });
    console.log(Boolean(event.target.value));
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Container>
        <div className={`${classes.title} ${styles.title}`}>
          User Information <span>#{data.email}</span>
        </div>
        <form onSubmit={submitHandler} className={styles.form}>
          <div className={styles["left-side"]}>
            <Badge checkActive={!state.isBanned} />
            <div className={styles.img}>
              <img src={p1} loading="lazy" alt="" />
            </div>
            <div className={styles.banned}>
              <div className={styles["text-banned"]}>
                <p>Banned</p>
                <p>Apply disable account</p>
              </div>
              <ToggleButton
                isBannedHandler={isBannedHandler}
                banned={state.isBanned}
              />
            </div>
          </div>
          <div className={styles["right-side"]}>
            <div className={styles["form-submit"]}>
              <div className={styles.left}>
                <Input
                  ref={inputRefName}
                  input={{
                    type: "text",
                    label: "Full Name",
                    id: "full-name",
                    placeholder: "Name...",
                    defaultValue: data.name,
                  }}
                />
                <Input
                  ref={inputRefAge}
                  input={{
                    type: "number",
                    label: "Age",
                    id: "age",
                    defaultValue: data.age,
                    min: "1",
                    max: "100",
                  }}
                />
              </div>
              <div className={styles.right}>
                <label htmlFor="role">Role</label>
                <select
                  ref={inputRefRole}
                  id="role"
                  value={state.role === true ? "Admin" : "Customer"}
                  onChange={onChangeRoleHandler}
                >
                  <option value="true">Admin</option>
                  <option value="false">Customer</option>
                </select>
                <Input
                  ref={inputRefEmail}
                  input={{
                    type: "email",
                    label: "Email",
                    id: "email",
                    defaultValue: data.email,
                  }}
                />
              </div>
            </div>
            <div className={styles["submit-button"]}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default ViewUser;
