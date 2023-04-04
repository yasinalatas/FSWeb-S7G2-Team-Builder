import React, {useState} from "react";

export default function Form(props) {
    const [member, setMember] = useState({
        name:"", email:"", role:""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMember(member);
        setMember({name:"", email:"", role:""})
    };

    const handleChange = (event) => {
        setMember([...member], [event.target.name]: event.target.value);
    };





    return (
        <form onSubmit ={handleSubmit}>
            <label htmlFor="name">İsim</label>
                <input
            id="username"
            value={member}
            name="name"
            onChange={(olay) => handleChange(olay)}
          />
                
            

        </form>

    );
}