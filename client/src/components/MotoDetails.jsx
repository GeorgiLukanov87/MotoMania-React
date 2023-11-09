import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { deleteMoto } from "../services/MotoService";
import { useNavigate } from "react-router-dom";

const MotoDetails = ({
    motos,
    removeMotoFromState,

}) => {
    const { motoId } = useParams();
    const navigate = useNavigate();

    const moto = motos.find(m => m._id === motoId);

    function onClickDeleteHandler(){
        deleteMoto(motoId)
        .then(removeMotoFromState(motoId),
        navigate('/catalog')
        );
    }

    return (
        <section id="game-details">
            <h1>Motorcycle Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={moto?.imageUrl} alt="no-moto" />
                    <h1>Brand: {moto?.brand}</h1>
                    <h2>Model: {moto?.model}</h2>
                    <span className="levels">Price: {moto?.price}$$</span>
                    <p className="type">Cubic-centimeters: {moto?.cc} cc</p>
                </div>

                <p className="text">
                    {moto?.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                    </ul>
                    {
                        !moto?.comments &&
                        <p className="no-comment">No comments.</p>
                    }

                </div>

                <div className="buttons">
                    <a className="button">
                        Edit
                    </a>
                    <a className="button" onClick={onClickDeleteHandler}>
                        Delete
                    </a>
                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" >
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter name..."
                    />

                    <textarea
                        name="comment"
                        placeholder="Comment..."
                    />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />


                </form>
                <button className="btn submit"><Link to={'/catalog'}>Back</Link></button>
                <button className="btn submit"><Link to={'/catalog'}>Back</Link></button>
                <button className="btn submit"><Link to={'/catalog'}>Back</Link></button>

            </article>

        </section>
    );
};

export default MotoDetails;