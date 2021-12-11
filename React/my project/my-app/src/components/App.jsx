import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/header";

import { Users } from "./usercard/users";
const isUsers = true;
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>{isUsers ? <Users /> : <div>Empty Page</div>}</main>
      <Footer />
    </div>
  );
}

export default App;
