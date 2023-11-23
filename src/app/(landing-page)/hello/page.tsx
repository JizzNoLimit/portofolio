"use server"
import {cookies} from 'next/headers'

const Hello = () => {
    const cookie = cookies().getAll()
    console.log(cookie)
    return (
        <h1>Hello worl</h1>
    )
}

export default Hello