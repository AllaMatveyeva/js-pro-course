import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/header";
import { Kliker } from "./kliker/kliker";
import GetModalWindow from "./usercard/modalWindow/GetModalWindow";

import UserCard from "./usercard/user";
import users from "./usercard/users";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Kliker />
      </header>
      <main>
        {users.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </main>
      <GetModalWindow />
      <Footer />
    </div>
  );
}

export default App;
