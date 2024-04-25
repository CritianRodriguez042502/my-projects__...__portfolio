import { useState, useEffect } from 'react';
import { GridLoader } from 'react-spinners';
import { AboutMe, Navbar, Footer, Skills,Education, Projects } from '../components/index.js';

export default function Portfolio() {
    const [view, setView] = useState('none');
    const [opacity, setOpacity] = useState(0);

    // Loader initial
    useEffect(() => {
        setTimeout(() => {
            setView('initial');
        }, 2000);
    }, [view]);

    useEffect(() => {
        if (view === 'initial') {
            setTimeout(() => {
                setOpacity(1);
            }, 150);
        }
    }, [view, opacity]);

    return (
        <main>
            {view === 'initial' ? (
                <aside style={{ opacity: opacity }}>
                    <Navbar />
                    <AboutMe />
                    <Skills />
                    <Education />
                    <Projects />
                    <Footer />
                </aside>
            ) : (
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
            )}
        </main>
    );
}
