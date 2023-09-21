export default function SecondaryButton(props: {
  text: string;
  className: string;
}) {
  const classes = `secondary-button ${props.className}`;
  return <button className={classes}>{props.text}</button>;
}
