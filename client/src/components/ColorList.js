import React, { useState } from "react";
import axios from "axios";
import AddColor from './AddColor'

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  // console.log('colors', colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // console.log('id', colorToEdit.id)
    axios
        .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit, {
          headers: {
              Authorization: localStorage.getItem('token')}
      })
        .then(res => {
          console.log('res in saveEdit', res)
          // updateColors(res.data)
          //since we got back the data as the specific edited color, I really don't know how should I deal with this,
          //it's not like a list of colors to update the state
          //also it's working to edit so I think it's fine
          //just curious how the serve is designed in this way, is this another way to do it
          
        })
        .catch(err => console.log(err.response))
    
  };

  const deleteColor = color => {
    console.log('color in deleteColor', color)
    axios
        .delete(`http://localhost:5000/api/colors/${color.id}`, {
          headers: {
              Authorization: localStorage.getItem('token')}
      })
        .then(res => {
          console.log('data from deleteColor', res)
          //since we got back the data as an id, I really don't know how should I deal with this id,
          //it's not like a list of colors to update the state
          //also it's working to delete so I think it's fine
          //just curious how the serve is designed in this way, is this another way to do it
        })
        .catch(err => console.log(err.response))
  };

  const addColor = color => {
    axios
        .post('http://localhost:5000/api/colors/', color, {
          headers: {
              Authorization: localStorage.getItem('token')}
      })
        .then(res => {
          console.log('color to add', res)
          updateColors(res.data)
        })
        .catch(err=> console.loh(err.response))
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer">
        <AddColor addColor={addColor}/>
      </div>
    </div>
  );
};

export default ColorList;
