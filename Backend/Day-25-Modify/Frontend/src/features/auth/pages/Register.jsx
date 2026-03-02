const Register = () => {
  return (
    <main className="register-page">
      <div className="register-container">
        <h1>register</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="enter email"
          />
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="enter username "
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="enter password "
          />
          <button className="btn">register</button>
        </form>
      </div>
    </main>
  );
};

export default Register;
