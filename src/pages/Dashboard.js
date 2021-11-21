import { useEffect, useState } from "react";

function Dashboard() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.text())
      .then((res) => {
        setText(res);
      });
  }, []);

  return (
    <div>
      <p>This is the dashboard</p>
      <p>
        <strong>From the backend:</strong> {text}
      </p>
    </div>
  );
}

export default Dashboard;
