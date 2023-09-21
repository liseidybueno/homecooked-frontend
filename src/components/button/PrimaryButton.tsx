export default function PrimaryButton(props: {
  text: string;
  className: string;
}) {
  const classes = `primary-button ${props.className}`;
  return <button className={classes}>{props.text}</button>;
}
