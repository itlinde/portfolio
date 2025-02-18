import ProjectBox from './project-card.js'
import Image from 'next/image'

export default function Page() {
    return (
    <div className="flex flex-col px-7 max-w-screen-xl mx-auto justify-center mb-36">
        <h2 className="block py-7 place-self-center leading-10 text-center">personal projects</h2>
        <div className="flex flex-wrap justify-center">
            <ProjectBox imageSrc={"/images/lewsworkshop3.jpg"}
                        title={"Lew's Workshop"}
                        techStack={"React / Next.js / MongoDB / Tailwind CSS / Figma"}
                        info={"Make your own jewelry! A site where you can create custom beaded jewelry and get it made."}
                        date={"01/2025 - Present"}
                        githubLink={"https://github.com/itlinde/lewsworkshop"}
                        projectLink={"https://www.lewswork.shop/"} />
            <ProjectBox imageSrc={"/images/capcap.png"}
                        title={"CapCap"}
                        techStack={"HTML / CSS / Git / Figma / Flask"}
                        info={"A focus aid using computer vision, where a capybara gets mad if you look away from your screen for too long."}
                        date={"11/2024"}
                        githubLink={"https://github.com/byeung05/CapCap"} 
                        projectLink={"https://devpost.com/software/capcap-8xjrw7"} />
            <ProjectBox imageSrc={"/images/mastery-tracker-mockup.png"}
                        title={"Mastery Tracker"}
                        techStack={"Swift / SwiftUI / SwiftData / Figma"}
                        info={"A tracker to help students monitor understanding of a course's material and focus study time on areas needing improvement."}
                        date={"05/2024 - 08/2024"}
                        githubLink={"https://github.com/itlinde/mastery-tracker-app"} 
                        projectLink={""} />
            <ProjectBox imageSrc={"/images/pomo-timer-2.png"}
                        title={"PomoTimer"}
                        techStack={"Swift / SwiftUI / Figma"}
                        info={"A simple pomodoro timer that allows users to set intentions and/or goals for each study session."}
                        date={"05/2024 - 07/2024"}
                        githubLink={"https://github.com/itlinde/pomodoro-timer-app"} 
                        projectLink={""} />
        </div>
    </div>
    );
}