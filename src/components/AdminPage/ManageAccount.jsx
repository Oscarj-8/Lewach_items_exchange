import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";

function ManageAccount() {
  const data = [
    { id: 1, name: "Ander herrera", username: "Andyher" },
    { id: 2, name: "HectorsShmels", username: "hec23__" },
    { id: 3, name: "Dawit ayhey", username: "dawdaw09" },
    { id: 4, name: "Mykhailo mudryk", username: "mudmykhail" },
    { id: 5, name: "Joao felix", username: "felixSchool_" },
    { id: 6, name: "Matin garixx", username: "garixx34" },
  ];

  return (
    <div className="manageAccount-root">
      <Sidebar />
      <SearchBar />
      <table className="manage-account-table">
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
      </table>
    </div>
  );
}

export default ManageAccount;
