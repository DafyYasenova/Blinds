import { useState } from "react"
import styles from './Create.module.css';
export default function Create({


}) {
    const [values, setValues] = useState({
        name: '',
        productNumber: '',
        color: [],
        imageUrl: '',
        category: '',
        material: '',
        description: '',
        price: '',

    })

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onCreateBlindSubmit(values)
        console.log(onCreateBlindSubmit(data))
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
                        <input type="checkbox" name="white" />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="yellow" className="container white">yellow
                        <input type="checkbox" name="yellow" />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="blue" className="container blue">blue
                        <input type="checkbox" name="blue" />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="purple" className="container purple">purple
                        <input type="checkbox" name="purple"  />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="pink" className="container pink">pink
                        <input type="checkbox" name="pink"  />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="grey" className="container grey">grey
                        <input type="checkbox" name="grey"  />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="brown" className="container brown">brown
                        <input type="checkbox" name="brown" />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="beige" className="container beige">beige
                        <input type="checkbox" name="beige"  />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="red" className="container red">red
                        <input type="checkbox" name="red" />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="orange" className="container orange">orange
                        <input type="checkbox" name="orange"  />
                            <span className="checkmark"></span>
                    </label>
                    <label htmlFor="violet" className="container violet">violet
                        <input type="checkbox" name="violet"  />
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

                    <input value={values.price} onChange={onChangeHandler} type="text" name="price" id="product-price" placeholder="Price for sq.m" />


                    <button type="submit">Add new product</button>

                </form>
            </div>
        </section>
    )
}