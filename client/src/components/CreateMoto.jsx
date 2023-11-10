// import { Link, useNavigate } from "react-router-dom";
// import { useState, useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { addMoto } from "../services/MotoService";

// const initialState = {
//     brand: "",
//     model: "",
//     cc: "",
//     imageUrl: "",
//     price: "",
// }

// export default function CreateMoto({
//     addMotoHandler,

// }) {
//     const [formValues, setFormValues] = useState(initialState);
//     const navigate = useNavigate();
//     const { user } = useContext(AuthContext);

//     console.log(initialState)

//     const changeHandler = (e) => {
//         setFormValues(state => ({
//             ...state,
//             [e.target.name]: e.target.value
//         }));
//     }

//     const resetForm = () => {
//         setFormValues(initialState);
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         // addMoto(formValues) Before adding _id
//         addMoto(formValues, user._id)
//             .then(result => addMotoHandler(result))
//             .catch(err => console.log(err))
//         resetForm();
//         navigate('/');
//     }


//     return (
//         <section id="create-page" className="auth" onSubmit={onSubmit}>
//             <form id="create">
//                 <div className="container">
//                     <h1>Create Motorcycle</h1>

//                     <label htmlFor="brand">Brand:</label>
//                     <input type="text" id="brand" name="brand" placeholder="Enter brand..." value={formValues.brand} onChange={changeHandler} />

//                     <label htmlFor="model">Model:</label>
//                     <input type="text" id="model" name="model" placeholder="Enter model..." value={formValues.model} onChange={changeHandler} />

//                     <label htmlFor="cc">Cubic-centimeters:</label>
//                     <input type="number" id="cc" name="cc" placeholder="Enter cc..." value={formValues.cc} onChange={changeHandler} />

//                     <label htmlFor="imageUrl">Link to image:</label>
//                     <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter Photo Url..." value={formValues.imageUrl} onChange={changeHandler} />

//                     <label htmlFor="price">Price:</label>
//                     <input type="number" id="price" name="price" placeholder="Enter price...$$" value={formValues.price} onChange={changeHandler} />

//                     <button className="btn submit" type="submit" disabled={Object.values(formValues).some(x => !x)}>Create Motorcycle</button>
//                 </div>
//                 {Object.values(formValues).some(x => !x) && <div style={{ color: "red", fontSize: "18px" }}>Fill required fields!</div>}

//                 <button className="btn submit"><Link to={'/'}>Back</Link></button>
//             </form>
//         </section>
//     );
// }

// CreateMoto.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addMoto } from '../services/MotoService';

const initialState = {
    brand: '',
    model: '',
    cc: '',
    imageUrl: '',
    price: '',
};

const CreateMoto = ({ addMotoHandler }) => {
    const [formValues, setFormValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        console.log(errors)

        if (!formValues.brand.trim() || formValues.brand.trim().length < 3 || formValues.brand.trim().length > 15) {
            newErrors.brand = 'Brand must be between 3 and 15 characters long!';
        }

        if (!formValues.model.trim()) {
            newErrors.model = 'Model is required, at least 1 character!';
        }

        if (!formValues.cc.trim() || Number(formValues.cc) < 49 || Number(formValues.cc) > 1300) {
            newErrors.cc = 'Cubic-centimeters must be between 49 and 1300';
        }

        if (!formValues.price.trim() || Number(formValues.price) < 1) {
            newErrors.price = 'Price must be at least 1!';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const changeHandler = (e) => {
        setFormValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (validateForm()) {
            addMoto(formValues)
                .then((result) => {
                    addMotoHandler(result);
                    navigate('/');
                })
                .catch((error) => {
                    console.error('Error adding moto:', error);
                    setErrors({ general: 'An error occurred. Please try again later.' });
                });
        }
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmitHandler}>
                <div className="container">
                    <h1>Create Motorcycle</h1>

                    <label htmlFor="brand">Brand:</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        placeholder="Enter brand..."
                        value={formValues.brand}
                        onChange={changeHandler}
                    />
                    {errors.brand && <p className="error">{errors.brand}</p>}

                    <label htmlFor="model">Model:</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Enter model..."
                        value={formValues.model}
                        onChange={changeHandler}
                    />
                    {errors.model && <p className="error">{errors.model}</p>}

                    <label htmlFor="cc">Cubic-centimeters:</label>
                    <input
                        type="number"
                        id="cc"
                        name="cc"
                        placeholder="Enter cc..."
                        value={formValues.cc}
                        onChange={changeHandler}
                    />
                    {errors.cc && <p className="error">{errors.cc}</p>}

                    <label htmlFor="imageUrl">Link to image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter Photo Url..."
                        value={formValues.imageUrl}
                        onChange={changeHandler}
                    />

                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Enter price...$$"
                        value={formValues.price}
                        onChange={changeHandler}
                    />
                    {errors.price && <p className="error">{errors.price}</p>}

                    {errors.general && <p className="error">{errors.general}</p>}

                    <button className="btn submit" type="submit">
                        Create Motorcycle
                    </button>
                </div>

                <button className="btn submit">
                    <Link to={'/'}>Back</Link>
                </button>
            </form>
        </section>
    );
};

export default CreateMoto;
