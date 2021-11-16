import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    // Delete and user
    const handleDeleteUser = id => {
        const proceed =window.confirm("Are you sure, you want to delete ?");
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Susscess Fullly');
                    const remainingUsers = users.filter(user => user._id !== id)
                    setUsers(remainingUsers);

                }
            });
        }
    }
    return (
        <div>
            <h1>Users Available :{users.length}</h1>
            <div className="users-tabel">
                <table>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <Link to={`/users/update/${user._id}`}><button style={{marginRight:"20px"}}>Update</button></Link>
                                <button onClick={() => handleDeleteUser(user._id)}>X</button>
                            </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;
