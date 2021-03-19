import { Route} from "react-router-dom";
import Forbidden from "./forbidden";

export const ROLE = {
  USER: "USER",
  ADMIN: "ADMIN"
};

const Validation = ({ role, component: Component, ...rest }) => {
    console.log(Component);
    console.log({...rest});
  return (
    <Route
      {...rest}
      
      render={props => {

        // 현재 role과 컴포넌트가 일치하지 않으면 403출력
        // if (role === ROLE.USER && path === "/admin") {
        //   return <Forbidden />;
        // }
        // if(role === ROLE.ADMIN && path === "/user"){
        //     return <Forbidden />;
        // }


        // 권한에 맞는 컴포넌트 출력
        if (Component) {
          return <Component {...props} role={role} />;
        }

        return null;
      }}
    />
  );
};

export default Validation;