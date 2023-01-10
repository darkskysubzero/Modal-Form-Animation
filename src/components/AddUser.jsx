import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const AddUser = (props) => {

    const defaultState = { username: "", age: "" };
    const [input, setInput] = useState(defaultState);
    const [error, setError] = useState();

    const handleUsername = (e) => setInput({ ...input, username: e.target.value });

    const handleAge = (e) => setInput({ ...input, age: e.target.value });

    const addUserHandler = (e) => {
        e.preventDefault();

        //validation 
        const username = input.username.trim();
        const age = input.age.trim();
        if (username.length === 0 || age.length === 0) {
            setError({
                title: "Invalid Username",
                message: "Username cannot be blank"
            });
            return;
        };
        if (parseInt(age) < 1) {
            setError({
                title: "Invalid Age",
                message: "Age cannot be blank or less than 0"
            });
            return;
        }

        //adding to users state
        const updatedList = props.users;
        updatedList.unshift(input);
        props.setUsers([...updatedList]);

        //clearing field
        setInput(defaultState);
    }


    return (
        <div>
            {/* If error object not undefined then show modal */}
            {error && <Modal error={error} setError={setError} />}
            <form onSubmit={addUserHandler} className="form" autoComplete="off">
                <label htmlFor="username">
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        onChange={handleUsername}
                        value={input.username}
                    />
                </label>

                <label htmlFor="age">
                    <input
                        name="age"
                        type="number"
                        placeholder="Age"
                        onChange={handleAge}
                        value={input.age} />
                </label>

                <button type="submit">Add User</button>
            </form>
        </div>
    )

}

export default AddUser;