import React, {useState} from "react";

const Form = props => {

    const [card, setCard] = useState({
        name: "",
        email: "",
        role: "",
        isAlive: false
    });
    // const [isAlive, setIsAlive] = useState(false);

    const handleChanges = e => {
        setCard({...card, [e.target.name]: e.target.value, [e.target.isAlive]: e.target.checked});
    };

    const handleSubmit = e => {
        e.preventDefault();        
        const newMember = {
            name: e.target.name.value,
            email: e.target.email.value,
            role: e.target.role.value,
            isAlive: e.target.isAlive.checked
        }

        if(!newMember.name || !newMember.email || !newMember.role){
            alert("You must enter your information into each box!!!");
            return null;
        }
        props.setMember(props.member.concat(newMember))
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">Name: </label>
            <input 
                type="text" 
                name="name" 
                placeholder="Your full name..." 
                onChange={handleChanges}
                value={card.name}
            />
             <br/>
            <label htmlFor="email">Email: </label>
            <input 
                type="text" 
                name="email" 
                placeholder="Your email..." 
                onChange={handleChanges}
                value={card.email}
            />
            <br/>
            <label htmlFor="roleSelect">Role: </label>
            <select id="roleSelect" name="role" onChange={handleChanges} value={card.role}>
                <option value="">Role of existence...</option>
                <option value="CSS Color Namer">CSS Color Namer</option>
                <option value="Front End Developer">Front End Developer</option>
                <option value="Back End Developer">Back End Developer</option>
                <option value="UX Developer">UX Developer</option>
                <option value="UI Developer">UI Developer</option>
                <option value="iOS Developer">iOS Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="Truly, truly evil Dark Lord">Truly, truly evil Dark Lord</option>
            </select>
            <br/>
            <label htmlFor="isAliveInput">Are you alive?</label>
            <input type="checkbox" id="isAliveInput" name="isAlive" value={card.isAlive} onChange={handleChanges} />
            <br/>
            <input type="submit" value="Determine your fate..." />
        </form>
    )

}

export default Form;