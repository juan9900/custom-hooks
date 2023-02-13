
import {useState} from 'react';

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);


    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    const onResetForm = () => {
        // Object.keys(formState).forEach(k => {
        //     setFormState({
        //         [k]:''
        //     })
        // })
        // Esta fue mi opcion 👆
        setFormState(initialForm);
    }
    
    return{
        ...formState,
        formState,
        onResetForm,
        onInputChange
    }
}
