import React from "react";
import { useForm } from "react-hook-form";

const FormularioDeContactoComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return(
    <>
      <div className="container main my-3">
        <form id="form" onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-3">
            <label for="user" className="form-label">User:</label>
            <input type="text" className="form-control" id="user" name="user" required placeholder="Name User" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" required placeholder="example@example.com" />
          </div>
          <div className="form-floating mb-3">
            <label for="comments"></label>
            <textarea className="form-control" placeholder="Leave a comment here" id="comments" name="comments"></textarea>
          </div>
          <button type="submit" class="btn btn-info" id="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export { FormularioDeContactoComponent };