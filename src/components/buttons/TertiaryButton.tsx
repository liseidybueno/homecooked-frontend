export default function TertiaryButton(props: {
  text: string;
  className: string;
}) {
  const classes = `tertiary-button ${props.className}`;
  return <button className={classes}>{props.text}</button>;
}
