import { toast } from 'react-toastify';
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

    console.log(formValues)

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
              toast.success(`Moto: ${formValues.brand}-added successfully.`);
            })
            .catch((error) => {
              console.error('Error adding moto:', error);
              setErrors({ general: 'An error occurred. Please try again later.' });
              toast.error('Error adding moto.');
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
