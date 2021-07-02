import React, { useReducer, useRef} from "react";
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
        role: state.role,
      };
    case "CHANGE_ROLE":
      return {
        isBanned: state.isBanned,
        role: action.payload,
      };
    default:
      return {
        isBanned: false,
        role: state.role,
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
    role: data.priority,
  });
  const isBannedHandler = () => {
    dispatch({
      type: "IS_BANNED",
    });
  };
  const onChangeRoleHandler = (event) => {
    let result = "";
    if (event.target.value === "true") {
      result = true;
    } else if (event.target.value === "false") {
      result = false;
    }
    dispatch({
      type: "CHANGE_ROLE",
      payload: result,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !inputRefAge.current.value ||
      !inputRefEmail.current.value ||
      !inputRefName.current.value ||
      !inputRefRole.current.value
    ) {
      return;
    }
    fetch(`http://localhost:3001/user/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: inputRefName.current.value,
        age: inputRefAge.current.value,
        email: inputRefEmail.current.value,
        role: inputRefRole.current.value
      }),
    }) 
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
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
                  onChange={onChangeRoleHandler}
                  value={!state.role ? 'false' : 'true'}
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

export default React.memo(ViewUser);
