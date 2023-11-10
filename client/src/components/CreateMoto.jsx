import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { addMoto } from "../services/MotoService";

const initialState = {
    brand: "",
    model: "",
    cc: "",
    imageUrl: "",
    price: "",
}

export default function CreateMoto({
    addMotoHandler,

}) {
    const [formValues, setFormValues] = useState(initialState);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

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

    const onSubmit = (e) => {
        e.preventDefault();
        // addMoto(formValues) Before adding _id
        addMoto(formValues, user._id)
            .then(result => addMotoHandler(result))
            .catch(err => console.log(err))
        resetForm();
        navigate('/');
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

                    <label htmlFor="imageUrl">Link to image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter Photo Url..." value={formValues.imageUrl} onChange={changeHandler} />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" placeholder="Enter price...$$" value={formValues.price} onChange={changeHandler} />

                    <button className="btn submit" type="submit" disabled={Object.values(formValues).some(x => !x)}>Create Motorcycle</button>
                </div>
                {Object.values(formValues).some(x => !x) && <div style={{ color: "red", fontSize: "18px" }}>Fill required fields!</div>}

                <button className="btn submit"><Link to={'/'}>Back</Link></button>
            </form>
        </section>
    );
}

// JSON owner format:

// {
//     auth:
//     {
//         email: 'admin@abv.bg',
//             username: 'Admin',
//                 _id: '60f0cf0b-34b0-4abd-9769-8c42f830dffc',
//                     accessToken: 'fde320ebc724e94ccf421c1f36cb0217a5acca8575eecdc452b7868863128a73',
// }
// }