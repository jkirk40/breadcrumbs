export default function Directory(props) {
    const handleClick = (link) => {
        let oldPath = props.path.split('/');
        oldPath.push(link);
        const newPath = oldPath.join('/')
        props.updatePath(newPath);
    }

    return (
        <div className='dir'>
            <p>Current directory: {props.obj.name}</p>
            {props.obj.files.map((file, index) => 
                <button key={index} onClick={() => handleClick(file)}>
                    {file}
                </button>
            )}
            {props.obj.subdirectories.map((subdirectory, index) => 
                <button key={index} onClick={() => handleClick(subdirectory)}>
                    {subdirectory}
                </button>
            )}
        </div>
    )
}