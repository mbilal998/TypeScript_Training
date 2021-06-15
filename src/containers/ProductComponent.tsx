import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {RootState} from "../redux/reducers";

const ProductComponent = () => {

    const products = useSelector((state: RootState) => state.allProducts.products);

    const productList = products.map((product: any) => {
        const {id, title, image, price, category} = product;
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title}/>
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className='meta price'>${price}</div>
                                <div className='meta'>{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })
    return <>{productList}</>
}

export default ProductComponent;