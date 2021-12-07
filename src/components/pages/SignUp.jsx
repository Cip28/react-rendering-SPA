import React,{useState,useReducer} from 'react';
import './SignUp.css'

export default function SignUp () {
    const formReducer = (state, event) => {
        return {
            ...state,
            [event.name]:event.value
        }
    }
    const [submitting,setSubmitting]=useState(false)
    const [formData, setFormData] = useReducer(formReducer, {})


    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false)
        },3000)
    }
    const handleChange = (e) => {
        setFormData({
            name: e.target.name,
            value: e.target.value
        });
    }
  

    return (
        <div className="wrapper">
            <div className="layout">
              
                {submitting &&
                <div>
                    You have submitted the following:
                    <ul>
                    {Object.entries(formData).map(([name, value]) => (
                        <li key={name}>{name}: {value.toString()}</li>
                    ))}
                    </ul>
                </div>
            }
            
            <form className="form" onSubmit={handleSubmit}>
                
             <h1 className="sign-up">Sign Up</h1>
                <fieldset>  {/* -------------name*/}
                    <label>Full Name:</label><br/>
                    <input
                        type="text"
                        placeholder="Your full name..."
                        className="input"
                        name="name"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset> {/* ------------email */}
                    <label>Email:</label><br/>
                    <input
                        type="email"
                        placeholder="Your email..."
                        className="input"
                        name="email"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>  {/* --------password*/}
                    <label>Password:</label><br/>
                    <input
                        type="password"
                        placeholder="Your password..."
                        className="input"
                        name="password"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>  {/* --------Country*/}
                    <label>Country:</label><br/>
                    <select name="country" onChange={handleChange}>
                        <option value="">--Please choose your country--</option>    
                        <option value="Romania">Romania</option>    
                        <option value="China">China</option>    
                        <option value="America">America</option>    
                        <option value="Spain">Spain</option>    
                        <option value="Englnd">England</option>    
                        <option value="France">France</option>    
                    </select>
                </fieldset>
                <fieldset onChange={handleChange}>  {/* --------places*/}
                    <label>Places you would like to visit:</label><br />
                        <input type="checkbox" value="Bali" name="I would visit"/>
                    <label>Bali beaches</label><br/>
                         <input type="checkbox" value="Pyramids of Giza" name="I would visit "/>
                     <label>The Great Pyramids of Giza</label><br/>
                         <input type="checkbox" value="Tesalonik Island" name="I would visit "/>
                     <label>Tesalonik Island</label><br/>
                         <input type="checkbox" value="Swiss Alps" name="I would visit "/>
                     <label>Swiss Alps</label><br/>
                         <input type="checkbox" value="Transylvania" name="I would visit"/>
                    <label>Transylvania</label>
                </fieldset>

                <div className="button">    
                    <button type="submit" className="btn btn-primary my-5 ">Submit</button>
                </div>
            </form>
   
            </div>
        </div>
    )
}