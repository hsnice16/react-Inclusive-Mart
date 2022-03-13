import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FooterHeading } from "./shared";

const FooterPageLinksContainer = ({ pageLinks }) => (
  <div>
    <FooterHeading headingText="Quick Links" />

    <ul className="mx-1">
      {pageLinks.map(({ id, linkFor, url }, index) => (
        <li key={id} className={index % 2 !== 0 ? "my-1" : ""}>
          <Link to={url} className="link">
            {linkFor}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

FooterPageLinksContainer.propTypes = {
  pageLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      linkFor: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

FooterPageLinksContainer.defaultProps = {
  pageLinks: [
    {
      id: "",
      linkFor: "",
      url: "",
    },
  ],
};

export { FooterPageLinksContainer };
