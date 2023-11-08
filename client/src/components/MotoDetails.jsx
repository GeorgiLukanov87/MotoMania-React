import { useState } from "react";
import { useParams } from "react-router-dom";
import uniqid  from 'uniqid'

const MotoDetails = ({
    motos,

}) => {
    const { motoId } = useParams();
    const [comment, setComment] = useState({
        username: '',
        comment: '',
    });

    const moto = motos.find(x => x._id === motoId)

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={moto?.imageUrl} alt="no-moto" />
                    <h1>{moto?.title}</h1>
                    <span className="levels">MaxLevel: {moto?.maxLevel}</span>
                    <p className="type">Action, Crime, Fantasy</p>
                </div>
                <p className="text">
                    {moto?.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {moto?.comments?.map(x =>
                            <li key={uniqid()} className="comment">
                                <p>{x}</p>
                            </li>
                        )}

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
                    <a className="button">
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
                        value={comment.username}
                    />

                    <textarea 
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
            </article>
        </section>
    );
};

export default MotoDetails;