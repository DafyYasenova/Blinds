import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import validateForm from './../../utils/formValidation';
import styles from './Edit.module.css';
import * as blindService from '../../services/blindService';

const formInitialState = {
    name: '',
    productNumber: '',

    colors: {
        white: false,
        yellow: false,
        blue: false,
        purple: false,
        pink: false,
        grey: false,
        brown: false,
        beige: false,
        red: false,
        orange: false,
        violet: false
    },
    imageUrl: '',
    category: '',
    material: '',
    description: '',
    price: '',
}


export default function Edit() {

    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(formInitialState);
    const { blindId } = useParams();

    const [errors, setErrors] = useState({});

    const getProductDetails = (productId) => {
        blindService.getOne(productId)
            .then((result) => {
                setProductDetails(result);
            })
            .catch((error) => {
                console.error('Error fetching product details:', error);
            });
    };

    useEffect(() => {

        getProductDetails(blindId);
    }, [blindId]); //id

    const onChangeHandler = (e) => {
        let { name, value, type } = e.target;
        setProductDetails(state => ({ ...state, [name]: type === 'number' ? Number(value) : value }))
    }

    const changeColor = e => {
        let value = e.target.checked;
        let name = e.target.name;

        setProductDetails(state => ({ ...state, colors: { ...state.colors, [name]: value } }))

    }
    const onSubmit = (e) => {
        e.preventDefault();
    
        const formErrors = validateForm(productDetails);
        setErrors(formErrors);
        if (Object.keys(formErrors).length === 0) {
            onEditBlindSubmit(productDetails)
        }
    }
    const onEditBlindSubmit = (productDetails) => {
        blindService.edit(blindId, productDetails)
            .then(result => {
                setProductDetails(result)
                navigate(`/details/${blindId}`)
            })
            .catch((error) => {
                console.log('Error edit product', error)
            })
    }
    return (
        <section id="edit">
            <div className={styles.form} >
                <h2>EDIT</h2>
                <form className={styles["edit-form"]} onSubmit={onSubmit}>
                    <input value={productDetails.name} onChange={onChangeHandler} type="text" name="name" placeholder="Name" />
                    {errors.name && <p className={styles["error-message"]}>{errors.name}</p>}
                    <input value={productDetails.productNumber} onChange={onChangeHandler} type="text" name="productNumber" placeholder="Product Number" />
                    {errors.productNumber && <p className={styles["error-message"]}>{errors.productNumber}</p>}
                    <div className={styles["colors-options"]} >
                        <label htmlFor="colors">Colors:</label>
                        <label htmlFor="white" className="container white">white
                            <input type="checkbox" name="white" checked={productDetails.colors.white} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="yellow" className="container yellow">yellow
                            <input type="checkbox" name="yellow" checked={productDetails.colors.yellow} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="blue" className="container blue">blue
                            <input type="checkbox" name="blue" checked={productDetails.colors.blue} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="purple" className="container purple">purple
                            <input type="checkbox" name="purple" checked={productDetails.colors.purple} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="pink" className="container pink">pink
                            <input type="checkbox" name="pink" checked={productDetails.colors.pink} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="grey" className="container grey">grey
                            <input type="checkbox" name="grey" checked={productDetails.colors.grey} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="brown" className="container brown">brown
                            <input type="checkbox" name="brown" checked={productDetails.colors.brown} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="beige" className="container beige">beige
                            <input type="checkbox" name="beige" checked={productDetails.colors.beige} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="red" className="container red">red
                            <input type="checkbox" name="red" checked={productDetails.colors.red} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="orange" className="container orange">orange
                            <input type="checkbox" name="orange" checked={productDetails.colors.orange} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="violet" className="container violet">violet
                            <input type="checkbox" name="violet" checked={productDetails.colors.violet} onChange={changeColor} />
                            <span className="checkmark"></span>
                        </label>
                        {errors.colors && <p className={styles["error-message"]}>{errors.colors}</p>}
                    </div>
                    <input value={productDetails.imageUrl} onChange={onChangeHandler} type="text" name="imageUrl" placeholder="Image" />
                    {errors.imageUrl && <p className={styles["error-message"]}>{errors.imageUrl}</p>}
                    <div className={styles.category}>
                        <label>Category</label>
                        <select value={productDetails.category} onChange={onChangeHandler} placeholder="Category" name="category" >

                            <option value="Vertical blinds">Vertical Blinds</option>
                            <option value="Harmony Blinds">Harmony</option>
                            <option value="Day and nigth Blinds">Day and night</option>
                            <option value="Aluminium horizontal blinds">Aluminium horizontal blinds</option>
                            <option value="Photo blinds">Photo blinds</option>
                        </select>
                        {errors.category && <p className={styles['error-message']}>{errors.category}</p>}
          
                    </div>
                    <input value={productDetails.material} onChange={onChangeHandler} type="text" name="material" placeholder="Material" />
                    {errors.material && <p className={styles["error-message"]}>{errors.material}</p>}
                    <textarea value={productDetails.description} onChange={onChangeHandler} name="description" placeholder="Description" rows="3"
                        cols="50"></textarea>
                          {errors.description && <p className={styles["error-message"]}>{errors.description}</p>}

                    <input value={productDetails.price} onChange={onChangeHandler} type="number" name="price" placeholder="Price for sq.m" />
                    {errors.price && <p className={styles["error-message"]}>{errors.price}</p>}


                    <button type="submit">Edit product</button>

                </form>
            </div>
        </section>
    )
}