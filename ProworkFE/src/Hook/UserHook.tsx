import { useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react'
import { useActionData } from 'react-router-dom'
import { Viewone, createAccount } from '../api/API'
import { useSelector } from 'react-redux'

const UserHook = () => {
    const [state, setState]: any = useState({})


    let token = useSelector((state: any) => state.user);
    useEffect(() => {
        if (token) {
            let decode = token
            setState(decode)
            console.log(state._id);

        }
    }, [])
    console.log(state)
    const { data } = useQuery({
        queryKey: ["user", state._id],
        queryFn: () => Viewone(state.user).then((res) => {
            return res.data
        })

    })
    return { data }
}

export default UserHook