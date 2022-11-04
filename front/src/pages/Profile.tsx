import axios from 'axios'
import {useEffect, useState} from 'react'
import {IUser} from "../services/UserTypes"

const Profile : React.FC = () => {

    const userId = "63622e2cc07d3181349d7f03"

    const [user, setUser] = useState<IUser>()

    const getProfile = async () => {


        try {
            const userProfile = await axios.get(`http://localhost:4000/api/profile`)
            console.log(userProfile)

            setUser(userProfile.data)
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getProfile()
    }, [])
    
    return (
        <div>
            <h5>Name</h5>
            <p>{user?.name}</p>
            <h5>Last Name</h5>
            <p>{user?.lastName}</p>
            <h5>Company</h5>
            <p>{user?.company}</p>
        </div>
    )
}

export default Profile