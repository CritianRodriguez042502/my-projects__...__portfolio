import style from './work-experience-style.module.css';

export const WorkExperience = () => {
    console.log(style);

    return (
        <>
            <main className={style.initialContainer}>
                <h1 role="title"> Work Experience</h1>

                <aside className={style.workExperienceContainer}>
                    <div role="job">
                        <h3> Frontend Developer </h3>
                        <h4> Funnelchat </h4>
                        <p> Present </p>
                    </div>

                    <div role="description">
                        <p>
                            I played a key role in developing essential features for Funnelchat,
                            focusing on scalable and user-friendly solutions for WhatsApp contact
                            management and automation. Using React, Tailwind CSS, and Node.js, I
                            optimized workflows, integrated APIs, and built reusable components to
                            enhance functionality and maintainability across the platform.
                        </p>
                    </div>

                    <span className={style.circule}> </span>
                </aside>
            </main>
        </>
    );
};
