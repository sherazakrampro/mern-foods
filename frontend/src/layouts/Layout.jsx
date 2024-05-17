import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
