import Coursecontent from "../components/coursecontent";
import Header from "../components/header";
import Input from "../components/input";
import Output from "../components/output";
import '../styles/main.css'

function Course() {
    return (
        <main>
            <Header />
            <section className="course-template-row">

                <section className="course-content-column">
                    <Coursecontent />
                </section>
                <section className="course-input-output-column">
                    <section className="course-input-row">
                        <Input />
                    </section>
                    <section className="course-output-row">
                        <Output />
                    </section>
                </section>
            </section>
        </main>
    );
}

export default Course;