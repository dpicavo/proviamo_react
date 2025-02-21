import { useState } from 'react';


function CardForm({addCity}) {
const [formData, setFormData] = useState({
  title:"",
  description:"",
  imgurl:"",
  isVisited: false,
  

});

const handleInputChange = (e) =>  {
  const {name, value, type, checked} = e.target
  const InputValue = type == "checkbox" ? checked : value;
  setFormData( {
    ...formData,
    [name]: InputValue,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
    const city = {
      id: Math.random(),
      title: formData.title,
      description: formData.description,
      imgurl: formData.imgurl,
      isVisited: formData.isVisited,  
    };
    setFormData({
      title:"",
      description:"",
      imgurl:"",
      isVisited: false,
    }
    )
    addCity(city) 


}

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10  bg-zinc-900 p-5 rounded-lg">
        <div className="flex flex-col">
            <label>Nome Città</label>
            <input 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleInputChange}></input>
        </div> 
        <div className="flex flex-col">
            <label>Descrizione</label>
            <textarea 
              name="description" 
              value={formData.description}
              onChange={handleInputChange}></textarea>
        </div> 
        <div className="flex flex-col">
            <label>Immagine</label>
            <input 
              type="text" 
              name="imgurl" 
              value={formData.imgurl}
              onChange={handleInputChange}></input>
        </div>  
        <div className="flex flex-col">
            <label>Visitata?</label>
            <input 
              type="checkbox" 
              name="isVisited" 
              checked={formData.isVisited}
              onChange={handleInputChange}></input>
        </div> 
        <button className="bg-zinc-950" type="submit">Aggiungi Card</button>
      </form>
    );  
}

export default CardForm;