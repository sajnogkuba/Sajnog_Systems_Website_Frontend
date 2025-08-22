import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ProcessPage from "./ProcessPage";
import AboutUsPage from "./AboutUsPage";

const MainPage = () => {
    return (
        <div className='bg-primary'>
            <section id="home" className="h-screen flex items-center justify-center">
                <HomePage/>
            </section>
            <section id="about" className="h-screen flex items-center justify-center">
                <AboutUsPage/>
            </section>
            <section id="process" className="h-screen flex items-center justify-center">
                <ProcessPage/>
            </section>
            <section id="contact" className="h-screen flex items-center justify-center">
                <ContactPage/>
            </section>
        </div>
    );
}
export default MainPage;