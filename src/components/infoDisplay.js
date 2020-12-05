import Dir from './Dir';

export default function InfoDisplay (props) {
    if (props.obj.type === "file") {
        return (
            <div>
                <p>THIS IS FILE: {props.obj.name}</p>
            </div>
        )
    } else if (props.obj.type === "dir") {
        return (
            <Dir obj={props.obj}></Dir>
        )
    } else {
        return null;
    }
}