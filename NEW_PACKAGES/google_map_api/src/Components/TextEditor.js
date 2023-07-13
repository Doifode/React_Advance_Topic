import JoditEditor from 'jodit-react';
import React, { useState } from 'react'
import { useRef } from 'react';
 
export const TextEditor = () => {
    const editorVal = useRef();
    const [content, setContent] = useState('')
    const [contents, setContents] = useState('')
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1> Write Text Here </h1>
                                <JoditEditor onChange={(e)=>  setContent(e)} value={content} ref={editorVal} />
                                {content}
                                <div dangerouslySetInnerHTML={{__html:content}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>


        </>
    )
}
