// eslint-disable-next-line no-unused-vars
import { useRef, React } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/Home.css";
import bckgd from "../assets/Home/bckgd.jpg";
import designing from "../assets/Home/pencilgear.png";
import manufacturing from "../assets/Home/gear.png";
import racing from "../assets/Home/flag.png";
import hp1 from "../assets/Home/hp1.jpg";
import hp2 from "../assets/Home/hp2.jpg";
import hp3 from "../assets/Home/hp3.jpg";
import hp4 from "../assets/Home/hp4.jpg";
import { useNavigate } from "react-router-dom";

// import { FaMapMarked, FaPhoneAlt, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
// import { GrMail } from "react-icons/gr";

const Home = () => {
	const ref = useRef(null);

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};
	const navigate = useNavigate();
	const navigateToComp = () =>{
		navigate('/Competitions');
	};
	const navigateToTeam = () => {
        navigate('/Teams');
    };
	const navigateToAct = () => {
        navigate('/Activities');
    };
	


	return (
        <>
            <title>Home</title>
            <Navbar />
            <div className="home">
                <div className="backdiv">
                    <img src={bckgd} alt="" />
                    {/* <div className="darkenimage"></div> */}
                    <span className="head">VJTI RACING</span>
                    <div onClick={handleClick} className="scrolldown">
                        <span className="line1 common"></span>
                        <span className="line2 common"></span>
                        <span className="line3 common"></span>
                        <span className="line4 common"></span>
                    </div>
                </div>

                {/* 2nd section - Welcome to VJTI Racing */}
                <div ref={ref} className="section2">
                    <span className="text1">WELCOME TO VJTI RACING</span>
                    <span className="text2">
                        <span className="boldtext">
                            The Official SAE Collegiate Club of VJTI, Matunga
                        </span>
                        <span>
                            Established in 2008, VJTI Racing is a student
                            organization for automobile enthusiasts. It is a
                            platform for young engineers to bring their
                            innovative ideas into action that would contribute
                            for a better future. We seek to be at par with the
                            leading technology in the industry and implement
                            those in the most effective and cost cutting ways in
                            our project.
                        </span>
                    </span>
                    <div className="boxes">
                        <div className="box">
                            <img src={designing} alt="" />
                            <div className="flextitle">DESIGNING</div>
                            <span className="flexcontent">
                                We begin our journey each year by designing our
                                vehicle from scratch. Every component is
                                carefully designed, taking all the parameters
                                into consideration. The design is then subject
                                to analysis through which all the little
                                aberrations are removed
                            </span>
                        </div>
                        <div className="box">
                            <img src={manufacturing} alt="" />
                            <div className="flextitle">MANUFACTURING</div>
                            <span className="flexcontent">
                                In this phase, we take the vehicle from our
                                computer screens and bring them into reality.
                                Once every component is machined and ready,
                                everything is assembled and just like that, we
                                go from pieces of metal to one of the most
                                important inventions of our century
                            </span>
                        </div>
                        <div className="box">
                            <img src={racing} alt="" />
                            <div className="flextitle">RACING</div>
                            <span className="flexcontent">
                                Once our sweet ride is ready, we take it out to
                                compete in competitions throughout the world.
                                The thrill of competing with a car made by our
                                own hands is unparalleled.The camaraderie within
                                our team grows stronger as we share triumphs and
                                challenges.
                            </span>
                        </div>
                    </div>
                </div>

                {/* 3rd section - About Us */}
                <div className="aboutus">
                    <div className="container">
                        <span className="text1">ABOUT US</span>
                        <span className="text2">
                            VJTI Racing was established in 2008 by enthusiastic
                            automobile aficionados as a creative outlet for
                            young engineers to grow their practical skills. The
                            official SAE collegiate club of the institute, we
                            have always aimed to keep the spirit of innovation
                            and curiosity alive within budding engineers. Our
                            vision is to expand and improve the skills of
                            undergraduates through practical applications in
                            designing, fabrication, and learning management
                            beyond just classroom education.
                        </span>
                        <button onClick={navigateToTeam}>Know More</button>
                    </div>
                    <div
                        className="bgimg"
                        style={{ backgroundImage: `url(${hp1})` }}
                    ></div>
                </div>

                {/* 4th section - About VJTI */}
                <div className="aboutus aboutvjti">
                    <div className="container2">
                        <span className="text1">ABOUT VJTI</span>
                        <span className="text2">
                            Founded in 1887, Veermata Jijabai Technological
                            Institute has pioneered India’s engineering
                            education, research and training ecosystem. VJTI is
                            an academically and administratively autonomous
                            institute affiliated to the University of Mumbai,
                            financially supported by the Government of
                            Maharashtra. Located in South Mumbai, the institute
                            offers programmes in engineering and technology at
                            the diploma, degree, post-graduate and doctoral
                            levels. VJTI is known for its high-quality teaching,
                            collaborative research, industry connections and
                            strong alumni network.
                        </span>
                        <button>
                            {" "}
                            <a
                                href="https://vjti.ac.in/"
                                style={{ textDecoration: "none" , color:"white"}}
                            >
                                Know More
                            </a>
                        </button>
                    </div>
                    <div
                        className="bgimg"
                        style={{ backgroundImage: `url(${hp2})` }}
                    ></div>
                </div>

                {/* 5th section - Our Achievemnnts */}
                <div className="aboutus achievements">
                    <div className="container">
                        <span className="text1">OUR ACHIEVEMENTS </span>
                        <span className="text2">
                            VJTI Racing has a plethora of achievements to boast
                            about, with a rich history of participation in
                            national and international competitions for more
                            than a decade.
                        </span>
                        <button onClick={navigateToComp}>Know More</button>
                    </div>
                    <div
                        className="bgimg"
                        style={{ backgroundImage: `url(${hp4})` }}
                    ></div>
                </div>

                {/* 6th section - Our Achievements */}
                <div className="aboutus aboutvjti activities">
                    <div className="container2">
                        <span className="text1">OUR ACTIVITIES</span>
                        <span className="text2">
                            Currently, VJTI Racing has two teams under its wing.
                            Team Motorbreath comprises students mainly from the
                            third-year building an all-terrain vehicle, with the
                            main objective of participating in SAE BAJA
                            competitions. Team ForzaVJTI, our latest addition,
                            consists of students from the second-year,
                            established to introduce deserving youngsters to the
                            automotive world as early as possible. They will
                            work on manufacturing a go-kart, mainly to
                            participate in ISIE IKR. The club also hosts
                            workshops and events for the students of the college
                            to evoke an interest in the technical aspects of our
                            craft, and familiarise students with the topics and
                            processes involved in the manufacture of our
                            vehicles.
                        </span>
                        <button onClick={navigateToAct}>Know More</button>
                    </div>
                    <div
                        className="bgimg"
                        style={{ backgroundImage: `url(${hp3})` }}
                    ></div>
                </div>

                {/* Responsive sections 3-6 */}
                <div className="responsive">
                    <div className="whiteline"></div>
                    <div
                        className="bgimg"
                        style={{ backgroundImage: `url(${hp1})` }}
                    >
                        <div className="container one">
                            <h2>ABOUT US</h2>
                            <span>
                                VJTI Racing was established in 2008 by
                                enthusiastic automobile aficionados as a
                                creative outlet for young engineers to grow
                                their practical skills. The official SAE
                                collegiate club of the institute, we have always
                                aimed to keep the spirit of innovation and
                                curiosity alive within budding engineers. Our
                                vision is to expand and improve the skills of
                                undergraduates through practical applications in
                                designing, fabrication, and learning management
                                beyond just classroom education.
                            </span>
                            <button className="button1">Know More</button>
                        </div>
                    </div>
                    <div className="whiteline"></div>
                    <div
                        className="bgimg"
                        style={{ backgroundImage: `url(${hp2})` }}
                    >
                        <div className="container two">
                            <h2>ABOUT VJTI</h2>
                            <span>
                                Founded in 1887, Veermata Jijabai Technological
                                Institute has pioneered India’s engineering
                                education, research and training ecosystem. VJTI
                                is an academically and administratively
                                autonomous institute affiliated to the
                                University of Mumbai, financially supported by
                                the Government of Maharashtra. Located in South
                                Mumbai, the institute offers programmes in
                                engineering and technology at the diploma,
                                degree, post-graduate and doctoral levels. VJTI
                                is known for its high-quality teaching,
                                collaborative research, industry connections and
                                strong alumni network.
                            </span>

                            <button className="button1">Know More</button>
                        </div>
                    </div>
                    <div className="whiteline"></div>
                    <div
                        className="bgimg"
                        style={{ backgroundImage: `url(${hp4})` }}
                    >
                        <div className="container three">
                            <h2>OUR ACHIEVEMENTS</h2>
                            <span>
                                VJTI Racing has a plethora of achievements to
                                boast about, with a rich history of
                                participation in national and international
                                competitions for more than a decade.
                            </span>
                            <button className=" button1 button2">
                                Know More
                            </button>
                        </div>
                    </div>
                    <div className="whiteline"></div>
                    <div
                        className="bgimg"
                        style={{ backgroundImage: `url(${hp3})` }}
                    >
                        <div className="container four">
                            <h2>OUR ACTIVITIES</h2>
                            <span>
                                Currently, VJTI Racing has two teams under its
                                wing. Team Motorbreath comprises students mainly
                                from the third-year building an all-terrain
                                vehicle, with the main objective of
                                participating in SAE BAJA competitions. Team
                                ForzaVJTI, our latest addition, consists of
                                students from the second-year, established to
                                introduce deserving youngsters to the automotive
                                world as early as possible. They will work on
                                manufacturing a go-kart, mainly to participate
                                in ISIE IKR. The club also hosts workshops and
                                events for the students of the college to evoke
                                an interest in the technical aspects of our
                                craft, and familiarise students with the topics
                                and processes involved in the manufacture of our
                                vehicles.
                            </span>

                            <button className="button1 button2">
                                Know More
                            </button>
                        </div>
                    </div>
                    <div className="whiteline"></div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Home;
