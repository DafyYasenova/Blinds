import styles from './Edit.module.css';

export default function Create() {
    return (
        <section id="edit">
            <div className={styles.form}>
                <h2>EDIT</h2>
                <form className={styles["edit-form"]}>
                <input  type="text" name="name" id="name" placeholder="Name" />
                    <input  type="text" name="productNumber" id="productNumber" placeholder="Product Number" />
                    
                    <div className={styles["colors-options"]} >
                        <label htmlFor="colors">Colors:</label>
                        <label htmlFor="white" className="container white">white
                            <input type="checkbox" name="white"  />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="yellow" className="container yellow">yellow
                            <input type="checkbox" name="yellow"  />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="blue" className="container blue">blue
                            <input type="checkbox" name="blue"  />
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
                            <input type="checkbox" name="brown"  />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="beige" className="container beige">beige
                            <input type="checkbox" name="beige"  />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="red" className="container red">red
                            <input type="checkbox" name="red"  />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="orange" className="container orange">orange
                            <input type="checkbox" name="orange" />
                            <span className="checkmark"></span>
                        </label>
                        <label htmlFor="violet" className="container violet">violet
                            <input type="checkbox" name="violet" />
                            <span className="checkmark"></span>
                        </label>
 
                    </div>
                    <input type="text" name="imageUrl" id="product-image" placeholder="Image" />
                    <div className={styles.category}>
                        <label>Category</label>
                        <select placeholder="Category" name="category" >
                            {/* <option value="">Category</option> */}
                            <option value="Vertical blinds">Vertical Blinds</option>
                            <option value="Harmony Blinds">Harmony</option>
                            <option value="Day and nigth Blinds">Day and night</option>
                            <option value="Aluminium horizontal blinds">Aluminium horizontal blinds</option>
                            <option value="Photo blinds">Photo blinds</option>
                        </select>
                    </div>
                    <input type="text" name="material" id="material" placeholder="Material" />
                    <textarea id="description" name="description" placeholder="Description" rows="3"
                        cols="50"></textarea>
 
                    <input type="number" name="price" id="price" placeholder="Price for sq.m" />
 
 
                    <button type="submit">Edit product</button>

                </form>
            </div>
        </section>
    )
}