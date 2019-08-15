import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BoxOne = ({ blog }) => {
  const { created, title, description, _id } = blog;
  return (
    <div className="blog__boxOne">
      <img
        className="blog__boxOne__img"
        src={`/blog/image/${_id}`}
        alt="Pro-English"
      />
      <div className="blog__boxOne__content">
        <span className="blog__span">{created}</span>
        <h2 className="blog__h2">{title}</h2>
        <p className="blog__p">{description}</p>
        <Link className="blog__link" to="/singleBlog">
          Procitaj sve
        </Link>
      </div>
    </div>
  );
};

// const BoxOne = ({ blog, img }) => {
//   const { date, heading, p } = blog;
//   return (
//     <div className="blog__boxOne">
//       <img className="blog__boxOne__img" src={img} alt="Pro-English" />
//       <div className="blog__boxOne__content">
//         <span className="blog__span">{date}</span>
//         <h2 className="blog__h2">{heading}</h2>
//         <p className="blog__p">{p}</p>
//         <Link className="blog__link" to="/singleBlog">
//           Procitaj sve
//         </Link>
//       </div>
//     </div>
//   );
// };

BoxOne.propTypes = {
  blog: PropTypes.object
};

export default BoxOne;
