import { useState, useEffect } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const [arrayData, setArrayData] = useState([]);
    const [showData, setShowData] = useState([]);
    const navigate =useNavigate()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((res) => setArrayData(res))
    }, []);

    const productData = () => {
        setShowData((prevState) => !prevState);
        
    };

    function navigateNextPage(id){
        console.log(id)
        navigate('/product/'+id);
        
    }
    

    return (
        <>
            <button onClick={productData}>
                {showData ? 'Hide' : 'Display'}
            </button>
            {showData && (
                <table>
                    <thead>
                        
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrayData.map((val) => (
                            <tr key={val.id}>
                                <td>{val.id}</td>
                                <td>{val.title}</td>
                                <td>${val.price}</td>
                                <td>{val.description}</td>
                                <td>{val.rating.rate}</td>
                                <td>{val.category}</td>
                                <td>
                                    <img src={val.image} alt={val.title} style={{ width: '50px' }} />
                                </td>
                                <td><button onClick={() => navigateNextPage(val.id)}>id button</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
