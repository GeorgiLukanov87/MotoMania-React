import noImageAvailable from "C:/Users/User/Desktop/react-project-def/client/src/no-image-available/NoPhotoAvailable1.png";


import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteMoto } from "../../services/MotoService";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

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
    const [toggle, setToggle] = useState(false)

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

    function toggleOwnerContact(e) {
        setToggle(true);
    }

    return (
        <section id="moto-details">
            <div className="info-section">
                <div className="moto-header">

                    <div className="image-wrap1">
                        {moto?.imageUrl
                            ? <img src={moto?.imageUrl} alt="not-alt" />
                            : <img src={noImageAvailable} alt="not-alt" />
                        }
                    </div>

                    <div>
                        <span className="levels">Price: <h2>{moto?.price}$</h2></span>
                    </div>

                    <div className="moto-details-wrapper1">
                        <h5>Brand: {moto?.brand}</h5>
                        <h5>Model: {moto?.model}</h5>
                        <h5 className="type">Cubic-centimeters: {moto?.cc}</h5>
                        {moto?.hp && <h5 className="type">Horse Power: {moto?.hp}</h5>}
                    </div>

                </div>

                <p className="levels">Available from: {moto?.createdAt}</p>

                <div className="text">
                    <span>Summary:</span>
                    <p className="motoSummaryText">
                        {moto?.summary ? moto?.summary : "No summary added!"}

                    </p>
                </div>

                <button className="ownerContactWrapper" onClick={toggleOwnerContact}>Connect to Owner
                    <div>
                        <div>
                            {toggle && <a href={`mailto: ${moto?.auth.email}`}>
                                <br />
                                <i className="fa-solid fa-envelope fa-beat-fade"></i>
                                <span className="ownerSpan"> {moto?.auth.email}</span></a>
                            }
                        </div>
                    </div>
                </button>

                <div className="details-comments">
                    <h2>Comments:</h2>

                    <ul>
                        {moto?.comments?.map(x =>
                            <li key={uniqid()} className="comment">
                                <p>
                                    <span className="usernameCommentSpan">
                                        {!x.split(' : ')[0] ? "Anonymous : " : `${x.split(' : ')[0]} : `}
                                    </span>
                                    {!x.split(' : ')[1] ? "Empty" : `${x.split(' : ')[1]}`}
                                </p>
                            </li>
                        )}
                    </ul>
                    <div>
                        {
                            !moto?.comments &&
                            <p className="no-comment">No comments</p>
                        }
                    </div>

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