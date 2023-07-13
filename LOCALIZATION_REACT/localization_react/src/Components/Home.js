import React from "react";
import { useTranslation } from "react-i18next";


const Home = () => {
    const { t  } = useTranslation('translation')
    return (

        <>
             <div className="container shadow-lg">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        {t("HP")}
                    </div>
                </div>

            </div>
            <p> {t('Home')}</p>
            <div className="row">
                <div className="col-md-12">
                    <p> {t("Simple")}</p>
                </div>
            </div>
            </div>
            
        </>


    )
}
export default Home