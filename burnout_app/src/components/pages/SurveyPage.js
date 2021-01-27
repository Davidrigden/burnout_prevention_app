import React, {useState} from "react";
import { Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import LoggedInNavBar from "../NavBar/LoggedInNavBar";
import './SurveyPage.css';
import SadEmoji from '../../assets/png/sad.png';
import UnhappyEmoji from '../../assets/png/unhappy.png';
import ConfusedEmoji from '../../assets/png/confused.png';
import HappyEmoji from '../../assets/png/happy.png';
import BoredEmoji from '../../assets/png/bored-1.png';

function SurveyPage() {
  const { register, handleSubmit } = useForm();
  const [risk, setRisk] = useState()
  // const [msg, setMsg] = useState()

  

  const onSubmit = async (data) => {
    const queryURL =
      `http://hackathon-itc-2020.herokuapp.com/predict?hours_worked=${data.hoursPerWeek}&designation=${localStorage.getItem("designation")}&gender=${localStorage.getItem("gender")}&company_type=${localStorage.getItem("companyType")}&wfh_setup=${data.homeWorkspace}&concentration_score=${data.difficultiesConcentrating}&headache_score=${data.headacheFrequency}&sleep_score=${data.sleepDifficulties}&appetite_score=${data.appetiteChanges}&motivation_score=${data.motivationLoss}&weight_score=${data.weightChanges}&apathy_score=${data.apathy}`;
   
    const res = await axios.get(queryURL)

    const score = Math.round(res.data[0]*100)
    setRisk(score)

   
    const user = JSON.parse(localStorage.getItem("user"));
    await axios.put(`http://localhost:5000/api/users/${user.id}`, {score})
  };

  

  return (
    <div>
      <LoggedInNavBar />
    <div>
      {!risk && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>My Survey</h2>
          <div className="survey">
            <div>
              <label>
                <strong>
                  Did you experience any conflicts with coworkers?
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="conflicts"
                    type="radio"
                    value="yes"
                    ref={register}
                  />
                  Yes
                  <input
                    className="input-options"
                    name="conflicts"
                    type="radio"
                    value="no"
                    ref={register}
                  />
                  No
                </div>
              </label>
            </div>
            <div>
              <label>
                <strong>
                  How much time did you devote to outside work hobbies?
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="hobbieTime"
                    type="radio"
                    value="1"
                    ref={register}
                  />
                  0-1 hour
                  <input
                    className="input-options"
                    name="hobbieTime"
                    type="radio"
                    value="2"
                    ref={register}
                  />
                  1-2 hours
                  <input
                    className="input-options"
                    name="hobbieTime"
                    type="radio"
                    value="3"
                    ref={register}
                  />
                  2-3 hours
                  <input
                    className="input-options"
                    name="hobbieTime"
                    type="radio"
                    value="4"
                    ref={register}
                  />
                  3-4 hours
                  <input
                    className="input-options"
                    name="hobbieTime"
                    type="radio"
                    value="5"
                    ref={register}
                  />
                  over 4 hours
                </div>
              </label>
            </div>
            <div>
              <label>
                <strong>
                  How often did you experience body aches or pain?
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="pain"
                    type="radio"
                    value="never"
                    ref={register}
                  />
                  Never
                  <input
                    className="input-options"
                    name="pain"
                    type="radio"
                    value="rarely"
                    ref={register}
                  />
                  Rarely
                  <input
                    className="input-options"
                    name="pain"
                    type="radio"
                    value="sometimes"
                    ref={register}
                  />
                  Sometimes
                  <input
                    className="input-options"
                    name="pain"
                    type="radio"
                    value="frequently"
                    ref={register}
                  />
                  Fairly Often
                  <input
                    className="input-options"
                    name="pain"
                    type="radio"
                    value="always"
                    ref={register}
                  />
                  Very Often
                </div>
              </label>
            </div>

            <div>
              <label>
                <strong>
                  Do you feel like you have a strong general social support
                  system?
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="supportSystem"
                    type="radio"
                    value="yes"
                    ref={register}
                  />
                  Yes
                  <input
                    className="input-options"
                    name="supportSystem"
                    type="radio"
                    value="no"
                    ref={register}
                  />
                  No
                </div>
              </label>
            </div>

            <div>
              <label>
                <strong>Have you worked from home?</strong>
                <div>
                  <input
                    className="input-options"
                    name="workFromHome"
                    type="radio"
                    value="yes"
                    ref={register}
                  />
                  Yes
                  <input
                    className="input-options"
                    name="workFromHome"
                    type="radio"
                    value="no"
                    ref={register}
                  />
                  No
                </div>
              </label>
            </div>

            <div>
              <label>
                <strong>
                  Do you have a designated place to work from home?
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="homeWorkspace"
                    type="radio"
                    value="yes"
                    ref={register}
                  />
                  Yes
                  <input
                    className="input-options"
                    name="homeWorkspace"
                    type="radio"
                    value="no"
                    ref={register}
                  />
                  No
                </div>
              </label>
            </div>

            <div>
              <label>
                <strong>How many hours per week did you work?</strong>
                <div>
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="1"
                    ref={register}
                  />
                  10-20 hours
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="2"
                    ref={register}
                  />
                  20-30 hours
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="3"
                    ref={register}
                  />
                  30-40 hours
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="4"
                    ref={register}
                  />
                  40-50 hours
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="5"
                    ref={register}
                  />
                  50-60 hours
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="6"
                    ref={register}
                  />
                  60-70 hours
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="7"
                    ref={register}
                  />
                  70-75 hours
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="8"
                    ref={register}
                  />
                  75-80 hours
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="9"
                    ref={register}
                  />
                  over 80 hours
                  <input
                    className="input-options"
                    name="hoursPerWeek"
                    type="radio"
                    value="10"
                    ref={register}
                  />
                </div>
              </label>
            </div>
            <div>
              <label>
                <strong>
                  Did you experience difficulties concentrating during work?
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="difficultiesConcentrating"
                    type="radio"
                    value="1"
                    ref={register}
                  />
                  Never
                  <input
                    className="input-options"
                    name="difficultiesConcentrating"
                    type="radio"
                    value="2"
                    ref={register}
                  />
                  Rarely
                  <input
                    className="input-options"
                    name="difficultiesConcentrating"
                    type="radio"
                    value="3"
                    ref={register}
                  />
                  Sometimes
                  <input
                    className="input-options"
                    name="difficultiesConcentrating"
                    type="radio"
                    value="4"
                    ref={register}
                  />
                  Fairly Often
                  <input
                    className="input-options"
                    name="difficultiesConcentrating"
                    type="radio"
                    value="5"
                    ref={register}
                  />
                  Very Often
                </div>
              </label>
            </div>

            <div>
              <label>
                <strong>How often do you experience headaches?</strong>
                <div>
                  <input
                    className="input-options"
                    name="headacheFrequency"
                    type="radio"
                    value="1"
                    ref={register}
                  />
                  Never
                  <input
                    className="input-options"
                    name="headacheFrequency"
                    type="radio"
                    value="2"
                    ref={register}
                  />
                  Rarely
                  <input
                    className="input-options"
                    name="headacheFrequency"
                    type="radio"
                    value="3"
                    ref={register}
                  />
                  Sometimes
                  <input
                    className="input-options"
                    name="headacheFrequency"
                    type="radio"
                    value="4"
                    ref={register}
                  />
                  Fairly Often
                  <input
                    className="input-options"
                    name="headacheFrequency"
                    type="radio"
                    value="5"
                    ref={register}
                  />
                  Very Often
                </div>
              </label>
            </div>
            <div>
              <label>
                <strong>
                  How often do you experience trouble falling asleep or staying
                  asleep ?{" "}
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="sleepDifficulties"
                    type="radio"
                    value="1"
                    ref={register}
                  />
                  Never
                  <input
                    className="input-options"
                    name="sleepDifficulties"
                    type="radio"
                    value="2"
                    ref={register}
                  />
                  Rarely
                  <input
                    className="input-options"
                    name="sleepDifficulties"
                    type="radio"
                    value="3"
                    ref={register}
                  />
                  Sometimes
                  <input
                    className="input-options"
                    name="sleepDifficulties"
                    type="radio"
                    value="4"
                    ref={register}
                  />
                  Fairly Often
                  <input
                    className="input-options"
                    name="sleepDifficulties"
                    type="radio"
                    value="5"
                    ref={register}
                  />
                  Very Often
                </div>
              </label>
            </div>

            <div>
              <label>
                <strong>
                  Have you experienced any change in your appetite?
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="appetiteChanges"
                    type="radio"
                    value="1"
                    ref={register}
                  />
                  Never
                  <input
                    className="input-options"
                    name="appetiteChanges"
                    type="radio"
                    value="2"
                    ref={register}
                  />
                  Rarely
                  <input
                    className="input-options"
                    name="appetiteChanges"
                    type="radio"
                    value="3"
                    ref={register}
                  />
                  Sometimes
                  <input
                    className="input-options"
                    name="appetiteChanges"
                    type="radio"
                    value="4"
                    ref={register}
                  />
                  Fairly Often
                  <input
                    className="input-options"
                    name="appetiteChanges"
                    type="radio"
                    value="5"
                    ref={register}
                  />
                  Very Often
                </div>
              </label>
            </div>

            <div>
              <label>
                <strong>
                  Have you experienced unexpected weight gain or weight loss?
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="weightChanges"
                    type="radio"
                    value="yes"
                    ref={register}
                  />
                  Yes
                  <input
                    className="input-options"
                    name="weightChanges"
                    type="radio"
                    value="no"
                    ref={register}
                  />
                  No
                </div>
              </label>
            </div>

            <div>
              <label>
                <strong>
                  Have you felt apathetic about activities that usually bring
                  you joy?{" "}
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="apathy"
                    type="radio"
                    value="yes"
                    ref={register}
                  />
                  Yes
                  <input
                    className="input-options"
                    name="apathy"
                    type="radio"
                    value="no"
                    ref={register}
                  />
                  No
                </div>
              </label>
            </div>

            <div>
              <label>
                <strong>
                  Have you experienced a lack of motivation either
                  professionally or personally?
                </strong>
                <div>
                  <input
                    className="input-options"
                    name="motivationLoss"
                    type="radio"
                    value="1"
                    ref={register}
                  />
                  Never
                  <input
                    className="input-options"
                    name="motivationLoss"
                    type="radio"
                    value="2"
                    ref={register}
                  />
                  Rarely
                  <input
                    className="input-options"
                    name="motivationLoss"
                    type="radio"
                    value="3"
                    ref={register}
                  />
                  Sometimes
                  <input
                    className="input-options"
                    name="motivationLoss"
                    type="radio"
                    value="4"
                    ref={register}
                  />
                  Fairly Often
                  <input
                    className="input-options"
                    name="motivationLoss"
                    type="radio"
                    value="5"
                    ref={register}
                  />
                  Very Often
                </div>
              </label>
            </div>

            <input className="submit-button" type="submit" />
          </div>
        </Form>
      )}
  
      {risk && (
        <div className="row justify-content-center" id="burnout">
          <h1>Your burnout risk is {risk}%</h1>
        </div>
      )}

    
      {risk < 19 && (
        <div className="row justify-content-center">
          <div className="card justify-self-center" style={{width: '18rem'}}> 
          <img src={BoredEmoji} class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h3>Very low</h3>
              <p>
              Are you getting bored? Your burnout risk is extremely low. 
              Let’s see if you can share this
              benefit by helping out your fellow coworkers with their workload or
              adopting additional responsibilities within your company.
              </p>
            </div>
          </div>
        </div>
      )}
      {risk > 19 && risk < 40 && (
        <div className="row justify-content-center">
          <div className="card justify-self-center" style={{width: '18rem'}}> 
          <img src={HappyEmoji} class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h3>Healthy</h3>
              <p>
              You are doing well with your work/life balance and are not currently
            at risk for burnout. Keep up the good work!
              </p>
            </div>
          </div>
        </div>
      )}
      {risk > 39 && risk < 60 && (
        <div className="row justify-content-center">
          <div className="card justify-self-center" style={{width: '18rem'}}> 
          <img src={ConfusedEmoji} class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h3>Stage 1 Burnout Risk</h3>
              <p>
              You are in a preliminary stage of burnout risk. We recommend
            incorporating small lifestyle changes into your daily routine to
            mitigate this risk.
              </p>
            </div>
          </div>
        </div>
      )}

      {risk > 59 && risk < 80 && (
        <div className="row justify-content-center">
          <div className="card justify-self-center" style={{width: '18rem'}}> 
          <img src={SadEmoji} class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h3>Stage 2 Burnout Risk</h3>
              <p>
              You are in a moderate stage of burnout risk. We recommend
            incorporating manageable lifestyle changes into your daily routine
            or opening a dialogue with your team leader.
              </p>
            </div>
          </div>
        </div>
      )}
      {risk > 79 && (
        <div className="row justify-content-center">
          <div className="card justify-self-center" style={{width: '18rem'}}> 
          <img src={UnhappyEmoji} class="card-img-top" alt="..."></img>
            <div className="card-body">
              <h3>Stage 3 Burnout Risk</h3>
              <p>
                You are in the most advanced stage of burnout risk. We recommend
                immediate lifestyle changes or opening a dialogue with your team
                leader.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
    
  );
}

export default SurveyPage;