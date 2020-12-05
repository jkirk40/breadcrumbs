export default function Breadcrumb(props) {
    const pathArray = props.path.split('/')
    const current = pathArray[0];

    const handleClick = (link) => {
        console.log(props.obj)
        console.log(props.path)
        console.log(link)
        let arr = pathArray;
    }

    const recursiveBreadcrumb = () => {
        if (pathArray.length === 1) {
            return '';
        } else {
            const newPath = pathArray.slice(1).join('/');
            return (
                <Breadcrumb
                    obj={props.obj}
                    path={newPath}
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