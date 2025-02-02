import { useState } from "react"
import axios from "axios"


const Github = () => {

    const [user, setUser] = useState('')
    const [userData, setUserData] = useState({})

    return (
        <>
            <input type="text" name="user" id="user" onChange={(e) => setUser(e.target.value)}/>
            <button onClick={async () => {
                try {
                    const response = await axios.get(`https://api.github.com/users/${user}`)
                    const data = response.data
                    setUserData(data)
                } catch (err) {
                    if(err.response.status === 404) {
                        alert('User not found')
                    }
                }
            }}>Get User</button>
            <UserCard user={userData} />
        </>
    )
}

const UserCard = ({ user }) => {

    return(
        <>
            <h3>
                {user.login}
            </h3>        
            <p>
                {user.name}
            </p>
            <p>
                {user.bio}
            </p>
            <p>
                {user.location}
            </p>
        </>
    )
}

export default Github