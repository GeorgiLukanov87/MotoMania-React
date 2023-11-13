import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteMoto } from "../services/MotoService";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import uniqid from 'uniqid'
import { toast } from 'react-toastify';

const MotoDetails = ({
    motos,
    removeMotoFromState,
    addComment,

}) => {
    const navigate = useNavigate();
    const { motoId } = useParams();
    const { user } = useContext(AuthContext);

    const [comment, setComment] = useState({
        username: "",
        comment: "",
    });

    const moto = motos.find(m => m._id === motoId);

    const onClickDeleteHandler = () => {
        deleteMoto(motoId)
            .then(() => {
                removeMotoFromState(motoId);
                navigate('/catalog');
                toast.success('Moto deleted successfully.');
            })
            .catch((error) => {
                console.error('Error deleting moto:', error);
                toast.error('Error deleting moto.');
            });
    };

    const onChange = (e) => {
        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const addCommentHandler = (e) => {
        e.preventDefault();
        const finalCommentResult = `${comment.username} : ${comment.comment}`;

        if (finalCommentResult == ' : ') {
            toast.error("Fill inputs!");
            return;
        }

        addComment(motoId, finalCommentResult);
        console.log(finalCommentResult)
        comment.username = ""
        comment.comment = ""
    }

    return (
        <section id="moto-details">
            <div className="info-section">
                <div className="game-header">

                    <div className="image-wrap1">
                        {moto?.imageUrl
                            ? <img src={moto?.imageUrl} alt="not-alt" />
                            : <img src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png" alt="not-alt" />}

                    </div>
                    <div>
                        <span className="levels">Price: {moto?.price}$</span>
                    </div>

                    <div className="moto-details-wrapper1">
                        <h1>Brand: {moto?.brand}</h1>
                        <h2>Model: {moto?.model}</h2>

                        <div>
                            <p className="type">Cubic-centimeters: {moto?.cc} cc</p>
                        </div>
                        <div>
                            <p className="type">Available from:{moto?.createdAt}</p>
                        </div>
                    </div>

                </div>

                {/* <p className="text">
                    {moto?.summary}
                </p> */}

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {moto?.comments?.map(x =>
                            <li key={uniqid()} className="comment">
                                <p>
                                    {!x.split(' : ')[0] ? "Anonymous : " : `${x.split(' : ')[0]} : `}
                                    {!x.split(' : ')[1] ? "Empty" : `${x.split(' : ')[1]}`}
                                </p>
                            </li>
                        )}

                    </ul>
                    {
                        !moto?.comments &&
                        <p className="no-comment">No comments.</p>
                    }

                </div>

                <div className="buttons">

                    {moto?.auth?._id === user?._id

                        ? <>
                            <Link to={`/edit/${motoId}`} className="button">
                                Edit
                            </Link>

                            <a className="button" onClick={onClickDeleteHandler}>
                                Delete
                            </a>
                        </>
                        : ""
                    }

                </div>
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input onChange={onChange}
                        type="text"
                        name="username"
                        placeholder="Enter name..."
                        value={comment.username}
                    />
                    <textarea onChange={onChange}
                        name="comment"
                        placeholder="Comment..."
                        value={comment.comment}

                    />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>

                <button className="btn submit"><Link to={'/catalog'}>Back</Link></button>
            </article>
        </section>
    );
};

export default MotoDetails;