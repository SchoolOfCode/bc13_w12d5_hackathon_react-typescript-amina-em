import './search.css';

type searchProps = {
    placeholder: string, 
    onChange : (e: React.ChangeEvent<HTMLInputElement>)=> void
}

export default function Search(props: searchProps){
    return <input className='search' placeholder={props.placeholder} onChange={props.onChange}></input>
}