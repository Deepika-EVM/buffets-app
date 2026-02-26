import React, { useState, useEffect } from "react";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true); // default to login form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loggedUser, setLoggedUser] = useState(null);

  // check if user is already logged in on mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedUser(user);
    }
  }, []);

  const createAccount = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!password) {
      alert("Please enter a password");
      return;
    }
    const role = document.querySelector("select").value || "User"; // get role
    const userData = { fullName, email, password, role };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Account created! You can now login.");
    setIsLogin(true); // switch to login form
  };

  const login = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (
      storedUser &&
      storedUser.email === loginEmail &&
      storedUser.password === loginPassword
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // persist session
      setLoggedUser(storedUser); // update state
      window.location.href = "/"; // redirect to home page
    } else {
      alert("Invalid email or password!");
    }
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedUser(null);
    setIsLogin(true); // show login form after logout
  };

  // If user is already logged in, show account details
  if (loggedUser) {
    return (
      <div className="account-container">
        <h2>Account Details</h2>
        <p><strong>Name:</strong> {loggedUser.fullName}</p>
        <p><strong>Email:</strong> {loggedUser.email}</p>
        <p><strong>Role:</strong> {loggedUser.role}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  // Else show login/create forms
  return (
    <div className="account-container">
      {isLogin ? (
        <div className="login-form-container">
          <h2>Login</h2>
          <form onSubmit={login} className="account-form">
            <input
              type="email"
              placeholder="Email Address"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => setIsLogin(false)}
            >
              Create Account
            </span>
          </p>
        </div>
      ) : (
        <div className="create-account-container">
          <h2>Create Account</h2>
          <form onSubmit={createAccount} className="account-form">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <select required>
              <option value="">Select Role</option>
              <option value="User">User</option>
              <option value="Restaurant Owner">Restaurant Owner</option>
            </select>
            <button type="submit">Create Account</button>
          </form>
          <p>
            Already have an account?{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => setIsLogin(true)}
            >
              Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Account;