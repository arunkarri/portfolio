import './about.css';

const About = () => (
  <>
    <div className="row">
      <div className="col-lg-6">
        <div id="two">
          <p>My world:</p>
          <div className="box">
            <ul>
              <li className="item-1">React</li>
              <li className="item-2">CSS</li>
              <li className="item-3">HTML</li>
              <li className="item-4">Mongo</li>
              <li className="item-5">Node.js</li>
              <li className="item-6">Angular</li>
              <li className="item-7">Flutter</li>
              <li className="item-8">RPA</li>
              <li className="item-9">Chatbots</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <img className="profile img-fluid" src="images/arun.jpeg" />
      </div>
    </div>
    <div className="row mt-2 mb-0">
      <div className="col-lg-6">
        <div className="card text-dark h-75 overflow-auto">
          <div id="about-card" className="card-header bg-dark">
            <h5>
              <span className="badge badge-dark">Arun Kashyap</span>
            </h5>
          </div>

          <div className="card-body tech-card">
            <div className="row">
              <div className="ml-3 mr-3">
                <div>
                  <b>About Me</b>
                  <small>
                    <p>Focused and skillful MERN Stack Developer. With my work as a lead developer and mentor, I have helped deliver numerous projects for our clients. An enthusiast in constant pursuit of learning new technologies</p>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="card text-dark h-75 overflow-auto">
          <div id="achievements-card" className="card-header">
            <h5>
              <span className="badge badge-light">Achievements</span>
            </h5>
          </div>

          <div className="card-body tech-card">
            <div className="row">
              <div className="ml-1 mr-1">
                <div>
                  <small>
                    <ul>
                      <li>Published an npm package in react, which has around 1000 downloads </li>
                      <li>Actively developed many open source projects in React, Node, Mongo, Javascript and Bootstrap.</li>
                      <li>Certified in MERN stack and Javascript technologies.</li>
                      <li>Won the Best Blogger Award at DLT Labs for 2019-20</li>
                      <li>Stood first in React Hackathon event, at Verizon, out of 150 teams</li>
                      <li>Published 10+ blogs to help the developer community.</li>
                      <li>Stood 3rd in DevOps Cup out of 50 teams. Played a key role in the contribution by fixing 100's of source code issues, making the application secure.</li>
                      <li>Received spot award for leading entire development effort and delivering Vendor Analytics Project to Sourcing Team.</li>
                      <li>Received spot award for building a web portal for users, bringing down the manual effort of the IT team by saving 1000 hours and enabling 2200 users to Access Review Automation Portal.</li>
                    </ul>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default About;
