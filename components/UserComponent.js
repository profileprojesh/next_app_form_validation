
const UserComponent = ({user}) => {
    return (
        <>
        <tr>
            <td>{user.username}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.nationality}</td>
            <td>{user.dob}</td>
            <td>{user.education}</td>
            <td>{user.contact}</td>
        </tr>
        </>
    )
}

export default UserComponent
