import { Link } from "react-router-dom";

function CreateMoto() {

    return (
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">
                    <h1>Create Motorcycle</h1>

                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" placeholder="Enter brand..." />

                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" name="model" placeholder="Enter model..." />

                    <label htmlFor="cc">CC:</label>
                    <input type="number" id="cc" name="cc" placeholder="Enter cc..." />

                    <label htmlFor="imageUrl">ImageUrl:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter Photo Url..." />

                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" placeholder="Enter price...$$" />

                    <button className="btn submit" type="submit">Create Motorcycle</button>
                </div>

                <button className="btn submit"><Link to={'/'}>Back</Link></button>
            </form>
        </section>
    );
}

export default CreateMoto;