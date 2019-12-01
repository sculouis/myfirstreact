import {useState} from 'react'

export const useForm = (initialValues) => {
    const [values,setValues] = useState(initialValues)
    return [values,e => {
        console.log(`name:${e.target.name} - type:${e.target.type}`)
        // debugger
        switch (e.target.type) {
            case "checkbox":
                console.log(typeof e.target.value)
                if (typeof e.target.value == "string"){
                    setValues({...values,[e.target.name]:!(e.target.value == 'true')})
                }else{
                    setValues({...values,[e.target.name]:!e.target.value})
                }
                break;
            case "radio":
                if (typeof e.target.value == "string"){
                    setValues({...values,[e.target.name]:!(e.target.value == 'true')})
                }else{
                    setValues({...values,[e.target.name]:!e.target.value})
                }
                break;
            default:
                setValues({...values,[e.target.name]:e.target.value})
                break;
        }
        if (e.target.type === "radio"){
        }else{
        }
    }]
}