import React, {useState} from 'react';

const AddColor = ({addColor}) => {
    
    const [newColor, setNewColor] = useState({color: '', code: ''})
    const handleChange = event => {
        setNewColor({...newColor, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault()
        console.log(newColor)
        addColor(newColor)
    }

    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <label>
                    Color Name
                    <input 
                        type="text" 
                        name="color" 
                        value={newColor.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Hex Code
                    <input 
                        type="text" 
                        name="code" 
                        value={newColor.code}
                        onChange={handleChange}
                    />
                </label>

                <button >Add</button>
            </form>
        </div>
    )
}

export default AddColor; 