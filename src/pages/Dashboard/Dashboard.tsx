import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='container'>
            <h1>Dashboard</h1>
            <Link to={'/product-list'}>
                <h3>Link to Product List</h3>
            </Link>
        </div>
    )
}

export default Dashboard