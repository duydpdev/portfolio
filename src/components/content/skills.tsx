import { ProgressBar } from "../share/progress.bar";

export default function Skills() {
  return (
    <>
      <div className="arlo_tm_section" id="skills">
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Front End</h4>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since. Lorem Ipsum has been the
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text since. Lorem Ipsum is simply.
                </p>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">
                          Wordpress -{" "}
                          <span className="experience">
                            5 years of experience
                          </span>
                        </span>
                        <span className="number">95%</span>
                      </span>
                      <ProgressBar completed={60} />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="85"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">
                          Css -{" "}
                          <span className="experience">
                            3 years of experience
                          </span>
                        </span>
                        <span className="number">85%</span>
                      </span>
                      <ProgressBar completed={60} />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="75"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">
                          HTML -{" "}
                          <span className="experience">
                            4 years of experience
                          </span>
                        </span>
                        <span className="number">75%</span>
                      </span>
                      <ProgressBar completed={60} />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="90"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">
                          After Effect -{" "}
                          <span className="experience">
                            6 years of experience
                          </span>
                        </span>
                        <span className="number">90%</span>
                      </span>
                      <ProgressBar completed={60} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_skills_wrap">
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Back End</h4>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since. Lorem Ipsum has been the
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text since. Lorem Ipsum is simply.
                </p>
              </div>
              <div className="rightbox">
                <div className="progress_bar_wrap_total">
                  <div
                    className="arlo_tm_progress_wrap"
                    data-size="small"
                    data-round="c"
                    data-strip="off"
                  >
                    <div
                      className="arlo_tm_progress"
                      data-value="95"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">
                          Wordpress -{" "}
                          <span className="experience">
                            5 years of experience
                          </span>
                        </span>
                        <span className="number">95%</span>
                      </span>
                      <ProgressBar completed={60} />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="85"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">
                          Css -{" "}
                          <span className="experience">
                            3 years of experience
                          </span>
                        </span>
                        <span className="number">85%</span>
                      </span>
                      <ProgressBar completed={60} />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="75"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">
                          HTML -{" "}
                          <span className="experience">
                            4 years of experience
                          </span>
                        </span>
                        <span className="number">75%</span>
                      </span>
                      <ProgressBar completed={60} />
                    </div>
                    <div
                      className="arlo_tm_progress"
                      data-value="90"
                      data-color="#000"
                    >
                      <span>
                        <span className="label">
                          After Effect -{" "}
                          <span className="experience">
                            6 years of experience
                          </span>
                        </span>
                        <span className="number">90%</span>
                      </span>
                      <ProgressBar completed={60} />
                    </div>
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
