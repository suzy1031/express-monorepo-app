import "./App.css";
import React from "react";
const getUsers = async () => {
  const response = await fetch("http://localhost:8000/api/users");
  const body = response.json();
  return body;
};

function App() {
  const [users, setUsers] = React.useState([
    "alpha",
    "bravo",
    "charlie",
    "delta",
  ]);
  const [inputText, setInputText] = React.useState("");

  React.useEffect(() => {
    getUsers()
      .then((data) => {
        // 名前だけの配列に変換する
        const users = data.users.map((user) => user.name);
        return users;
      })
      // 名前だけの配列を表示用配列にセットする
      .then((users) => setUsers(users))
      .catch((error) => console.error(error));
  }, []);

  const userList = users.map((user) => {
    return <li key={user}>{user}</li>;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUsers = [...users, inputText];
    setUsers(newUsers);
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <ul>{userList}</ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">追加</button>
      </form>
    </div>
  );
}

export default App;
