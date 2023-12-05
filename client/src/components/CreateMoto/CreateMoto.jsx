import style from '../CreateMoto/CreateMoto.module.css';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { addMoto } from '../../services/MotoService';

const initialState = {
    brand: '',
    model: '',
    cc: '',
    imageUrl: '',
    price: '',
    cityLocation: '',
    hp: '',
    summary: '',
};

const CreateMoto = ({ addMotoHandler }) => {
    const [formValues, setFormValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // console.log(formValues)

    const validateForm = () => {
        const newErrors = {};

        // console.log(errors)

        if (!formValues.brand.trim() || formValues.brand.trim().length < 3 || formValues.brand.trim().length > 15) {
            newErrors.brand = 'Brand must be between 3 and 15 characters long!';
        }

        if (!formValues.cityLocation.trim() || formValues.cityLocation.trim().length < 2 || formValues.cityLocation.trim().length > 25) {
            newErrors.cityLocation = 'City must be between 2 and 25 characters long!';
        }

        if (!formValues.model.trim()) {
            newErrors.model = 'Model is required, at least 1 character!';
        }

        if (!formValues.cc.trim() || Number(formValues.cc) < 49 || Number(formValues.cc) > 1300) {
            newErrors.cc = 'Cubic-centimeters must be between 49cc and 1300cc';
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
                    toast.success(`Moto: ${formValues.brand}-added successfully.`, {
                        position: "top-center",
                        autoClose: 3000,
                        });
                })
                .catch((error) => {
                    console.error('Error adding moto:', error);
                    setErrors({ general: 'An error occurred. Please try again later.' });
                    toast.error('Error adding moto.', {
                        position: "top-center",
                        autoClose: 3000,
                        });
                });
        }
    };

    return (
        <section id="create-page" className={style.auth}>
            <form id="create" onSubmit={onSubmitHandler}>
                <div className="container">
                    <h1>Create Motorcycle Offer</h1>

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

                    <label htmlFor="hp">Horse Powers:</label>
                    <input
                        type="number"
                        id="hp"
                        name="hp"
                        placeholder="Enter horse powers..."
                        value={formValues.hp}
                        onChange={changeHandler}
                    />

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


                    <label htmlFor="model">Location(City):</label>
                    <input
                        type="text"
                        id="cityLocation"
                        name="cityLocation"
                        placeholder="Enter City Location..."
                        value={formValues.cityLocation}
                        onChange={changeHandler}
                    />
                    {errors.cityLocation && <p className="error">{errors.cityLocation}</p>}


                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        id="summary"
                        name="summary"
                        placeholder="Enter details..."
                        value={formValues.summary}
                        onChange={changeHandler}
                    />

                    {errors.general && <p className="error">{errors.general}</p>}

                    <button className="btn submit" type="submit">
                        Create Offer
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
