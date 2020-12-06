export default function Breadcrumb(props) {
    const pathArray = props.path.split('/')
    const current = pathArray[props.depth];

    const handleClick = () => {
        // To define the target link for each breadcrumb, we use its depth within the stack of links
        // eg.
        // root is at depth 0
        // home is at depth 1
        // myname is at depth 2
        // So if the current path is root/home/myname and the user clicks on 'home'
        // we get the new path by taking the first two items in the path array:
        // ['root', 'home', 'myname'].slice(0,2)  -----> ['root', 'home']
        const target = (pathArray.slice(0,props.depth + 1))
        // then join the new array and send it as an update
        const newPath = target.join('/');
        props.updatePath(newPath);
        // This could potentially be handled in react router but i wanted to minimize installed packages
    }

    const recursiveBreadcrumb = () => {
        if (pathArray.length - 1 === props.depth) {
            // Do not render another breadcrumb if the current number of breadcrumbs has reached the end of the path
            return '';
        } else {
            return (
                <Breadcrumb
                    depth={props.depth + 1}
                    path={props.path}
                    updatePath={props.updatePath}
                />
            )
        }
    }

    return (
        <div>
            <button onClick={handleClick}>{current}</button>
            {recursiveBreadcrumb()}
        </div>
    )
}