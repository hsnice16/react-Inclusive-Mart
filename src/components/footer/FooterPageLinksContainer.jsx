import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { FooterHeading } from "./shared";
import { ROUTE_ROOT, ROUTE_HOME } from "utils";

const FooterPageLinksContainer = ({ pageLinks }) => {
  const location = useLocation();
  const pageLinksToMap = pageLinks.filter(({ url }) =>
    location.pathname === ROUTE_ROOT
      ? url !== ROUTE_HOME
      : !url.includes(location.pathname)
  );

  return (
    <div>
      <FooterHeading headingText="Quick Links" />

      <ul className="mx-1">
        {pageLinksToMap.map(({ _id, linkFor, url }, index) => (
          <li key={_id} className={index % 2 !== 0 ? "my-1" : ""}>
            <Link to={url} className="link">
              {linkFor}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterPageLinksContainer.propTypes = {
  pageLinks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      linkFor: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

FooterPageLinksContainer.defaultProps = {
  pageLinks: [
    {
      _id: "",
      linkFor: "",
      url: "",
    },
  ],
};

export { FooterPageLinksContainer };
