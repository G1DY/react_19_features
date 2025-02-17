import { useState } from "react";
import Home from "./Home";
import Posts from "./Posts";
import Contact from "./Contact";

const App = () => {
  const [activetab, setActiveTab] = useState("Home");
  const renderContent = () => {
    switch (activetab) {
      case "Home":
        return <Home />;
      case "Posts":
        return <Posts />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div>
      <div className="tabs">
        <button className="border-2" onClick={() => setActiveTab("Home")}>
          Home
        </button>
        <button className="border-2" onClick={() => setActiveTab("Posts")}>
          Posts
        </button>
        <button className="border-2" onClick={() => setActiveTab("Contact")}>
          Contact
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};
export default App;
