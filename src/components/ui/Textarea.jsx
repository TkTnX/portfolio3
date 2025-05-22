import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useCallback } from "react";

export const Textarea = ({ label, value, setValue }) => {
  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm opacity-60">{label}</span>
      <SimpleMdeReact value={value} onChange={onChange} />
    </label>
  );
};
