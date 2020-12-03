import data from "../data.txt";

export default function getContent () {

    let root = {
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

    console.log(root)
    return 'test';
}