const postsUrl = "http://localhost:3000/posts"
const userUrL = "http://localhost:3000/users"
const commentsUrl = "http://localhost:3000/comments"
const boxPost = document.querySelector("#box-post")
const mainPage = document.querySelector("#main")
let elemnt = 0

fetch(postsUrl)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((e) => {
            elemnt++;
            const postNew = document.createElement("div")
            postNew.classList.add("card-text")
            postNew.setAttribute("newElement", elemnt)

            boxPost = document.createElement("div")
            boxPost.classList.add("col")
            
            const 

        })
    })
