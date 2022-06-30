import react, {useState} from 'react';
import Sidebar from './Sidebar';
import '../static/styles/Cv.css';
import data from "../static/data/datos_cv.json";
import data_exp from "../static/data/data_exp.json";
import data_skills from "../static/data/data_skills.json";
import data_edu from "../static/data/data_edu.json";

const Cv = () => {

  const [exp, setExp] = useState( data_exp );
  const [skills, setSkills] = useState(data_skills);
  const [education, setEducation] = useState(data_edu);


  /*const url = 'https://1x07721st4.execute-api.us-east-2.amazonaws.com/v1';

  fetch(url,
    { method: "GET", mode: "cors", headers: { 'Content-Type': 'application/json'}, data: { 'data': 'exp' }})
    .then(response => response.json())
    .then(r => console.log(r))
    .catch(err => alert(err));
*/

  return(
    <main>
      <Sidebar/>
      <div className="content-cv">
        <div className="experience">
          <h1>Profesional Experience</h1>
          {
            exp.map( e => (
              <div className="exp-item" key={e.id}>
                <div className="exp-emp">{e.empresa}</div>
                <div className="exp-time">{e.periodo}</div>
                <div className="exp-desc">{e.puesto}</div>
                <p>{e.descripcion}</p>
                <ul>
                  {
                  e.respondabilidades.map( r => (
                    <li>{r}</li>
                  ))
                }
                </ul>
                <br></br>
              </div>
            ))

          }
          <br></br>

          <h1>Education</h1>
          {
            education.map(e => (
              <div className="exp-item" key={e.id}>
                <div className="exp-emp">{e.institucion}</div>
                <div className="exp-time">{e.periodo}</div>
                <div className="exp-desc">{e.programa}</div>
                <p><i>{e.descripcion }</i></p>
                <br></br>
              </div>
              
            ))
          }
        </div>

        <div className="skills">
          <h1>SKILLS</h1>
            <div className="skill-tag">
            {
              skills.map( e => (
                <div className="skill-group" key={e.id}>
                  <div className="skill-title">{e.grupo}</div>
                      {
                        e.items.map( i => (
                          <div className="skill-item" key={i.id}>
                            <div className="skill-name">{i.skill}</div>
                            <div className="skill-level">{i.level}</div>
                          </div>
                        ))
                      }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )

}

export default Cv;