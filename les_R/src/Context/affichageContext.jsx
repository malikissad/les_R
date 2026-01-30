import {createContext, useState } from "react";

export const AffichageContext = createContext();
export const AffichageProvider = ({children})=>{
    const [Affichage, setAffichage] = useState(false);
    const [ChangeNavbar, setChangeNavbar] = useState(false)

    const changeAffichage = () => {
        setAffichage(!Affichage)
    }
    return (
        <AffichageContext.Provider value={{ Affichage, changeAffichage , ChangeNavbar, setChangeNavbar}}>
            {children}
        </AffichageContext.Provider>
    )
}