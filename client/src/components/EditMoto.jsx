import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOne, editMoto } from "../services/MotoService";

const initialState = {
    _id: "",
    brand: "",
    model: "",
    cc: "",
    imageUrl: "",
    price: "",
}

export default function () {
    const [formValues, setFormValues] = useState(initialState);
    const { motoId } = useParams();

    useEffect(() => {
        getOne(motoId)
            .then(result => setFormValues(result))
    }, [])

    console.log(initialState)

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const resetForm = () => {
        setFormValues(initialState);
    }

    const onEditMotoClickHandler = (e) => {
        e.preventDefault();
        editMoto(formValues,motoId)
        .then(result=>console.log(result))
    }

    return (
        <section id="create-page" className="auth" >
            <form id="create">
                <div className="container">
                    <h1>Edit Motorcycle</h1>

                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" placeholder="Enter brand..." value={formValues.brand} onChange={changeHandler} />

                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" placeholder="Enter model..." value={formValues.model} onChange={changeHandler} />

                    <label htmlFor="cc">Cubic-centimeters:</label>
                    <input type="number" id="cc" name="cc" placeholder="Enter cc..." value={formValues.cc} onChange={changeHandler} />

                    <label htmlFor="imageUrl">Link to image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter Photo Url..." value={formValues.imageUrl} onChange={changeHandler} />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" placeholder="Enter price...$$" value={formValues.price} onChange={changeHandler} />

                    <button className="btn submit" type="submit" onClick={onEditMotoClickHandler}>Edit Motorcycle</button>
                </div>


                <button className="btn submit"><Link to={'/'}>Back</Link></button>
            </form>
        </section>
    );
}