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
            // When pathArray.length is 1, it means we have reached the target and should return the info
            // for the obj passed to this level.

            // This returns all the children of a certain type in a directory, or null if the current object is a file
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
            // If pathArray is not 1, we are still searching through the tree
            // so we remove the first item in the path (root/home/myname --> home/myname)
            // and repeat this function one level deeper in the tree.
            const newPath = pathArray.slice(1).join('/');

            if (!obj.children[pathArray[1]]) {
                throw new Error('that path does not exist');
            }

            // As arguments we pass the new path and the correct child object (based on its name)
            return traverse(newPath, obj.children[pathArray[1]]);
        }
    }

    const result = traverse(path, root);

    await new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 500)
    });

    return result;
}