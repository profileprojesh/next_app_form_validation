import React from 'react'
import UserComponent from './UserComponent'

const Homecomponent = ({ Users }) => {
    return (
        <>
            <tr>
                <th>Username</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Nationality</th>
                <th>Date Of Birth</th>
                <th>Education</th>
                <th>Contact</th>
            </tr>

            {Users.map((user, id) => {
               return <UserComponent user={user} key={id} />
            })}
    </>
    )
}

export default Homecomponent
