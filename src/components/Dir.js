export default function Directory(props) {
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