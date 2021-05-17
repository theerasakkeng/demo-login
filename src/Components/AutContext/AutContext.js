import React,{createContext,useState} from 'react'

export  const AutContext = createContext();

export  const AutProvider  =(props) =>{
    const [aut,setAut] = useState([
        {
            id:1,
            username:"admin",
            password:"admin1234"
        },
        {
            id:2,
            username:"keng",
            password:"123456"
        }
    ]);
    return(
        <AutContext.Provider value={[aut,setAut]}>
            {props.children}
        </AutContext.Provider>
    );
};