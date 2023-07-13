import React, { useState } from 'react'

export const HandleEvent = () => {
    const [speak, setSpeak] = useState()

    const TextReader = (e) => {
        const text = new SpeechSynthesisUtterance(speak ? speak : "Kahi Tari liha ");
        speechSynthesis.speak(text)
    }
    return (
        <div>
            <input onChange={(e) => setSpeak(e.target.value)} />

            <button onClick={() => TextReader()}>Read</button>        </div>

    )
}
