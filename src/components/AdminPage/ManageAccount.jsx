import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";

function ManageAccount() {
  // const data = [
  //   { id: 1, name: "Ander herrera", username: "Andyher" },
  //   { id: 2, name: "HectorsShmels", username: "hec23__" },
  //   { id: 3, name: "Dawit ayhey", username: "dawdaw09" },
  //   { id: 4, name: "Mykhailo mudryk", username: "mudmykhail" },
  //   { id: 5, name: "Joao felix", username: "felixSchool_" },
  //   { id: 6, name: "Matin garixx", username: "garixx34" },
  // ];
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
  ]);

  const [agents, setAgents] = useState([
    { id: 1, name: "Agent 1", email: "agent1@example.com" },
    { id: 2, name: "Agent 2", email: "agent2@example.com" },
  ]);

  const [activeTab, setActiveTab] = useState("users");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEditUser = (userId) => {
    // Display modal with form to edit user details
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleEditAgent = (agentId) => {
    // Display modal with form to edit agent details
  };

  const handleDeleteAgent = (agentId) => {
    setAgents((prevAgents) =>
      prevAgents.filter((agent) => agent.id !== agentId)
    );
  };

  return (
    <div className="manageAccount-root">
      <Sidebar />
      <SearchBar />
      {/* <table className="manage-account-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, username }) => (
            <tr key={`user_${id}`}>
              <td>{name}</td>
              <td>{username}</td>
              <td className="action">
                <FontAwesomeIcon icon={faEdit} />
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className="manage-accounts-main">
        <h2>Manage Accounts</h2>
        <div className="manage-acc-table-btn">
          <button onClick={() => handleTabClick("users")}>Users</button>
          <button onClick={() => handleTabClick("agents")}>Agents</button>
        </div>
        {activeTab === "users" && (
          <table className="manage-account-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <div className="manage-acc-inside-btns">
                      <button
                        onClick={() => handleEditUser(user.id)}
                        className="edit-delete-btn"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="edit-delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === "agents" && (
          <table className="manage-account-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr key={agent.id}>
                  <td>{agent.id}</td>
                  <td>{agent.name}</td>
                  <td>{agent.email}</td>
                  <td>
                    <button onClick={() => handleEditAgent(agent.id)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteAgent(agent.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ManageAccount;
