import React, { useEffect, useState } from 'react'
import { FaFilter, FaHome, FaSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    // fetching data from json 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("products.json");
                const data = await response.json();
                setProducts(data);
                setFilteredItems(data);

            } catch (error) {
                console.log("Error Fetching Data", error);
            }
        }

        fetchData();
    }, [])


    //Filtering Category

    const filterItems = (category) => {
        const filtered = category === "all" ? products : products.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
    }

    // Sorting Functionality 

    const handleSortChange = (option) => {

        setSortOption(option);
        // logic for sorting 
        let sortedItems = [...filteredItems];

        switch (option) {
            case "a-z":
                sortedItems.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "z-a": sortedItems.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "low-to-high": sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low": sortedItems.sort((a, b) => b.price - a.price);
                break;
            default: sortedItems.sort();
        }

        setFilteredItems(sortedItems);
    }


    return (
        <section className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-5'>
            <div className="bg-gray-100 my-5 py-12 pl-8 rounded flex justify-left items-center gap-3">
                <Link to="/" className='text-gray-500'><FaHome size="20" /></Link> / <Link to="/Shop" className='font-semibold text-black uppercase'>Shop</Link>
            </div>
            <div className='flex flex-row justify-between items-center space-y-3 mb-8'>
                <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                    <button className={`button-default ${selectedCategory == 'all' ? 'active' : ''}`} onClick={() => filterItems("all")}>All Products</button>
                    <button className={`button-default ${selectedCategory == 'Dress' ? 'active' : ''}`} onClick={() => filterItems("Dress")}>Clothing</button>
                    <button className={`button-default ${selectedCategory == 'Hoodies' ? 'active' : ''}`} onClick={() => filterItems("Hoodies")}>Hoodies</button>
                    <button className={`button-default ${selectedCategory == 'Bag' ? 'active' : ''}`} onClick={() => filterItems("Bag")}>Bag</button>
                    <button className={`button-default ${selectedCategory == 'Glasses' ? 'active' : ''}`} onClick={() => filterItems("Glasses")}>Glasses</button>
                    <button className={`button-default ${selectedCategory == 'Shoe' ? 'active' : ''}`} onClick={() => filterItems("Shoe")}>Shoe</button>
                </div>
                <div className='flex justify-end mb-4 rounded-sm'>
                    <div className='bg-black p-2'>
                        <FaFilter className='text-white h-4 w-4' />
                    </div>
                    <select id='sort' onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className='bg-black text-white p-1 rounded-sm  outline-none'>
                        <option value="default">Filter</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                        <option value="low-to-high">Low to High</option>
                        <option value="high-to-low">High to Low</option>
                    </select>
                </div>
            </div>
            <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 xl:gap-12'>
                {
                    filteredItems.map((product) => (
                        <Card key={product.id} product={product} />
                    ))
                }
            </div>
        </section>
    )
}

export default Shop