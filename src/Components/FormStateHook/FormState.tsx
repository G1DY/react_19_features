import FormButton from "./FormButton";

const FormState = () => {
  const myAction = async (formData: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPost = {
        name: formData.get("name")
        email: formData.get("email")
        password: formData.get("password")
    }
    console.log(newPost);
    
  };
  return (
    <form action={myAction}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="enter name"
          className="border-2"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="enter email"
          required
          className="border-2"
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="enter password"
          required
          className="border-2"
        />
      </div>
      <FormButton/>
    </form>
  );
};
export default FormState;
