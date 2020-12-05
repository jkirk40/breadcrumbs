export default function InfoDisplay (props) {
    return (
        <div>
            <p>{props.obj.name}</p>
            <p>{props.obj.type}</p>
            <p>{props.obj.files}</p>
            <p>{props.obj.subdirectories}</p>
        </div>
    )
}