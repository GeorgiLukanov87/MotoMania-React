import style from "../MotoDetails/MotoDetails.module.css";
import noImageAvailable from "../../no-image-available/NoPhotoAvailable1.png";

import uniqid from 'uniqid'

import { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { AuthContext } from "../../contexts/AuthContext";
import { deleteMoto } from "../../services/MotoService";
import ShareArticleLink from "../Share/ShareArticleLink";


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
    console.log(moto)

    const onClickDeleteHandler = () => {
        deleteMoto(motoId)
            .then(() => {
                removeMotoFromState(motoId);
                navigate('/catalog');
                toast.success('Moto deleted successfully.', {
                    position: "top-center",
                    autoClose: 3000,
                });
            })
            .catch((error) => {
                console.error('Error deleting moto:', error);
                toast.error('Error deleting moto.', {
                    position: "top-center",
                    autoClose: 3000,
                });
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
            toast.error("Fill inputs!", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        addComment(motoId, finalCommentResult);
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
                    <div className="moto-details-wrapper1">
                        <h3>Brand: {moto?.brand}</h3>
                        <h3>Model: {moto?.model}</h3>
                        <h3>cc: {moto?.cc}</h3>
                        {moto?.hp && <h3>Horse Power: {moto?.hp}</h3>}
                    </div>
                </div>

                <div className={style.priceDateWrapper}>
                    <div>
                        <span className="levels"><h2>{moto?.price}$</h2></span>

                    </div>
                    <div>
                        <p className="levels">Available from: {moto?.createdAt}</p>

                    </div>
                </div>


                <div className="text">
                    <span>Summary:</span>
                    <p className={style.motoSummaryText}>
                        {moto?.summary ? moto?.summary : "No summary added!"}
                    </p>
                </div>

                <div className={style.ownerContactContainerWrapper}>

                    <div className={style.shareLinkDiv}>
                        <ShareArticleLink moto={moto} />
                    </div>
                    <div className={style.shareLinkDiv}>
                        <button onClick={toggleOwnerContact}>Connect to Owner
                            <div>
                                <div>

                                    {toggle &&
                                        <>
                                            <a href={`mailto: ${moto?.auth.email}`}>
                                                <br />
                                                <span className={style.ownerSpan}> {moto?.auth.email}</span>
                                            </a>
                                             | 
                                            <Link to={`/location/${moto?.cityLocation}`} className={style.locationButton}>
                                                Location
                                            </Link>
                                        </>
                                    }

                                </div>
                            </div>
                        </button>
                    </div>


                    <Link to={`/specs/${moto?.brand}:${moto?.model}`} className={style.ownerContactWrapper}>Highly-detailed technical data</Link>
                </div>

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
                    {moto?._ownerId === user?._id &&
                        <>
                            <Link to={`/edit/${motoId}`} className="button">
                                Edit
                            </Link>

                            <a className="button" onClick={onClickDeleteHandler}>
                                Delete
                            </a>
                        </>
                    }
                </div>
            </div>

            {user?.email &&
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
                            placeholder="Add Comment..."
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
            }

        </section>
    );
};

export default MotoDetails;