import React from 'react'

export const productReduce = (state = null, { type, payload }) => {
    console.log(payload)

    switch (type) {
        case "[PRODUCTS] ByCategory":
            console.log(payload)

            return payload

        case "[PRODUCTS] ById":

            return payload

        case "[PRODUCTS] BySearch":

            return payload

        default:
            return state
    }





}
