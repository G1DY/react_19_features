import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "submit"}
      </button>
    </div>
  );
};
export default FormButton;
