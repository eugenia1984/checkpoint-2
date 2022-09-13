import React from "react";
import { useForm } from "react-hook-form";

const FormularioDeContactoComponent = () => {
  const { 
    register, 
    handleSubmit, 
    watch,
    formState: {errors} 
  } = useForm({
    defaultValues: {
      user: "",
      email: "",
      comments: ""
    }
  });
  
  //console.log(errors);
  const user = (watch("user"));

  return(
    <>
      <div className="container main my-3">
        <form 
          id="form" 
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="mb-3">
            <label 
              htmlFor="user" 
              className="form-label"
            >User:</label>
            <input 
              {...register("user", {required: 'Este campo es requerido'} )} 
              type="text" 
              className="form-control" 
              id="user" 
              placeholder="Ingresa tu usuario"
            />
            <p>{user}</p>
            <p>{errors.name?.message}</p>
          </div>
          <div className="mb-3">
            <label 
              htmlFor="email" 
              className="form-label"
              placeholder="example@example.com"
            >Email:</label>
            <input 
              {...register("email", {
                required: 'Este campo es requerido. Para ser un email valido debe tener el @ y el .'})} 
              type="email" 
              className="form-control" 
              id="email" 
              aria-describedby="emailHelp" 
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="form-floating mb-3">
            <label 
              htmlFor="comments"
            >Comentarios:</label>
            <textarea 
              className="form-control" 
              {...register("comments", {
                required: 'Este campo es requerido', 
                minLength: {
                  value: 4,
                  message: 'Tiene un minimo de 4 caracteres'
                },
                maxLength: {
                  value: 220,
                  message: 'Tiene un maximo de 220'
                }}
              )}
              id="comments"
              placeholder="Tu comentario, entre 4 a 220 caracteres"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-info" 
            id="submit"
          >Submit</button>
        </form>
      </div>
    </>
  );
};

export { FormularioDeContactoComponent };