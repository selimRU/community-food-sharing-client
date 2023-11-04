import React, { useContext } from 'react';
import { Context } from '../provider/ContextProvider';

const UseAuth = () => {
    const auth = useContext(Context)
    return auth
};

export default UseAuth;