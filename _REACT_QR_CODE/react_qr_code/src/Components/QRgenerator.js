import React, { useState } from 'react'
import QRCode from 'qrcode'

export const QRgenerator = (e) => {
    const [value, setValue] = useState()
    const [qrCodeImg, setQrCodeImg] = useState()
    const submitForm = async (e) => {
        e.preventDefault()
        const res = await QRCode.toDataURL(value)
        setQrCodeImg(res)
        console.log(res)
    }
    return (
        <div>

            <div className="row">
                <div className="col-md-12">
                    <form action="" onSubmit={(e) => { submitForm(e) }}>
                        <input type="text" className='form-control' onChange={(e) => setValue(e.target.value)} />
                        <button type='submit' className='btn btn-sm btm-success rounded-0'>Generate</button>
                    </form>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center align-items-center">
                            <a href={qrCodeImg} download={`qrCode${Math.random()}.png `}>
                                <img src={qrCodeImg} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
