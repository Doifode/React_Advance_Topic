import React from 'react';
import emailjs from "emailjs-com"
import { useLocation } from 'react-router-dom';

export const NP_Email = () => {
 
    const SubmitEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_qf6ieli", "template_nn37ghc", e.target, "kXhW5EJzb6TIZZhGD")

    }
    const location = useLocation()
console.log(location.state ,'locationparams')
    // const SubmitEmail = () => {
    //     const confitMail = {
    //         SecureToken: "2cacb25a-bf46-4ec3-801a-a4b738a5076c",
    //         To: "yashdada9001@gmail.com",
    //         From: email,
    //         Subject: "This is the subject",
    //         Body: "And this is the body"
    //     }
    //     if (window.Email) {
    //         window.Email.send(confitMail).then((res) => {
    //             alert(res.message)
    //         })
    //     }

    // }
    return (
        <div>

            <div className="row">
                <form action="" onSubmit={(e) => SubmitEmail(e)}>
                    <div className="col-md-12   ">
                        <input type="text" name='name' className='form-control border rounded-0 w-50 my-3' />
                        <input type="text" name='user_email' className='form-control border rounded-0 w-50 my-3' />
                        <textarea rows={10} name='message' className='form-control border rounded-0 w-50 my-3' />
                        <button className='btn btn-success'  >Download</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
