import React, { PropsWithChildren, FC } from 'react'
import UserHook from '../Hook/UserHook'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {

    const user = useSelector((state: any) => state.user)
    return (
        <div>
            {
                user ? <div>{children}</div> : <Navigate to="/signin" />
            }
        </div>
    )
}

export default PrivateRouter