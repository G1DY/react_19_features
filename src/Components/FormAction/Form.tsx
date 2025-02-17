const Form = () => {
  const formAction = (formData: any) => {
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(userData);
  };
  return (
    <form action={formAction}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="enter name"
        className="border-2 border-black rounded"
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        name="emal"
        placeholder="enter email"
        className="border-2 border-black rounded"
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="enter password"
        className="border-2 border-black rounded"
      />
      <br />
      <button type="submit" className="bg-black text-white px-4 py-2 mt-3">
        Submit
      </button>
    </form>
  );
};
export default Form;
