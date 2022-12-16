type searchProps = {
    onChange : (e: React.ChangeEvent<HTMLInputElement>)=> void
}

export default function Search(props: searchProps){
    return <input onChange={props.onChange}></input>
}