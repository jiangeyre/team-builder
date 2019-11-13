import React, {useState} from 'react';
import './App.css';
import Form from "./Components/Form";

function App() {
  //setting state prop for team members list
  const [member, setMember] = useState([
    {
      name: "Lexie Jiang",
      email: "lexiemingjiang@gmail.com",
      role: "Front End Developer"
    }
  ]);


  return (
    <div className="App">
      <div className="memberCont">
        {member.map((human, index) => {
          return <div className="memberCard" key={index}>Name: {human.name} <br/> Email: {human.email} <br/> Role: {human.role}</div>
        })}
      </div>
      <Form member={member} setMember={setMember}/>
    </div>
  );
}

export default App;
