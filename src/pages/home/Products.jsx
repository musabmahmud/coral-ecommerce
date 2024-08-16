import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../components/Card';
import Card from '../../components/Card';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    // fetching data from json 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./products.json");
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

    //Sort Products

    const showAll = () => {
        setFilteredItems(products);
        selectedCategory("all");
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
        <section>
            <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
                <div>
                    <h2 className='title'>Or subscribe to the newsletter</h2>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap justify-between items-center space-y-3 mb-8'>
                    <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                        <button onClick={showAll}>All Products</button>
                        <button onClick={() => filterItems("Dress")}>Clothing</button>
                        <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
                        <button onClick={() => filterItems("Bag")}>Bag</button>
                        <button onClick={() => filterItems("Glasses")}>Glasses</button>
                        <button onClick={() => filterItems("Shoe")}>Shoe</button>
                    </div>
                    <div className='flex justify-end mb-4 rounded-sm'>
                        <div className='bg-black p-2'>
                            <FaFilter className='text-white h-4 w-4' />
                        </div>
                        <select id='sort' onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className='bg-black text-white p-1 rounded-sm'>
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
                        filteredItems.slice(0, 8).map((product) => (
                            <Card key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Products