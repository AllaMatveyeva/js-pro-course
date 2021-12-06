import "./App.css";
import Footer from "./footer/footer";
import Header from "./header/header";
import GetModalWindow from "./usercard/modalWindow/GetModalWindow";

import UserCard from "./usercard/user";
import users from "./usercard/users";

function App() {
  return (
    <div className="App">
      <Header />
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
