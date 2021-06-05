import React, {createContext, useState, useContext} from "react";

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState({})

    const setValues = (values) => {
        setData(prevData => ({
            ...prevData,
            ...values
        }))
    }

    return <DataContext.Provider>{children}</DataContext.Provider>
}

export default DataProvider