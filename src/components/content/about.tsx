import profileLogo from "@/assets/img/about/550x640.jpg";
import cv from "@/assets/cv/cv.pdf";
import ListJob from "../share/list.job";
export default function About() {
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src={profileLogo} alt="550x640" />
                      <div className="inner" data-img-url={profileLogo}></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src="img/about/550x640.jpg" alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm Phan Duy and <ListJob />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Hi! My name is <strong>Phan Duy</strong>. I am a Web
                      Developer, and I'm very passionate and dedicated to my
                      work. With 20 years experience as a professional Web
                      developer, I have acquired the skills and knowledge
                      necessary to make your project a success. I enjoy every
                      step of the design process, from discussion and
                      collaboration to concept and execution, but I find the
                      most satisfaction in seeing the finished product do
                      everything for you that it was created to do.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> 21.08.2001
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>City:</label> Da Nang, Vietnam
                        </span>
                      </li>

                      <li>
                        <span>
                          <label>Study:</label> FPT University
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Major:</label> Software Engineering
                        </span>
                      </li>

                      <li>
                        <span>
                          <label>Website:</label>{" "}
                          <a href="#">www.mywebsite.com</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Mail:</label>{" "}
                          <a href="mailto:example@gmail.com">
                            mymail&#64;gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Phone:</label>{" "}
                          <a href="#">+77 022 177 05 05</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Twitter:</label>{" "}
                          <a href="#">&#64;myusername</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={cv} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                      {/* <li className="anchor">
                        <a href="#contact">
                          <span>Send Message</span>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
