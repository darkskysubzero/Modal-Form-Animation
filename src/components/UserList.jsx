import React from "react";

const UserList = (props) => {
    return (
        <ul>
            {props.users.map(user => {
                return (
                    <li key={crypto.randomUUID()}>
                        <p>{user.username}</p>
                        <p>{user.age} years old</p>
                    </li>
                )

            })}
        </ul>
    )
}

export default UserList;