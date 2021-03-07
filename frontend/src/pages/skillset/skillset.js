import env from '../../env';
import { useEffect, useState } from 'react';
import './skillset.css';
import Loader from '../../loader';

const SkillSet = () => {
  const [skills, setSkills] = useState([]);
  useEffect(async () => {
    const req = await fetch(`${env.host}skillset`);
    const res = await req.json();
    setSkills(res);
  }, []);
  return (
    <>
      {skills.length === 0 ? (
        <Loader />
      ) : (
        <>
          {' '}
          {skills.map((ele, index) => {
            return (
              <div key={index} className="card text-dark mt-2 mb-2">
                <div className="card-header bg-dark">
                  <h5>
                    <span className="badge badge-light">{ele.category}</span>
                  </h5>
                </div>

                <div className="card-body tech-card">
                  <div className="row">
                    {ele.technologies.map((tech, techIndex) => {
                      return (
                        <div key={techIndex} className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-12 mb-4 text-center">
                          <img className="logo-img mb-2" src={tech.logo} />
                          <div>
                            <b>{tech.technology}</b>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
export default SkillSet;
