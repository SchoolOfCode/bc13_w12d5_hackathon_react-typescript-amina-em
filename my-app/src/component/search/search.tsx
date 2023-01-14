import "./search.css";

type searchProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Search(props: searchProps) {
  return (
    <input
      value={props.value}
      className="search"
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  );
}
