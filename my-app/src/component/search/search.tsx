type searchProps = {
    placeholder: string, 
    onChange : (e: React.ChangeEvent<HTMLInputElement>)=> void
}

export default function Search(props: searchProps){
    return <input placeholder={props.placeholder} onChange={props.onChange}></input>
}