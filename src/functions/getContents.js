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

    console.log(root)
    return 'test';
}