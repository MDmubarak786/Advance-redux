import React from 'react'
import TextField from '@mui/material/TextField'

const TextFieldBox = ({ label, onChange, value, styles }) => {
  return (
    <div className={styles}>
      <TextField
        label={label}
        color="primary"
        focused
        sx={{ width: '25%' }}
        onChange={onChange}
        value={value}
        type="text"
      />
    </div>
  )
}

export default TextFieldBox
