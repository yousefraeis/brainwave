import ButtonGradient from './assets/svg/ButtonGradient';
import {
    Header,
    Hero,
    Benfits,
    Collaboration,
    Services,
    Pricing,
    Roadmap,
    Footer,
} from './sections';

const App = () => {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero />
                <Benfits />
                <Collaboration />
                <Services />
                <Pricing />
                <Roadmap />
                <Footer />
            </div>
            <ButtonGradient />
        </>
    );
};

export default App;
