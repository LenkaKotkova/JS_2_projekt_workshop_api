import './style.css'
import { Venue } from '../Venue' 
import { Instructor } from '../Instructor'

export const WorkshopIntro = (props) => {
    return (
        <div>
            <p className="oddeleni">2. Reseni pomoci komponent</p>
            <h2 className='workshop__title'>{props.title}</h2>
            <p>{props.description}</p>
            
            <h3>O kurzu</h3>
            <p>{props.intro}</p>

            <h3>Základní info</h3>
            <p>Úroveň: {props.level}</p>
            <p>Cena: {props.price}Kč</p>
            <p>Počet hodin: {props.duration}</p>

            <h3>Otevřené kurzy</h3>
            <div className='info'>
                < Venue         venueName={props.venueName} 
                                street={props.street} 
                                city={props.city} 
                                instructions={props.instructions} 
                                photo={props.photo}
                />

                < Instructor    instructorName={props.instructorName} 
                                email={props.email} 
                                profession={props.profession} 
                                bio={props.bio} 
                                avatar={props.avatar}
                />
            </div>
        </div>
    )
}
