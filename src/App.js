import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SingIn from "./routes/singin/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Navigation}>
        <Route index Component={Home} />
        <Route path="sign-in" Component={SingIn} />
      </Route>
    </Routes>
  );
};

export default App;
