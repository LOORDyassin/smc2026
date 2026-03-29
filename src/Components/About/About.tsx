import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './about.css';
import { Calendar, Users, Sparkles, Laptop } from 'lucide-react';
import { FC } from 'react';
interface Props {
  theme: string;
}

const About: FC<Props> = ({ theme }) => {
  // Scroll effect for the container
  const containerRef = useRef(null);
  
  // Detect if the container is in view
  const isContainerInView = useInView(containerRef, { once: true });

  return (
    <section id="about">
      <div className="container" ref={containerRef}>
        <div
          className="about-content"
          style={{
            transform: isContainerInView ? 'none' : 'translateY(100%)',
            opacity: isContainerInView ? 1 : 0,
            transition: 'all 0.5s ease-out',
          }}
        >
          <div className="about-text">
            <h6 className="subtitle">About us</h6>
            <h1 className="about-title">IEEE SMC ISIMS SB ?</h1>
            
            {/* Add the "What is IEEE?" smaller title */}
            <h2 className="smaller-title">What is IEEE?</h2>
            <p className={`${theme =='' ? 'about-desc-dark' : 'about-desc' }`}>
              IEEE is a professional association for the advancement of technology. It is a global organization that brings together engineers, scientists, and other professionals to develop standards and promote innovation in technology.
            </p>

            {/* Add the "What is SMC ISIMS SB?" smaller title */}
            <h2 className="smaller-title">What is SMC ISIMS SB?</h2>
            <p className={`${theme =='' ? 'about-desc-dark' : 'about-desc' }`}>
            SMC ISIMS SB (Systems, Man, and Cybernetics Society - ISIMS Student Branch) is a community where students explore AI, automation, and intelligent systems. Through workshops, competitions, and industry collaborations, we provide hands-on learning and networking opportunities to bridge the gap between theory and real-world innovation.
            </p>
            <button className="explore-button">
              <span><a href='#achievements'>Explore more</a></span>
              <div className="button-glow"></div>
            </button>
          </div>

          <div className="image-grid">
            <div className="grid-item events">
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Events" />
                <div className="card-content">
                  <Calendar className="card-icon" size={38} />
                  <span>Events</span>
                  <p className="card-description">Join our exciting events and stay connected</p>
                </div>
              </div>
            </div>
            <div className="grid-item family">
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Family" />
                <div className="card-content">
                  <Users className="card-icon" size={38} />
                  <span>Family</span>
                  <p className="card-description">Be part of our growing community</p>
                </div>
              </div>
            </div>
            <div className="grid-item fun">
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Fun" />
                <div className="card-content">
                  <Sparkles className="card-icon" size={38} />
                  <span>Fun</span>
                  <p className="card-description">Enjoy memorable moments together</p>
                </div>
              </div>
            </div>
            <div className="grid-item workshops">
              <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Workshops" />
                <div className="card-content">
                  <Laptop className="card-icon" size={38} />
                  <span>Workshops</span>
                  <p className="card-description">Learn and grow with hands-on experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
