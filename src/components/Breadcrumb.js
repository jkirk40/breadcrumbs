export default function Breadcrumb(props) {
    const pathArray = props.path.split('/')
    const current = pathArray[props.depth];

    const handleClick = (link) => {
        let arr = pathArray;
        const target = (arr.slice(0,props.depth + 1))
        const newPath = target.join('/');
        props.updatePath(newPath);
    }

    const recursiveBreadcrumb = () => {
        if (pathArray.length - 1 === props.depth) {
            return '';
        } else {
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