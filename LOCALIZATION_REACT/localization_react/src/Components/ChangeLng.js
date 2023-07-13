import React,{useEffect } from "react";
import { useTranslation } from "react-i18next";



const ChangeLng = () => {
    const { i18n } = useTranslation()
    
    useEffect(()=>{
        i18n.changeLanguage(window.navigator.language)
        console.log(window.navigator.language)
    },[i18n])
     
    return (
        <select className="form-control rounden-0" name="" onChange={(e) => { i18n.changeLanguage(e.target.value) }} id="">
            <option value="mr">Marathi</option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
             <option value="fr">French</option>
            <option value="ja">Japan</option>
        </select>

    )
}
export default ChangeLng;