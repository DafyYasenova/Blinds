export default function Create() {
    return (
        <section id="create">
            <div className="form">
                <h2>ADD NEW PRODUCT</h2>
                <form className="create-form">
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="text" name="product-number" id="productNumber" placeholder="Product Number" />
                    <input type="text" name="color" id="product-color" placeholder="Colors"/>
                   
                    <input type="text" name="imageUrl" id="product-image" placeholder="Image" />
                    <div className="category">
                        <select placeholder="Category" name="category" >
                            <option value="">Category</option>
                            <option value="Vertical blinds">Vertical Blinds</option>
                            <option value="Harmony Blinds">Harmony</option>
                            <option value="Day and nigth Blinds">Day and night</option>
                            <option value="Aluminium horizontal blinds">Aluminium horizontal blinds</option>
                            <option value="Photo blinds">Photo blinds</option>
                        </select>
                    </div>
                    <input type="text" name="maretial" id="product-material" placeholder="Material" />
                    <textarea id="product-description" name="description" placeholder="Description" rows="3"
                        cols="50"></textarea>

                    <input type="text" name="price" id="product-price" placeholder="Price for sq.m" />


                    <button type="submit">Add new product</button>

                </form>
            </div>
        </section>
    )
}