import React, { useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast"

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
    .post("http://localhost:4000/api/v1/message/send", { name, email, subject, message }, { withCredentials: true, headers: { "Content-Type": "application/json" } })
    .then((res)=>{
      toast.success(res.data.message)
      setName("")
      setEmail("")
      setMessage("")
      setSubject("")
    })
    .catch((error)=>{
      toast.error(error.response.data.message)
      console.log(error)
    })
  }

  return (
    <>
    <div className="contact container">
      <div className="banner">

        <div className="item">
          <h4>Address</h4>
          <p>Anywhere, AnyTime, AnyService</p>
        </div>

        <div className="item">
          <h4>Call Us</h4>
          <p>Call Us: 0123456789</p>
        </div>
        <div className="item">
          <h4>Mail US</h4>
          <p>SUY@gmail.components</p>
        </div>
      </div>

      <div className="banner">
        <div className="item">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14221.280027080898!2d80.91028614046073!3d26.988425146665843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399951482d5a83d1%3A0x8d23949b1e033386!2sBakshi%20Ka%20Talab%2C%20Bargadi%20Magath%2C%20Uttar%20Pradesh%20226201!5e0!3m2!1sen!2sin!4v1712567380963!5m2!1sen!2sin" style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT</h2>
            <div>
              <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea rows={10} placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)} />

            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact