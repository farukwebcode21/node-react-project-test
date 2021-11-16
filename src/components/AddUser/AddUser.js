import React, {useRef} from 'react'

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleAddUsers = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = { name, email };
        fetch('http://localhost:5000/users', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user .')
                    e.target.reset();
                }

        })
        e.preventDefault();

    }
    return (
        <div>
            <h1>Please Add Your Name Here </h1>
            <form onSubmit={handleAddUsers}>
                <input className="name" type="text" placeholder="Input Your Name" ref={nameRef} required/>
                <br/>
                <input className="email" type="email" placeholder="Please input your email" ref={emailRef} required />
                <br/>
                <input className="submit" type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default AddUser
