import "./SignIn.css";

function SignIn() {
  return (
    <main>
      <div class="big-container-sign-in">
        <div class="small-container-sign-in">
          <span class="text-sign-in">SIGN IN</span>
          <input
            type="email"
            placeholder="Email adress"
            class="sign-in-email"
          />
          <input
            type="password"
            placeholder="Password"
            class="sign-in-password"
          />
          <button class="button-sign-in">SIGN IN</button>
          <span class="text-help">Need help with your password?</span>
          <div class="line"></div>
          <span class="new-account-text">Don't have an account?</span>
          <button class="button-create-account">CREATE AN ACCOUNT</button>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
