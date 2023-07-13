
import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// import toast from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useClipboardApi from 'use-clipboard-api';
const VoiceListener = () => {
    const [value, copy] = useClipboardApi()
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: "en-IN" })

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const copyFun = (value) => {
        copy(value);
        alert("Text Copied");
        resetTranscript()
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-12 centerItem">
                    <div className="card m-5 h-100 w-100">
                        <p>{transcript}</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 centerItem">
                    <button className='btn btn-sm btn-success fw-bold m-2' onClick={() => startListening()}>Start</button>
                    <button className='btn btn-sm btn-success fw-bold m-2' onClick={SpeechRecognition.stopListening}>Stop</button>
                    <button className='btn btn-sm btn-success fw-bold m-2' onClick={resetTranscript}>Reset</button>
                    <button className='btn btn-sm btn-success fw-bold m-2' onClick={() => copyFun(transcript)}>Copy</button>
                </div>
            </div>

        </div>
    )
}

export default VoiceListener