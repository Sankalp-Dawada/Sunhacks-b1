import '../styles/main.css'

function Signup(){
    return(
        <>
        <section>
            <h1>SignUp</h1>
            <div>

            <label htmlFor="Username" className="signup-label">Username:</label>
            <input type="text" name="username" className="signup-input" required/>
            </div>
            <div>
            <label htmlFor="Email" className="signup-label">Email:</label>
            <input type="email" className="signup-input" required/>

            </div>
            <div>
            <label htmlFor="Password" className="signup-label">Password:</label>
            <input type="text" name="password" className="signup-input" required/>

            </div>
            <div>
            <a href="/login">Already have an account Login</a>
            </div>
            <div>

            <button type="submit" className="signup-button">Submit</button>
            </div>
        </section>
        </>
    );
}

export default Signup;