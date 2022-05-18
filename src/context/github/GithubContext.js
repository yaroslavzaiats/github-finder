import { createContext, useState } from "react"

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`, {
            headers:{
                // Authorisation: `token ${GITHUB_TOKEN}`,
              //   mode: "no-cors",
              //   'Access-Control-Allow-Headers': ['API-Key', 'Authorization', 'Content-Type', 'If-Match', 'If-Modified-Since', 'If-None-Match', 'If-Unmodified-Since', 'Accept-Encoding', 'X-GitHub-OTP', 'X-Requested-With', 'User-Agent', 'GraphQL-Features']
            }
        })
  
        const data = await response.json()
  
        setUsers(data)
        await setTimeout(() => setLoading(false), 2000)
    }

    return <GithubContext.Provider 
        value={{
            users, 
            loading,
            fetchUsers,
        }}>
            {children}
    </GithubContext.Provider>
}

export default GithubContext