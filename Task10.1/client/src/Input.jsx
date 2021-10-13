import React from 'react'

const Input = (props)=>{
    return <div class="form-group">
       <input name={props.name} type={props.type} placeholder={props.placeholder} onChange = {props.onChange}/>
    </div>

}
export default Input