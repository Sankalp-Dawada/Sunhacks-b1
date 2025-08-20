import '../styles/main.css'

function Login(){
    return (
        <>
        <section>
            <h1>Login</h1>
            <div>
            <label htmlFor="Username/email" className="login-label">Username/Email:</label>
            <input type="text" name="username/email" className="login-input" required/>
            </div>
            <div>
            <label htmlFor="Password" className="login-label">Password:</label>
            <input type="text" name="password" className="login-input" required/>
            </div>
            <div>
            <a href="/signup">Don't have an account SignUp</a>
            </div>
            <div>
            <button type="submit" className="login-button">Submit</button>
            </div>
        </section>
        </>
    );
}



export default Login;