"use client"
import { useState,useContext,createContext,useRef } from "react"
  export const AppContext = createContext()


 export default function AppProvider({children}){
 const homeRef = useRef(null)
 const programsRef = useRef(null)
 const aboutRef  = useRef(null)
 const contactRef = useRef(null)


 const scrollToSection = (ref) =>{
    ref.current?.scrollIntoView({
        behaviour:'smooth',
        block:'start'
    })
 }
return(
    <AppContext.Provider value={{homeRef,programsRef,aboutRef,contactRef,scrollToSection}}>
        {children}
    </AppContext.Provider>
)
 }