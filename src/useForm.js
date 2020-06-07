import { useState, useEffect} from 'react';

const useForm = (callback, validate) =>{
    const [valueInput, setValueInput] = useState({
        email: '',
        password: ''
    })
    
    const [error, setError] = useState({
        //   email: '',
        //   password: ''
    })

      const [isSubmitting, setIsSubmitting] = useState(false)
      // add new state for error
      // function that validate error
      // pass these error back to form
    const _handleChange = e =>{
        const {name, value} = e.target
        setValueInput({
            ...valueInput,
            [name]: value
        })
    }
    const _handleSubmit = (e) => {
        e.preventDefault();
        setError(validate(valueInput))
        // callback()
        setIsSubmitting(true)
    }

    useEffect(() => {
        // check see if there are no error
        if(Object.keys(error).length === 0 && isSubmitting) {
            callback()
        }
    }, [error]);
    return{
        _handleChange,
        _handleSubmit,
        valueInput,
        error
    }
}

export default useForm;