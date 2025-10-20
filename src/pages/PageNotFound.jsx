import {useLocation} from "react-router-dom"

const PageNotFound = () => {
    let location = useLocation()
    
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page {location.pathname} does not exist.</p>
        </div>
    )
}
export default PageNotFound
