import React from 'react'

const GenderCheckBox = ({onCheckBoxChange , selectedGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
           <label className={`label gap-2 cursor-pointer ${selectedGender == "male" ? "selected" : ""}`} >
            <span className='label-text'>Male</span>
            <input type='checkbox' className='checkbox border-slate-900'
            onChange = {() => onCheckBoxChange("male")}
            checked={selectedGender == "male"}
            ></input>
            </label>     
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender == "female" ? "selected" : ""}`}>
                <span className='label-text'>Female</span>
                <input type='checkbox' className='checkbox border-slate-900'
                onChange = {() => onCheckBoxChange("female")}
                checked={selectedGender == "female"}
                ></input>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox