
import ProBox from "../ProBox";
import Spotify from "../../images/spotify.png";
import Promptopia from "../../images/promptopia.png";
import './style.scss';

export function Projects() {
    return (
        <>
            <section id="projects" className="project">
                <div className="container">
                    <div className="project-content">
                        <p>portfolio</p>
                        <h3>Each project is a unique piece of development 🧩</h3>
                        <div className="projects-grid">
                            <ProBox
                                title="Spotify"
                                img={Spotify}
                                description="Fetch Spotify Playlists + Control Music playback with the Spotify API, User authentication with Spotify + NextAuth to persist user's logged in state! (Including how to use access & refresh oAuth JWT tokens), Style an awesome responsive UI with Tailwind CSS, using Recoil for state management (when switching playlists and songs)!"
                                techno1="React"
                                techno2="Tailwind CSS"
                                techno3="SCSS"
                                code="https://github.com/sahilupadhyay/spotify"
                                demo="https://spotify-eight-rouge.vercel.app/"
                                scrollY="-26%"
                                icon="🚗"
                            />

                            <ProBox
                              title="Promptopia"
                              img={Promptopia}
                              description="Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts."
                              techno1="React"
                              techno2="Next.Js"
                              code="https://github.com/sahilupadhyay/Promptopia"
                              demo="https://promptopia-blue.vercel.app//"
                              scrollY="-35%"
                              icon="🪙"
                              cName="reversed-proj"
                            />

{/*
                            <ProBox
                                title="gymate"
                                img={Gymate}
                                description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                                techno1="React"
                                techno2="Tailwind CSS"
                                code="https://github.com/stefvndev/Gymate"
                                demo="https://gymate-iota.vercel.app/"
                                scrollY="-89%"
                                icon="🏋️"
                            />

                            <ProBox
                                title="Raouf Ecommerce"
                                img={Raouf}
                                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                                techno1="React"
                                techno2="Vanila CSS"
                                code="https://github.com/stefvndev/Minimalist-E-commerce"
                                demo="https://minimalist-e-commerce.vercel.app/"
                                scrollY="-71%"
                                icon="🛒"
                                cName="reversed-proj"
                            />*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
