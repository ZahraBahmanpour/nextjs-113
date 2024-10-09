import React from "react";

export default function LoginPage() {
  return (
    <div>
      <form>
        <label>
          Username
          <input type="text" id="username" name="username" />
        </label>
        <br />
        <label>
          Password
          <input type="password" id="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
