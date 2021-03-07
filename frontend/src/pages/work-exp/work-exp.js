import env from '../../env';
import { useEffect, useState } from 'react';
import TitleTenure from './title-tenure';
import List from './list';
import './accordion.scss';

const WorkExperience = () => {
  const [projects, setProjects] = useState();
  const [collapse, setCollapse] = useState(0);

  useEffect(async () => {
    const req = await fetch(`${env.host}work-ex`);
    const res = await req.json();
    setProjects(res);
  }, []);

  return (
    <>
      {/* <div id="accordion">
        {projects?.map((ele, index) => (
          <div className="card" key={index}>
            <div className="card-header" id={`heading${index}`}>
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`} onClick={() => setCollapse(index)}>
                  <CompanyHeader text={ele.company} />
                </button>
              </h5>
            </div>

            <div id={`collapse${index}`} className={`collapse${collapse === index ? ' show' : ''}`} aria-labelledby={`heading${index}`} data-parent="#accordion">
              <div className="card-body text-dark">
                <TitleTenure class="d-flex justify-content-between" title={ele.title} tenure={ele.tenure} />
                <div>
                  <b>Roles and Responsibilities:</b>
                </div>

                <List list={ele.roles} />
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="container2">
        {projects?.map((ele, index) => (
          <div className="card" key={index}>
            <div className="card__head">{ele.title}</div>

            <div className="card-body text-dark">
              <TitleTenure className="d-flex justify-content-between" tenure={ele.tenure} />
              <div>
                <b>Roles and Responsibilities:</b>
              </div>

              <List list={ele.roles} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkExperience;
