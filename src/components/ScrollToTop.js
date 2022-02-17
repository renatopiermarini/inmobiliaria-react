import { useEffect } from "react";

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  function withRouter(Child) {
    return (props) => {
      const location = useLocation();
      const navigate = useNavigate();
      return <Child {...props} navigate={navigate} location={location} />;
    };
  }

  return null;
};

export const = withRouter(ScrollToTop)