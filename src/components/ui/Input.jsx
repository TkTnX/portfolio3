export const Input = ({ label, name, placeholder, type = "text" }) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm opacity-60">{label}</span>
      <input
        className="border border-gray-400 p-2 rounded-lg"
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
};
