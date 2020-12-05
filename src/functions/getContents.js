const root = {
    type: "dir",
    children: {
        home: {
            type: "dir",
            children: {
                myname: {
                    type: "dir",
                    children: {
                        "filea.txt": {
                            type: "file",
                        },
                        "fileb.txt": {
                            type: "file",
                        },
                        "projects": {
                            type: "dir",
                            children: {
                                mysupersecretproject: {
                                    type: "dir",
                                    children: {
                                        mysupersecretfile: {
                                            type: "file",
                                        },
                                    },
                                }
                            },
                        },
                    }
                },
            },
        }
    },
};

export default function getContent (path) {

    const traverse = (arr, obj) => {
        let pathArray = arr.split('/');
        if (pathArray.length === 1) {
            const objectFilter = (targetType) => {
                return Object.keys(obj.children).filter((key) => obj.children[key].type === targetType);
            }

            const result = {
                name: pathArray[0],
                type: obj.type,
                files: objectFilter("file"),
                subdirectories: objectFilter("dir")
            }

            return result;
        } else {
            const newArr = pathArray.slice(1).join('/');
            return traverse(newArr, obj.children[pathArray[1]]);
        }
    }

    const result = traverse(path, root);
    return result;
}