namespace inter_test {
// 通过 interface 定义结构体，约束对象具有的属性和属性类型
    interface Post {
        title: string
        author: string
    }

    let post: Post = {
        author: "Jack",
        title: "big bang",
    }


    console.log(post)


    function getTitle(post: Post): string {
        return post.title
    }

    // 严格检查：变量指定为 Post 类型时，不能多字段，也不能少字段
    let post2: Post = {
        title: "hello world",
        author: "Tim",
        // publishDate:"2020-12-01",
    }
    console.log(getTitle(post2))

// 非严格检查：变量指定为 Post 类型时，可以多字段，也能接收
    let post3 = {
        author: "hello ts",
        title: "Jane",
        publishDate: "2020-12-20",
    }

    console.log(getTitle(post3))
}




