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

export default async function getContent (path) {

    const traverse = (str, obj) => {
        let pathArray = str.split('/');
        if (pathArray.length === 1) {

            const objectFilter = (targetType) => {
                if (obj.type === "file") {return null};
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

            if (!obj.children[pathArray[1]]) {
                throw new Error('that path does not exist');
            }

            return traverse(newArr, obj.children[pathArray[1]]);
        }
    }

    const result = traverse(path, root);
    return result;
}