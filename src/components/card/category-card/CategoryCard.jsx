import "./category-card.css";
import PropTypes from "prop-types";

const CategoryCard = ({ img: { altText, url }, categoryName, loading }) => {
  return loading ? (
    <div className="card category-card loading-category-card">
      <span className="img img-round m-auto my-2 category-card-img"></span>
      <h2 className="m-auto mb-2 category-card-heading"></h2>
    </div>
  ) : (
    <div className="card category-card shadow-light shadow-slate-hover">
      <img
        loading="lazy"
        className="img img-round m-auto my-2 category-card-img"
        src={url}
        alt={altText}
      />

      <h2 className="m-auto mb-2">{categoryName}</h2>
    </div>
  );
};

CategoryCard.propTypes = {
  img: PropTypes.shape({
    altText: PropTypes.string,
    url: PropTypes.string,
  }),
  categoryName: PropTypes.string,
  loading: PropTypes.bool,
};

CategoryCard.defaultProps = {
  img: {
    allText: "",
    url: "",
  },
  categoryName: "",
  loading: false,
};

export { CategoryCard };
