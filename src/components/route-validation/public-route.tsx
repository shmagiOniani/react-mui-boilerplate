import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

type MyComponentProps = {
  children: React.ReactNode;
};

const PublicRoute: React.FC<MyComponentProps> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default PublicRoute;
