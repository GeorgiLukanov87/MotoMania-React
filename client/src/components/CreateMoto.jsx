import { Link } from "react-router-dom";
import { useState } from "react";

const initialState = {
    brand: "",
    model: "",
    cc: "",
    imageUrl: "",
    price: "",
}


export default function CreateMoto() {
    const [formValues, setFormValues] = useState(initialState);
    console.log(initialState)

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const gameData = Object.fromEntries(new FormData(e.target));
        console.log(gameData);

    }

    return (
        <section id="create-page" className="auth" onSubmit={onSubmit}>
            <form id="create">
                <div className="container">
                    <h1>Create Motorcycle</h1>

                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" placeholder="Enter brand..." value={formValues.brand} onChange={changeHandler} />

                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" placeholder="Enter model..." value={formValues.model} onChange={changeHandler} />

                    <label htmlFor="cc">Cubic-centimeters:</label>
                    <input type="number" id="cc" name="cc" placeholder="Enter cc..." value={formValues.cc} onChange={changeHandler} />

                    <label htmlFor="imageUrl">ImageUrl:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter Photo Url..." value={formValues.imageUrl} onChange={changeHandler} />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" placeholder="Enter price...$$" value={formValues.price} onChange={changeHandler} />

                    <button className="btn submit" type="submit">Create Motorcycle</button>
                </div>

                <button className="btn submit"><Link to={'/'}>Back</Link></button>
            </form>
        </section>
    );
}
