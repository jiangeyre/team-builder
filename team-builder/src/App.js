import React, {useState} from 'react';
import './App.css';
import Form from "./Components/Form";

function App() {
  //setting state prop for team members list
  const [member, setMember] = useState([
    {
      name: "Lexie Jiang",
      email: "lexiemingjiang@gmail.com",
      role: "Front End Developer",
      isAlive: true
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState([
    {
      name: "",
      email: "",
      role: "",
      isAlive: false
    }
  ])

  const editMember = (memBer) => {
    setMemberToEdit(memBer);
    console.log(memBer);
  }

  return (
    <div className="App">
      <div className="memberCont">
        {member.map((human, index) => {
          return (
          <div className="memberCard" key={index}>Name: {human.name} 
          <br/> Email: {human.email} 
          <br/> Role: {human.role} 
          <h4>State of Life: {human.isAlive ? 'alive' : 'deceased'}</h4>
          <button onClick={(element) => editMember(element)}>Edit.</button>
          </div> 
          )
        })}
      </div>
      <Form member={member} setMember={setMember} memberToEdit={memberToEdit}/>
    </div>
  );
}

export default App;
