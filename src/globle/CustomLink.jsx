import { useLocation,Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CustomLink = ({children, to}) => {
  const currentLanRoute = useSelector((state) => state.globleVlaue.currentLanRoute);

  const location = useLocation();
  const match = location.pathname === to;
  return (
    <div>

      <Link to={`${currentLanRoute}${to}`} style={{ textDecoration: "none" }}>{children}</Link>
    </div>
  );
};

export default CustomLink;