export default function InfoDisplay (props) {
    if (props.obj.type === "file") {
        return (
            <div>
                <p>THIS IS FILE: {props.obj.name}</p>
            </div>
        )
    } else if (props.obj.type === "dir") {
        return (
            <div>
                <p>Current directory: {props.obj.name}</p>
                {props.obj.files.map((file, index) => 
                    <p key={index}>{file}</p>
                )}
                {props.obj.subdirectories.map((subdirectory, index) => 
                    <p key={index}>{subdirectory}</p>
                )}
            </div>
        )
    }
}