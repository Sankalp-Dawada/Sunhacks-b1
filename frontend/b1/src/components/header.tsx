import '../styles/main.css'

function Header() {
    return (
            <main className='header-main-row'>
                <section className='header-title-row'>
                <div className='header-title'>
                    Shixa
                </div>
                </section>
                <section className='header-button-row'>
                    <button type="submit" className='header-login-button'>Login</button>
<button type="submit" className='header-signup-button'>
                        Signup
                    </button>

<button>Logout</button>

                    
                </section>
            </main>
    );
}

export default Header;