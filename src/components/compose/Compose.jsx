import PropTypes from "prop-types";

export const Compose = ({ components, children }) => {
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};

Compose.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType),
  children: PropTypes.node,
};

Compose.defaultProps = {
  components: [<></>],
  children: <></>,
};
