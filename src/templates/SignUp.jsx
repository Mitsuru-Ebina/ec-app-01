import React, { useState, useCallback } from "react";
import { PrimaryButton, TextInput } from "../components/UIkit";

const SignUp = () => {
  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text_headline u-text-center">アカウント登録</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={true}
        label={"ユーザー名"}
        multiline={false}
        required={true}
        rows={1}
        value={username}
        type={"text"}
        onChange={inputUsername}
      />
      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <TextInput
        fullWidth={true}
        label={"パスワード（再確認）"}
        multiline={false}
        required={true}
        rows={1}
        value={confirmPassword}
        type={"password"}
        onChange={inputConfirmPassword}
      />
      <div className="center">
        <PrimaryButton
          label={"アカウントを登録する"}
          onClick={() => console.log("Clicked!")}
        />
      </div>
    </div>
  );
};

export default SignUp;
