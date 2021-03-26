import { useEffect, useState } from 'react';
import env from '../../env';
import './projects.css';
import Loader from '../../loader';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState([]);
  const [currentBadge, setCurrentBadge] = useState('All');
  const [projectsCopy, setprojectsCopy] = useState([]);
  useEffect(async () => {
    const req = await fetch(`${env.host}projects`);
    const res = await req.json();

    let techFilters = res.reduce(
      (acc, curr) => {
        if (acc.indexOf(curr.stack) === -1) {
          acc.push(curr.stack);
        }
        return acc;
      },
      ['All']
    );

    setFilters(techFilters);
    setProjects(res);
    setprojectsCopy(res);
  }, []);

  function filterRecords(stack) {
    setCurrentBadge(stack);
    setProjects(projectsCopy);
    if (stack !== 'All') {
      let filteredProjects = projectsCopy.filter((obj) => obj.stack === stack);
      setProjects(filteredProjects);
    }
  }

  return (
    <>
      {projects.length == 0 ? (
        <Loader />
      ) : (
        <>
          <div className="row ml-2 mt-2 mb-2">
            {filters.map((stack, index) => {
              return (
                <h5 key={index}>
                  <span
                    className={`filter-badge badge rounded-pill mr-3 ${stack === currentBadge ? 'bg-primary text-light' : 'bg-light text-dark'}`}
                    onClick={() => {
                      filterRecords(stack);
                    }}
                  >
                    {stack}
                  </span>
                </h5>
              );
            })}
          </div>
          <div className="row mt-3">
            {projects.map((ele, index) => {
              return (
                <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3">
                  <div className="card blog-card bg-project h-100 text-center">
                    <img src={ele.image} className="card-img-top git-img  " alt="..." />
                    <div className="card-body">
                      <b>
                        <div className="card-title text-dark" data-toggle="tooltip" data-placement="top" title={ele.description} target="_blank">
                          {ele.title.split('/')[1].split(':')[0]}
                        </div>
                        <div className="row">
                          <div className="col-xs-6 col-lg-6 col-md-6 cold-sm-6 col-xs-12 mb-3">
                            <a href={ele.link} className="btn btn-dark" data-toggle="tooltip" data-placement="top" title={ele.description} target="_blank">
                              Visit Repo
                            </a>
                          </div>
                          <div className="col-xs-6 col-lg-6 col-md-6 cold-sm-6 col-xs-12 mb-3">
                            <a href={ele.demo ?? ele.link} className="btn btn-light" data-toggle="tooltip" data-placement="top" title={ele.description} target="_blank">
                              {!!ele.demo ? 'Demo' : 'API'}
                            </a>
                          </div>
                        </div>
                        {ele.package !== undefined ? (
                          <div className="text-center">
                            <a href={ele.package ?? ele.link} className="btn btn-dark" data-toggle="tooltip" data-placement="top" title={ele.description} target="_blank">
                              See the package
                            </a>
                          </div>
                        ) : (
                          ''
                        )}
                      </b>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Projects;
