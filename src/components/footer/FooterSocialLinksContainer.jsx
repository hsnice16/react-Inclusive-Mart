import PropTypes from "prop-types";
import { FooterHeading } from "./shared";

const FooterSocialLinksContainer = ({ socialLinks }) => (
  <div>
    <FooterHeading headingText="Connect with me" />

    <ul className="flex">
      {socialLinks.map(({ _id, linkFor, url }) => (
        <li key={_id} className="mx-1 translate-y">
          <a href={url} className="fs-2 link" target="_blank" rel="noopener">
            <i className={`fab fa-${linkFor}`}></i>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

FooterSocialLinksContainer.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      linkFor: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

FooterSocialLinksContainer.defaultProps = {
  socialLinks: [
    {
      _id: "",
      linkFor: "",
      url: "",
    },
  ],
};

export { FooterSocialLinksContainer };
