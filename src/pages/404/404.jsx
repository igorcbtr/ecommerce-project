import { Link } from "react-router"
import { Header } from "../../components/Header"
import './404.css'
import ErrorIcon from '../../assets/images/error-404-favicon.png'
export function ErrorPage({cart}) {
    return (
        <>
            <title>404 Page Not Found</title>
            <link rel="shortcut icon" href={ErrorIcon} type="image/x-icon" />
            <Header cart={cart}/>
            <div className="error-text-container">
                <div className="error-header">404</div>
                <div className="error-text">Page not found</div>
            </div>
        </>
    )
}