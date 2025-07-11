import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { WorkshopIntro } from '../components/WorkshopIntro';
const response = await fetch (
  'http://localhost:4000/api/workshops/0'
)

const responseJson = await response.json()
console.log(responseJson);

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1>Cviceni Workshop</h1>
    </header>
    <main>
      <h3>{responseJson.data.title}</h3>
      <p>{responseJson.data.description}</p>
      <p><strong>Úroveň: </strong>{responseJson.data.level}</p>
      <p><strong>Cena: </strong>{responseJson.data.price}</p>
      <p><strong>Trvání: </strong>{responseJson.data.duration}</p>
      <p><strong>Kde: </strong>{responseJson.data.venue.city}</p>
      <div className='instructor'>
        {}
        <img className='avatar-photo' src={responseJson.data.instructor.avatar} alt="" />  
        <p><strong>Instruktor: </strong> <br />{responseJson.data.instructor.name}</p>
      </div>

      <WorkshopIntro  title={responseJson.data.title} 
                      description={responseJson.data.description}
                      intro={responseJson.data.intro} 
                      level={responseJson.data.level}
                      price={responseJson.data.price}
                      duration={responseJson.data.duration}
//                    do komponenty Venue
                      venueName={responseJson.data.venue.name}
                      street={responseJson.data.venue.street}
                      city={responseJson.data.venue.city}
                      instructions={responseJson.data.venue.instructions}
                      photo={responseJson.data.venue.photo}
//                    do komponenty Instructor
                      instructorName={responseJson.data.instructor.name} 
                      email={responseJson.data.instructor.email} 
                      profession={responseJson.data.instructor.profession} 
                      bio={responseJson.data.instructor.bio} 
                      avatar={responseJson.data.instructor.avatar}
      />

    </main>
    <br />
    <footer>
      <p>Czechitas, JavaScript 2</p>
    </footer>
  </div>
);
