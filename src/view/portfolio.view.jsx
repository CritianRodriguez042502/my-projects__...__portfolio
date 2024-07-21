import { useState, useEffect } from 'react';
import { GridLoader } from 'react-spinners';

// Components
import { AboutMe, Navbar, Footer, Skills, Education, Projects } from '@/components/index.js';

// Util
import { activate } from '@/utils/activate.js';

export const Portfolio = () => {
    const [showPortfolio, setShowPortfolio] = useState(false);

    useEffect(() => {
        activate();

        setTimeout(() => {
            setShowPortfolio(true);
        }, 2500);
    }, []);

    return showPortfolio ? (
        <>
            <Navbar />
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
            <Footer />
        </>
    ) : (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <GridLoader size={27} color="#6E07F3" />
            </div>
        </>
    );
};
