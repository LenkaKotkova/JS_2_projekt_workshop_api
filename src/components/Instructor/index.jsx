import './style.css';

export const Instructor = (props) => {
    return (
        <div> 
            <div className='instructor__name'>   
                <div className="instructor__avatar">
                    <img src={props.avatar} alt="avatar" /> 
                </div>       
                <p><strong>Instructor: </strong> <br /> {props.instructorName}</p>
            </div> 
            <div className='instructor__info'>
                <p><strong>Email: </strong> {props.email}</p>
                <p><strong>Profession: </strong> {props.profession}</p>
                <p><strong>Bio: </strong> {props.bio}</p>

            </div>
        </div>
    )
}
