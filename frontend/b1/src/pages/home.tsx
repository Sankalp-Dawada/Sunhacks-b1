import Header from '../components/header'
import Coursecard from '../components/coursecard'
import Hero from '../components/Hero'
import '../styles/main.css'

function Home(){
    return(
        <>
        {/*Header Nav Bar */}
        <Header/>
        
        {/* Hero Section */}
        <section>
        <Hero/>
        </section>
        
        {/* Popular Courses */}
        <section>
            <h1>Popular Courses</h1>
            <Coursecard/>

        </section>

        {/* Footer */}
        <section></section>
        </>
    );
}

export default Home;