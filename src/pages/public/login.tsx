import { Button } from "@chakra-ui/button";
import { FC, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

const Login: FC = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    localStorage.setItem("user", "ok");
    Navigate(location.state?.from);
  };

  return (
    <div>
      login
      <Button onClick={handleClick}>login</Button>
    </div>
  );
};
export default Login;
