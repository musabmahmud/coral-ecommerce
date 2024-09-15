import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

const RelatedProduct = ({ category, id }) => {

    const [related, setRelated] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/products.json');
                const data = await response.json();

                let selectedItem = data.filter(p => p.category == category && p.id != id);

                setRelated(selectedItem.slice(0, 4));

            } catch (error) {
                console.log("Error Fetching Data", error);
            }
        }

        fetchData();
    }, [category, id]);

    return (
        <>
            <h2 className="title my-8">Related Products</h2>

            {/* Category related Grid  */}

            <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 xl:gap-12'>
                {
                    related.length ?
                        related.map((product) => (
                            <Card key={product.id} product={product} />
                        ))
                        :
                        <p className="capitalize mx-auto text-center">No related products found!!!</p>
                }
            </div>
        </>
    )
}

export default RelatedProduct