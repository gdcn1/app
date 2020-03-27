import React from 'react';
import Context from './utils/context';
import Core from "./component/core";

const ContextState = () => {
    const getApiUrl = () => {
        return process.env.REACT_APP_API_ENDPOINT
    }

    const getRecordNumber = () => {
        const rowNum = process.env.REACT_APP_RECORD_NUMBER_TO_DISPLAY
        return !rowNum || +rowNum > 100 ? 20 : rowNum
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
