export default function Breadcrumb(props) {
    const pathArray = props.path.split('/')
    const current = pathArray[props.depth];

    const handleClick = (link) => {
        console.log(props)
        console.log(props.path)
        console.log(link)
        let arr = pathArray;
    }

    const recursiveBreadcrumb = () => {
        if (pathArray.length - 1 === props.depth) {
            return '';
        } else {
            const newPath = pathArray.slice(1).join('/');
            return (
                <Breadcrumb
                    depth={props.depth + 1}
                    obj={props.obj}
                    path={props.path}
                    updatePath={props.updatePath}
                />
            )
        }
    }

    return (
        <div>
            <button onClick={() => handleClick(current)}>{current}</button>
            {recursiveBreadcrumb()}
        </div>
    )
}