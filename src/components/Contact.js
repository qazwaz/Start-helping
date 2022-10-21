import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors = [];

        if (name.length < 2) {
            _errors.push("Name should be at least 2 characters long.");
        }

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.push("Email should be valid.");
        }

        if (message.length < 120) {
            _errors.push("Message should be at least 120 characters long.");
        }

        setErrors(_errors);
        setSuccess(false);
        if (_errors.length > 0) {
            return false;
        }

        const obj = {
            name,
            email,
            message
        };

        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Błąd sieci!");
                }
            })
            .then(data => {
                if (data.status === "success") {
                    setSuccess(true);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <a name="contact" className="contact">
            <div className="contact__image">
                <div className="contact__right">
                    <p className="contact__title" >Skontaktuj się z nami</p>
                    <center>
                        <div className="header__decoration" />
                    </center>
                    <form className="contact__name" onSubmit={handleSubmit}>
                        <label>
                            Wpisz swoje imię
                            <br />
                            <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                        </label>
                        <label>
                            Wpisz swój email
                            <br />
                            <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Wpisz swoją wiadomość
                            <br />
                            <textarea value={message} className="form-control" onChange={e => setMessage(e.target.value)} />
                        </label>
                        <button className="contact__button" type="submit">Wyślij</button>
                    </form>

                    {success && <h2>Form sent!</h2>}
                    {errors.map(error => <p key={error}>{error}</p>)}
                </div>
            </div>
        </a>
    );
}

export default ContactForm;