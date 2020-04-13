import React from 'react';
import Context from './utils/context';
import Core from "./component/core";

const ContextState = () => {
    const getApiUrl = () => {
        return process.env.REACT_APP_API_ENDPOINT?process.env.REACT_APP_API_ENDPOINT:'http://localhost:5000'
    }

    const getRecordNumber = () => {
        const rowNum = Number(process.env.REACT_APP_RECORD_NUMBER_TO_DISPLAY?process.env.REACT_APP_RECORD_NUMBER_TO_DISPLAY:20);
        return !rowNum || rowNum > 100 ? 20 : rowNum
    }

    return (
        <div>
            <Context.Provider
                value={{
                    apiUrl: getApiUrl(),
                    recordNumber: getRecordNumber()
                }}>
                <Core/>
            </Context.Provider>
        </div>
    )
}


export default ContextState;
