import { Route} from "react-router-dom";
import Forbidden from "./forbidden";

// 역할
export const ROLE = {
  USER: "USER",
  ADMIN: "ADMIN"
};


const Validation = ({ role, component: Component, path, ...rest }) => {
    // App.js 에서 호출시에 받는 role을 console.log를 통해서 확인
    console.log(typeof(role));
  return (
    <Route
      {...rest}
      
      render={props => {

        // 현재 role과 컴포넌트가 일치하지 않으면 403출력
        if(role === undefined){
            return <Forbidden />;
        }

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