export default function Breadcrumb(props) {
    const pathArray = props.path.split('/')

    const handleClick = (link) => {
        console.log(props)
        console.log(link)
    }

    return (
        <div>
            {pathArray.map((link, index) => 
                <button onClick={() => handleClick(link)} key={index}>{link}</button>
            )}
        </div>
    )
}