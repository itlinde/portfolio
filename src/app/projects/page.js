import ProjectBox from './project-card.js'
import Image from 'next/image'

// ***** TO DO: add tech stack to each project  ***** 

export default function Page() {
    return (
    <div className="flex flex-col px-7 max-w-screen-xl mx-auto justify-center mb-36">
        <h2 className="block py-7 place-self-center">personal projects</h2>
        <div className="flex flex-wrap justify-center">
            <ProjectBox imageSrc={"/images/capcap.png"}
                        title={"CapCap"}
                        info={"A focus aid using computer vision, where a capybara gets mad if you look away from your screen for too long."}
                        date={"11/2024"}
                        link={"https://github.com/byeung05/CapCap"} />
            <ProjectBox imageSrc={"/images/mastery-tracker-mockup.png"}
                        title={"Mastery Tracker"}
                        info={"A tracker to help students monitor understanding of a course's material and focus study time on areas needing improvement."}
                        date={"05/2024-08/2024"}
                        link={"https://github.com/itlinde/mastery-tracker-app"} />
            <ProjectBox imageSrc={"/images/pomo-timer-2.png"}
                        title={"PomoTimer"}
                        info={"A simple pomodoro timer that allows users to set intentions and/or goals for each study session."}
                        date={"05/2024-07/2024"}
                        link={"https://github.com/itlinde/pomodoro-timer-app"} />
        </div>
    </div>
    );
}