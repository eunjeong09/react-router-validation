import { Link, Route, BrowserRouter as Router ,Switch} from "react-router-dom";
import Main from "./component/main";
import User from "./component/user";
import Admin from "./component/admin";
import Validation, { ROLE } from "./component/validation";
import NotFound from "./component/notFound";


// 현재 나의 역할(권한)지정 -> user인 경우 admin은 주석처리
const myRole = {
  // User:ROLE.USER,
   Admin:ROLE.ADMIN
};

function getMyRole(){
    let key = Object.keys(myRole);
     return key[0];
}

function App() {
  return (
    <Router>
      <header>
        <Link to="/user">
          <button>User</button>
        </Link>
        <Link to="/admin">
          <button>Admin</button>
        </Link>
      </header>
      
      <div id="container">
        <Switch>
          <Route path="/" exact render={() => <Main myRole={getMyRole()} />}/>
          <Validation exact path="/user" component={User} role={myRole.User} />
          <Validation exact path="/admin" component={Admin} role={myRole.Admin} />
          {/* 올바르지 않은 주소 입력시 404 페이지 출력 */}
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




