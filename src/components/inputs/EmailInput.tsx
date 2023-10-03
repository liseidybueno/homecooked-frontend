import { Input } from "@mui/base";
import { useState } from "react";

type EmailInputProps = {
  name: string;
  required: boolean;
  label: string;
  textInfo: string;
  value: string;
  setUsername: any;
  username: string;
};

export default function EmailInput(props: EmailInputProps) {
  console.log("****prop value", props.value);

  // const [email, setEmail] = useState(props.value);

  function handleChange(event: any) {
    props.setUsername(event.target.value);
    // setEmail(event.target.value);
  }
  return (
    <div className="input-container">
      <label className="text-inputs-label">{props.label}</label>
      <Input
        name={props.name}
        className="inputs"
        required={props.required}
        type="email"
        value={props.username}
        onChange={handleChange}
      ></Input>
      {props.textInfo && <p className="input-info-text">{props.textInfo}</p>}
    </div>
  );
}
