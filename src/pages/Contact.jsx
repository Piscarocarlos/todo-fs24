import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import styled from "styled-components";

import Hero from "../assets/images/hero.png"

const Titre = styled.h4`
    color: red
`





export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function handleChange(e) {
        if (e.target.id == "name") {
            setName(e.target.value)
        } else if (e.target.id == "email") {
            setEmail(e.target.value)
        } else if (e.target.id == "subject") {
            setSubject(e.target.value)
        } else if (e.target.id == 'message') {
            setMessage(e.target.value)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        let params = {
            "from_name": name,
            "from_email": email,
            "from_subject": subject,
            "message": message
        }
        emailjs.send("service_3i3w4d9", "template_eeeyxe9", params, "mFZLpFsxVrlRQAAlf");
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        toast("Votre message a été envoyé avec succès", {
            position: "bottom-left",
            icon: "✅",
        });
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6">
                    <Titre>Carlos</Titre>
                    <img src={Hero} alt="" className="w-100" />
                </div>
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" value={name} onChange={handleChange} className="form-control" placeholder="Ex: John Doe" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" value={email} onChange={handleChange} className="form-control" placeholder="Ex: johndoe@gmail.com" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="subject">Sujet</label>
                                    <input type="text" id="subject" value={subject} onChange={handleChange} className="form-control" placeholder="Ex: Contacter l'administrateur" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" cols="30" value={message} onChange={handleChange} rows="5" className="form-control"></textarea>
                                </div>
                                <div className="form-group mt-3">
                                    <button className="btn btn-dark w-100">Send Message</button>
                                </div>
                            </form>
                            <Toaster />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
