import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react/cjs/react.development';

const UpdateUsers = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);


    const handleUpdateUser = (e) => {
        const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                    setUser({});
                }
        })
        e.preventDefault();
    }
    const handleNameChange = (e) => {
        const updateName = e.target.value;
        const updatedUser = { name: updateName, email: user.email };
        setUser(updatedUser);
    }
    const handleEmailChange = (e) => {
        const updatedEmail = e.target.value;
        const updatedUser = { ...user };
        updatedUser.email = updatedEmail
        setUser(updatedUser);


    }

    return (
        <div>
            <h1>Update User Name and Email</h1>
            <h3>{user.name }</h3>
            <h3>{user.email}</h3>
            <form onSubmit={handleUpdateUser }>
                <input type="text" placeholder="name" onChange={handleNameChange} value={user.name || ''} />
                <input type="email" placeholder="email" onChange={handleEmailChange} name="" id="" value={user.email || ''} />
                <input type="submit" value="Update"/>
            </form>
        </div>
    )
}

export default UpdateUsers
