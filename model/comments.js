exports.comments = [
    {author: '小明', text: "Nothing is impossible, the word itself says 'I'm possible'!"},
    {
        author: '小强',
        text: "You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you"
    },
    {author: '小兵', text: "Even the greatest was once a beginner. Don't be afraid to take that first step."},
    {author: '拉登', text: "You are afraid to die, and you're afraid to live. What a way to exist."}
];

exports.dataModel1 = {
    name: "dataModel1",
    url: "http://localhost:5000/insert",
    method: "post",
    createTime: Date.now(),
    identity: "admin",
    _json: {}
};

exports.dataModel2 = {
    name: "dataModel2",
    url: "http://localhost:5000/search",
    method: "get",
    createTime: Date.now(),
    identity: "admin",
    _json: {}
};

