import { Input } from "@mui/base";

type EmailInputProps = {
  name: string;
  // required: boolean;
  label: string;
  textInfo: string;
  value: string;
  onChange: any;
};

export default function EmailInput(props: EmailInputProps) {
  return (
    <div className="input-container">
      <label className="text-inputs-label">{props.label}</label>
      <Input
        name={props.name}
        className="inputs"
        // required={props.required}
        type="email"
        value={props.value}
        onChange={props.onChange}
      ></Input>
      {props.textInfo && <p className="input-info-text">{props.textInfo}</p>}
    </div>
  );
}
