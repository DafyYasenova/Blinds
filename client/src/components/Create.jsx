export default function Create(){
    return(
        <section id="create">
        <div className="form">
            <h2>ADD NEW PRODUCT</h2>
            <form  className="create-form">
                <input type="text" name="name" id="name" placeholder="Name" />
                <input type="text" name="product-number" id="productNumber" placeholder="Product Number" />
                <input type="text" name="color" id="product-color" placeholder="Colors" />
                <input type="text" name="imageUrl" id="product-image" placeholder="Image" />
                <input type="text" name="category" id="product-category" placeholder="Category" />
                <input type="text" name="maretial" id="product-material" placeholder="Material" />
                <textarea id="product-description" name="description" placeholder="Description" rows="5"
                    cols="50"></textarea>

                <input type="text" name="price" id="product-price" placeholder="Price" />


                <button type="submit">Add new product</button>

            </form>
        </div>
    </section>
    )
}