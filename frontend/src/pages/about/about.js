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
                    <p>
                      Focused and skillful Frontend developer. Played a successful role as the lead in a couple of projects. Developed and simplified numerous applications, standardized various processes and saved thousands of hours through my work.
                      Trained and helped developers on AngularJS, Javascript, RPA and Chatbots. A firm believer in building various competencies- to get exposure and increase networking- along with work.
                    </p>
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
                      <li>Won React.js Hackathon event - Reached Super 6 out of 150 teams, and then won the first prize out of the 6 teams - by embedding maximum functionalities in the solution within a span of 3 days. </li>
                      <li>Stood 3rd in DevOps Cup out of 50 teams. Played a key role in the contribution by fixing 100's of source code issues, making the application secure</li>
                      <li>Received spot award for leading entire development effort and delivering Vendor Analytics Project to Sourcing Team.</li>
                      <li>Received spot award for building a web portal for users, bringing down the manual effort of IT team by saving 1000 hours and enabling 2200 users to Access Review Automation Portal.</li>
                      <li>Developed reusable components and helped the team to plug those in their applications.</li>
                      <li>Worked on many POCs and enabled the team to use different technologies.</li>
                      <li>Saved 640 hours per year by automating 3 different manual intensive processes. Improved Performance of an application by minifying the code, fixing library issues such as Black Duck</li>
                      <li>Conducted brown bag sessions to the team on Javascript.</li>
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
