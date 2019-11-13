import React from "react";

const Form = props => {

    const handleSubmit = e => {
        e.preventDefault();
        const newMember = {
            name: e.target.name.value,
            email: e.target.email.value,
            role: e.target.role.value
        }
        props.setMember(props.member.concat(newMember))
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">Full Name: </label>
            <input 
                type="text" 
                name="name" 
                placeholder="Your full name..." 
            />
            
            <label htmlFor="email">Email: </label>
            <input 
                type="text" 
                name="email" 
                placeholder="Your email..." 
            />

            <label htmlFor="role">Role: </label>
            <input 
                type="text" 
                name="email" 
                placeholder="Your role, sir/ma'am..." 
            />

            <input type="submit" />
        </form>
    )

}

export default Form;