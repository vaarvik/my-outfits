import React from "react";
import "./assets/style/App.css";

function App() {
  return (
    <div className="App">
      <main className="flex-center fill-parent">
        <div className="login-container">
          <h2 className="login-heading" align="center">
            Sign in
          </h2>
          <form className="login-form" action="api/login" method="POST">
            <input
              className="username"
              type="text"
              name="username"
              align="center"
              placeholder="Username"
            ></input>
            <input
              className="password"
              type="password"
              name="password"
              align="center"
              placeholder="Password"
            ></input>
            <input
              className="submit"
              type="submit"
              align="center"
              value="Submit"
            ></input>
            <a href="#">Forgot Password?</a>
          </form>
        </div>
      </main>
      {/* <header className="App-header"></header> */}
    </div>
  );
}

export default App;
