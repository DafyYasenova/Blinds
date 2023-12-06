
export default function (values) {
    let errors = {};

    const imageUrlPattern = /^https?:\/\//;
    const namePatern = /^[a-zA-Z0-9 ]+$/;

    if (!values.name) {
        errors.name = 'Name is required'
    } else if (values.name.length < 3 || values.name.length > 20) {
        errors.name = 'Name must be between 3 and 20 characters'
    } else if (!namePatern.test(values.name)) {
        errors.name = 'Name must includes alphanumeric characters and digits'
    }
    if (!values.productNumber) {
        errors.productNumber = 'Product number is required'
    } else if (!namePatern.test(values.productNumber)) {
        errors.productNumber = 'Product number must includes alphanumeric characters and digits'
    } else if (values.productNumber.length < 3 || values.productNumber.length > 20) {
        errors.productNumber = 'Product number must be between 3 and 20 characters'
    }
    if (!values.imageUrl) {
        errors.imageUrl = 'ImageUrl is required'
    } else if (!imageUrlPattern.test(values.imageUrl)) {
        errors.imageUrl = 'Invalid URL!'
    }

    if (!values.material) {
        errors.material = 'Material is required'
    } else if (values.material.length < 3 || values.material.length > 20) {
        errors.material = 'Material must be between 3 and 20 characters'
    }

    if (!values.description) {
        errors.description = 'Description is required'
    } else if (values.description.length < 3 || values.description.length > 200) {
        errors.description = 'Description must be  between 3 and 200 characters'
    }

    if (!values.price) {
        errors.price = 'Price is required'
    } else if (values.price <= 0 || values.price > 1000) {
        errors.price = 'Price should be between 1 and 1000'
    }
    if (!values.category) {
        errors.category = 'Category is required';
    }
    if (!Object.values(values.colors).some((color) => color === true)) {
        errors.colors = 'Please select at least one color';
    }

    return errors;
}


