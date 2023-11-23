import style from "../EditMoto/EditMoto.module.css";

import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOne, editMoto } from "../../services/MotoService";

const initialState = {
    _id: "",
    brand: "",
    model: "",
    cc: "",
    imageUrl: "",
    price: "",
    cityLocation: "",
}

export default function ({
    updateAppState,
}) {
    const [formValues, setFormValues] = useState(initialState);
    const { motoId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOne(motoId)
            .then(result => setFormValues(result))
            .catch(err => console.log(err))
    }, [motoId])

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        editMoto(formValues, motoId)
            .then(result => {
                console.log(result);
                updateAppState();
            })
            .catch(err => console.log(err));

        navigate('/catalog');
    }

    return (
        <section id="create-page" className={style.auth} >
            <form id="create" onSubmit={onSubmitHandler}>
                <div className="container">
                    <h1>Edit Motorcycle Offer</h1>

                    <label htmlFor="brand">Brand:</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        placeholder="Enter brand..."
                        value={formValues.brand}
                        onChange={changeHandler}
                    />

                    <label htmlFor="model">Model:</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        placeholder="Enter model..."
                        value={formValues.model}
                        onChange={changeHandler}
                    />

                    <label htmlFor="cc">Cubic-centimeters:</label>
                    <input
                        type="number"
                        id="cc"
                        name="cc"
                        placeholder="Enter cc..."
                        value={formValues.cc}
                        onChange={changeHandler}
                    />

                    <label htmlFor="hp">Horse power:</label>
                    <input
                        type="number"
                        id="hp"
                        name="hp"
                        placeholder="Enter hp..."
                        value={formValues.hp}
                        onChange={changeHandler}
                    />

                    <label htmlFor="imageUrl">Link to image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Enter Photo Url..." value={formValues.imageUrl}
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

                    <label htmlFor="cityLocation">City:</label>
                    <input
                        type="text"
                        id="cityLocation"
                        name="cityLocation"
                        placeholder="Enter city..."
                        value={formValues.cityLocation}
                        onChange={changeHandler}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        id="summary"
                        name="summary"
                        placeholder="Enter details..."
                        value={formValues.summary}
                        onChange={changeHandler}
                    />

                    <button className="btn submit" type="submit">Edit Offer</button>
                </div>

                <button className="btn submit"><Link to={'/'}>Back</Link></button>
            </form>
        </section>
    );
}