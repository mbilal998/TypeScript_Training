import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { getProducts } from '../redux/actions/productActions';
const ProductListing = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts();
    },[])

    const fetchProducts = async () => {
        dispatch(getProducts());
    }

    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
}

export default ProductListing;