import React from 'react'

const Radio = (props)=>{
    return <div class="form-group">
       <input name={props.name} type={props.type} value = {props.value} placeholder={props.placeholder} checked={props.checked} id={props.id} onChange = {props.onChange} onClick = {props.onClick}/>
       <label >{props.placeholder} </label>
    </div>

}
export default Radio