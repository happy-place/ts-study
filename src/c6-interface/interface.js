var inter_test;
(function (inter_test) {
    let post = {
        author: "Jack",
        title: "big bang",
    };
    console.log(post);
    function getTitle(post) {
        return post.title;
    }
    // 严格检查：变量指定为 Post 类型时，不能多字段，也不能少字段
    let post2 = {
        title: "hello world",
        author: "Tim",
    };
    console.log(getTitle(post2));
    // 非严格检查：变量指定为 Post 类型时，可以多字段，也能接收
    let post3 = {
        author: "hello ts",
        title: "Jane",
        publishDate: "2020-12-20",
    };
    console.log(getTitle(post3));
})(inter_test || (inter_test = {}));
