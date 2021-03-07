import { useEffect, useState } from 'react';
import env from '../../env';
import './blogs.css';
import Loader from '../../loader';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(async () => {
    const req = await fetch(`${env.host}blogs`);
    const res = await req.json();
    setBlogs(res);
  }, []);

  return (
    <>
      {blogs.length == 0 ? (
        <Loader />
      ) : (
        <div className="row mt-3">
          {blogs.map((ele, index) => {
            return (
              <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 mb-3">
                <div className="card blog-card bg-blog h-100 text-center">
                  <img src={ele.image} className="card-img-top blog-img" alt="..." />
                  <div className="card-body">
                    <b><a href={ele.link} className="card-title text-light" data-toggle="tooltip" data-placement="top" title={ele.description} target="_blank">
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
export default Blogs;
