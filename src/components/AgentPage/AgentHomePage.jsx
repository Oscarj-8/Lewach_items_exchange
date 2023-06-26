import AgentSidebar from "./AgentSidebar";
import "./AgentPage.css";
import AgentSearchbar from "./AgentSearchbar";

function AgentHomePage() {
  return (
    <div className="agentHomePage-root">
      <AgentSidebar />
      <AgentSearchbar />
    </div>
  );
}

export default AgentHomePage;
