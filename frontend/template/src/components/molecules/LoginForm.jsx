import React, { useState } from "react";
import Label from "../atoms/Label/Label";
import InputField from "../atoms/InputField/InputField";
import Button from "../atoms/Button/Button";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email">Email</Label>
        <InputField
          type="email"
          placeholder="Enter you email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
