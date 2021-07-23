import React, {useEffect, Fragment} from 'react'
import Router from 'next/router'
import {isAuth} from '../../actions/auth'


const Private = ({children}) => {
    useEffect(() => {
        if(!isAuth()) {
            Router.push(`/signin`)
        }

        else if(isAuth().role !== 1) {
            Router.push(`/`)
        }
    }, [])

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default Private
