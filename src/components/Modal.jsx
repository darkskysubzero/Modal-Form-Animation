import React from "react";
import { useState } from "react";

const Modal = (props) => {

    const [closeClicked, setCloseClicked] = useState(true)

    const closeModal = (e) => {
        e.preventDefault();

        setCloseClicked(false);

        setTimeout(() => {
            props.setError(null);
        }, 1000)
    }

    return (
        <div>
            <div className={`backdrop ${closeClicked ? "show" : ""}`} onClick={closeModal}></div>
            <div className={`modal ${closeClicked ? "show" : ""}`}>
                <form onSubmit={closeModal}>
                    <h1>{props.error.title}</h1>
                    <p>{props.error.message}</p>
                    <button>Okay</button>
                </form>
            </div>
        </div>

    )
}

export default Modal;