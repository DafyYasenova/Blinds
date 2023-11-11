import { useState, useEffect } from "react"
import styles from './Create.module.css';
import * as blindService from '../../services/blindService';


export default function Create({

    onCreateBlindSubmit
}) {
    const [values, setValues] = useState({
        name: '',
        productNumber: '',
        // color: {
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
        violet: false,
    // },
        imageUrl: '',
        category: '',
        material: '',
        description: '',
        price: '',

    })

    const onChangeHandler = (e) => {
        let value = e.target.value;

        switch (e.target.type) {
            case 'number': value = Number(e.target.value); break;
            case 'checkbox': value = e.target.checked; break;
            default:
                value = e.target.value;
                break;
        }
        setValues(state => ({ ...state, [e.target.name]: value }))
    }

   
    const onSubmit = (e) => {
        e.preventDefault();
        // onCreateBlindSubmit(values)
        // console.log(onCreateBlindSubmit(data))
       
        console.log('yes')
        console.log(values)
    }


    return (
        <section id="create">
            <div className="form" onSubmit={onSubmit}>
                <h2>ADD NEW PRODUCT</h2>
                <form className="create-form">
                    <input value={values.name} onChange={onChangeHandler} type="text" name="name" id="name" placeholder="Name" />
                    <input value={values.productNumber} onChange={onChangeHandler} type="text" name="productNumber" id="productNumber" placeholder="Product Number" />
                    {/* <input value={values.color} onChange={onChangeHandler} type="text" name="color" id="product-color" placeholder="Colors"/> */}
                    <label className="options-label">Colors:</label>
                    <div className={styles["colors-options"]}>

                        <label htmlFor="white" className="container white">white
                            <input type="checkbox" name="white" checked={values.white} onChange={onChangeHandler} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="yellow" className="container white">yellow
                            <input type="checkbox" name="yellow" checked={values.yellow} onChange={onChangeHandler}/>
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="blue" className="container blue">blue
                            <input type="checkbox" name="blue" checked={values.blue} onChange={onChangeHandler}/>
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="purple" className="container purple">purple
                            <input type="checkbox" name="purple" checked={values.purple} onChange={onChangeHandler}/>
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="pink" className="container pink">pink
                            <input type="checkbox" name="pink" checked={values.pink} onChange={onChangeHandler} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="grey" className="container grey">grey
                            <input type="checkbox" name="grey" checked={values.grey} onChange={onChangeHandler}/>
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="brown" className="container brown">brown
                            <input type="checkbox" name="brown" checked={values.brown} onChange={onChangeHandler}/>
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="beige" className="container beige">beige
                            <input type="checkbox" name="beige" checked={values.beige} onChange={onChangeHandler}/>
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="red" className="container red">red
                            <input type="checkbox" name="red" checked={values.red} onChange={onChangeHandler} />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="orange" className="container orange">orange
                            <input type="checkbox" name="orange" checked={values.orange} onChange={onChangeHandler}/>
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="violet" className="container violet">violet
                            <input type="checkbox" name="violet" checked={values.violet} onChange={onChangeHandler}/>
                            <span className="checkmark"></span>
                        </label>

                    </div>
                    <input value={values.imageUrl} onChange={onChangeHandler} type="text" name="imageUrl" id="product-image" placeholder="Image" />
                    <div className="category">
                        <label className="options-label">Category</label>
                        <select value={values.category} onChange={onChangeHandler} placeholder="Category" name="category" >
                            {/* <option value="">Category</option> */}
                            <option value="Vertical blinds">Vertical Blinds</option>
                            <option value="Harmony Blinds">Harmony</option>
                            <option value="Day and nigth Blinds">Day and night</option>
                            <option value="Aluminium horizontal blinds">Aluminium horizontal blinds</option>
                            <option value="Photo blinds">Photo blinds</option>
                        </select>
                    </div>
                    <input value={values.material} onChange={onChangeHandler} type="text" name="material" id="material" placeholder="Material" />
                    <textarea value={values.description} onChange={onChangeHandler} id="description" name="description" placeholder="Description" rows="3"
                        cols="50"></textarea>

                    <input value={values.price} onChange={onChangeHandler} type="number" name="price" id="price" placeholder="Price for sq.m" />


                    <button type="submit">Add new product</button>

                </form>
            </div>
        </section>
    )
}