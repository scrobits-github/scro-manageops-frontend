import { SyntheticEvent } from "react";

function DashboardComponent() {
  const handleLogout = (event: SyntheticEvent) => {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <div>
      DashboardComponent
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardComponent;
