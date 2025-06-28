import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";

import {getAllProducts} from "../../../slices/productsSlice.ts";
//
// type ProductData = {
//     id: number;
//     name: string;
//     price: string;
//     currency: string;
//     image: string;
// };

export function Home() {
    // const [products, setProducts]
    //     = useState<ProductData[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const {list} = useSelector((state:RootState)=>state.products)


    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch('./product-data.json');
        //         const jsonData = await response.json();
        //         // console.log(jsonData);
        //         setProducts(jsonData);
        //     } catch (error) {
        //         console.error('Error fetching data: ',
        //             error)
        //     }
        // }
        // fetchData();
        dispatch(getAllProducts())

    }, []);

    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-5 mb-5
                            justify-center items-center mx-auto">
                {
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>
    );
}