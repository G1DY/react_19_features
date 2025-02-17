import { useActionState } from "react";

const increment = (prevCount: any, formData: any) => {
  console.log(formData.get("name"));
  return prevCount + 1;
};

const Counter = () => {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form action="" className="align-items-center display-flex">
      <h1 className=" text-2xl">{state}</h1>
      <button
        type="submit"
        className="rounded-md p-2 bg-teal-300"
        formAction={formAction}
      >
        increment
      </button>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="enter your name"
        className="border-2"
      />
    </form>
  );
};
export default Counter;
