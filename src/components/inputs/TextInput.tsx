import { Input } from "@mui/base";
import { useState } from "react";

type TextInputProps = {
  name: string;
  required: boolean;
  label: string;
  textInfo: string;
  value: string;
  onChange: any;
  // setUsername: any;
  // username: string;
};

export default function TextInput(props: TextInputProps) {
  // const [value, setValue] = useState(props.value);

  // function handleChange(event: any) {
  //   props.setValue(event.target.value);
  // }
  // console.log("****prop value", props.value);
  return (
    <div className="input-container">
      <label className="text-inputs-label">{props.label}</label>
      <Input
        name={props.name}
        className="inputs"
        required={props.required}
        type="text"
        value={props.value}
        onChange={props.onChange}
      ></Input>
      {props.textInfo && <p className="input-info-text">{props.textInfo}</p>}
    </div>
  );
}
