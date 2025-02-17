import { useState, useTransition } from "react";
import Home from "./Home";
import Posts from "./Posts";
import Contact from "./Contact";

const App = () => {
  const [activetab, setActiveTab] = useState("Home");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (tab: any) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };
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
        <button className="border-2" onClick={() => handleTabChange("Home")}>
          Home
        </button>
        <button className="border-2" onClick={() => handleTabChange("Posts")}>
          Posts
        </button>
        <button className="border-2" onClick={() => handleTabChange("Contact")}>
          Contact
        </button>
      </div>
      {isPending && <p>Loading...</p>}
      <div className="content">{renderContent()}</div>
    </div>
  );
};
export default App;
