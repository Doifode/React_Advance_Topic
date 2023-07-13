import React, { useState } from 'react'

export const TextReader = () => {
    const [text, setText] = useState('')
    const ReadText = () => {
        const read = new SpeechSynthesisUtterance(text)
        speechSynthesis.speak(read)
    }
    return (
        <div className='container'>
            <div className="row centerItem">
                <div className="col-5">
                    <input type="text" className='form-control' onChange={(e) => setText(e.target.value)} />
                    <button className='btn btn-primary ' onClick={() => ReadText()}>Read</button>
                </div>
            </div>

        </div>
    )
}
