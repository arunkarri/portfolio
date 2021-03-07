import { useEffect, useState } from 'react';
import env from '../../env';
import './projects.css';
import Loader from '../../loader';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(async () => {
    const req = await fetch(`${env.host}projects`);
    const res = await req.json();
    setProjects(res);
  }, []);

  return (
    <>
      {projects.length == 0 ? (
        <Loader />
      ) : (
        <div className="row mt-3">
          {projects.map((ele, index) => {
            return (
              <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3">
                <div className="card blog-card bg-project h-100 text-center">
                  <img src={ele.image} className="card-img-top git-img" alt="..." />
                  <div className="card-body">
                    <b><a href={ele.link} className="card-title text-dark" data-toggle="tooltip" data-placement="top" title={ele.description} target="_blank">
                      {ele.title}
                    </a></b>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Projects;
