import { useEffect, useState } from "react"
import Product from "./Product"

export default function ProductsList() {

    const [productsList,setProductList] = useState([])
    const [categoriesList,setCategoriesList] = useState([])
    const [searchInput,setSearchInput] = useState('')
    const [currentCategory, setCurrentCategory] = useState('')


    const displayProduct = () => {
        // let productsTemp = productsList
        // if (searchInput != undefined) {
        //     productsTemp = productsList.filter(product => {
        //         return product.title.includes(searchInput)
        //     })
        // }

        // if (currentCategory != undefined) {
        //     productsTemp = productsList.filter(product => {
        //         return product.category === currentCategory
        //     })
        // }
        

        return productsList.map((prod,key)=>{
            return <Product product={prod} key={key}></Product>
        })
    }

    const displayCategories = () => {
        return categoriesList.map((category,key)=><button key={key}
            className={'btn ' + (currentCategory === category ? 'btn-dark' : 'btn-secondary')}
            onClick={(e) => {
                e.preventDefault()
                setCurrentCategory(category)
            }}>
            {category}
            </button>
        )
    }

    const getPorduits = () =>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(response => setCategoriesList(response))
    }

    const getCatgories = () => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(response => setProductList(response))
    }

    useEffect( ()=>{
        getPorduits()
        getCatgories()
    },[])

    const handleSearch = (e) =>{
        e.preventDefault()
        const searchValue = document.querySelector("#search").value
        setSearchInput(searchValue) 
        
    }

    return <div className="container-fluix mx-auto w-75 my-3">
        <h2>Search</h2>
        <form>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label className="col-form-label">Search</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="search" className="form-control"/>
                </div>
                <div className="col-auto">
                    <input className='btn btn-dark mx-2' type="submit" value='Search' onClick={handleSearch}/>
                </div>
            </div>
            <hr/>
            <h5>Categories :</h5>
            <div className="row g-3 align-items-center">
                <div className="btn-group">
                    {displayCategories()}
                </div>
            </div>

        </form>
        <h1>liste des produits :</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {displayProduct()}
            </tbody>
        </table>
    </div>
}