import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <div>
      <button type="submit" disabled={pending} className="border-2">
        {pending ? "Submitting..." : "submit"}
      </button>
    </div>
  );
};
export default FormButton;
