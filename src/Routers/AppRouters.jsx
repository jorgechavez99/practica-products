import React, { useContext, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPages } from '../Pages'
import { UserRouters } from './UserRouters'
import { UserContext } from '../context/UserContext'

export const AppRouters = () => {

const {auth} = useContext(UserContext)


    return (
        <>
            <Routes>

                {auth == "no-authentication" ? (
                    <>
                        <Route path='login' element={<LoginPages />} />
                        <Route path='/*' element={<Navigate to="/login" />} />
                    </>

                ) : <Route path='/*' element={<UserRouters />} />

                }

            </Routes>
        </>

    )
}
