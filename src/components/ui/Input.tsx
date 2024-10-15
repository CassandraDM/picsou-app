type InputProps = {
  placeholder?: string;
  className?: string;
  type?: "text" | "number" | "password" | "email";
  setValue?: (value: any) => void;
};

const Input = ({ placeholder, className, type, setValue }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (!setValue) return;

    if (type === "number") {
      setValue(parseInt(e.target.value));
    } else {
      setValue(e.target.value);
    }
  };
  return (
    <input
      type={type || "text"}
      className={`${className} border-2 text-xl py-2 px-4 text-slate-600`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
