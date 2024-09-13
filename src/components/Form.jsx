function Form({setName, name}) {
    const handleChange =(ev)=>{
        setName(ev.target.value)
    }

  return (
    <form className="">
        <label htmlFor="name">¿Cuál es tu nombre?</label>
        <input type="text" id="name" name="name"placeholder="Nombre" onChange={handleChange} value={name} />
       
    </form>
  )
}

export default Form;