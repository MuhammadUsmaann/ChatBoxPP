import "./App.css";
import ChatBox from "./chatbox/chatBox";
import Chatpopup from "./chatpopup";
import RecentChatpopup from "./recentchatpopup";

function App() {
  return (
    <>
      <div className="main p-0">
        <ChatBox />

        {/* <Chatpopup /> */}

        <RecentChatpopup/>
      </div>
    </>
  );
}

export default App;
