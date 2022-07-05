import React from "react"

export default function App() {
    
    let [values, setValues] = React.useState({
        email: "",
        password: "",
        ConfirmPassword: "",
        okayToEmail: false
    })
    
    console.log(values)
    
    function changeValue(event){
        const {name, value, type, checked} = event.target
        setValues(pre => ({
            ...pre,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
    function handleSubmit(event) {
        event.preventDefault()
        if(values.password === values.ConfirmPassword){
            console.log("Successfully signed up")
        }else{
            console.log("passwords to not match")
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email address"
                    className="form--input"
                    values={values.email}
                    onChange={changeValue}
                />
                <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    className="form--input"
                    values={values.password}
                    onChange={changeValue}
                />
                <input 
                    type="password" 
                    name="confirmpassword"
                    placeholder="Confirm password"
                    className="form--input"
                    values={values.ConfirmPassword}
                    onChange={changeValue}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        checked={values.okayToEmail}
                        onChange={changeValue}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                    onSubmit={handleSubmit}
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
