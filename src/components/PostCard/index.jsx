export const PostCard = ({title, body, id, cover}) => {
    return (
        <div className='post'>
            <img src={cover} alt={title}/>
            <div className="post-content">
                <h3> {title} </h3>
                <p> {body} - id: {id} </p>
            </div>
        </div>
    );
}