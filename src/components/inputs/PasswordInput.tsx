import { Input, Button } from "@mui/base";
import { useState } from "react";
import { styled } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type PasswordInputProps = {
  name: string;
  required: boolean;
  label: string;
  textInfo: string;
  value: string;
  onChange: any;
};

const IconButton = styled(Button)(`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: #3E5060;
  `);

const InputAdornment = styled("div")`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function handleClickShowPassword() {
    setShowPassword(() => !showPassword);
  }

  function handleMouseDownPassword(event: any) {
    event.preventDefault();
  }

  // function handleChange(event: any) {
  //   setPassword(event.target.value);
  // }
  return (
    <div className="input-container">
      <label className="text-inputs-label">{props.label}</label>
      <Input
        name="password"
        required={props.required}
        type={showPassword ? "text" : "password"}
        value={props.value}
        onChange={props.onChange}
        className="inputs"
        endAdornment={
          <InputAdornment>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      ></Input>
      {props.textInfo && <p className="input-info-text">{props.textInfo}</p>}
    </div>
  );
}
