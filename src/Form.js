import React from 'react';

import useForm from './useForm';
import validateFormLogin from './validateLogin';
import { Input, P } from './styleForm';

// document.designMode = 'on'
const Form = () => {
    const {
        _handleChange,
        _handleSubmit,
        valueInput,
        error
    } = useForm(submit, validateFormLogin)
    
    function submit() {
        console.log('Submit Successfully')
    }
    return (
        <form onSubmit={_handleSubmit} noValidate>
            <div>
                <label>Email</label>
                <div>
                    <Input 
                        className = {error.email && 'active'}
                        type='email' name='email'
                        value={valueInput.email}
                        onChange={_handleChange}
                    />
                    {/* show error */}
                    {
                        error.email && <P className = 'error'>{error.email}</P>
                    }
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <input 
                        className = {error.password && 'active'}
                        type="password" 
                        name="password"
                        value={valueInput.password} 
                        onChange={_handleChange}
                    />
                    {/* show error */}
                    {
                        error.password && <P className = 'error'>{error.password}</P>
                    }
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Form;
// form
// label/ input email
// label/ input password
// button submit

// handlechanges
// handle submit
// custom rect hook

// handle errors
// show error if there are errors