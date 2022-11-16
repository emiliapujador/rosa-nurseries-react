import "./SignIn.css";

function SignIn() {
  return (
    <main>
      <div className="big-container-sign-in">
        <div className="small-container-sign-in">
          <span className="text-sign-in">SIGN IN</span>
          <input
            type="email"
            placeholder="Email adress"
            className="sign-in-email"
          />
          <input
            type="password"
            placeholder="Password"
            className="sign-in-password"
          />
          <button className="button-sign-in">SIGN IN</button>
          <span className="text-help">Need help with your password?</span>
          <div className="line"></div>
          <span className="new-account-text">Don't have an account?</span>
          <button className="button-create-account">CREATE AN ACCOUNT</button>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
