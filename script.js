const postsUrl = "http://localhost:3000/posts"
const userUrL = "http://localhost:3000/users"
const commentsUrl = "http://localhost:3000/comments"
const boxPost = document.querySelector("#box-post")
const modal = document.querySelector("#modalCentered")


fetch(postsUrl)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((element) => {
            const postBox = document.createElement("div")
            postBox.setAttribute("class", "col")
            boxPost.appendChild(postBox)

            const postCard = document.createElement("div")
            postCard.setAttribute("class", "card shadow-sm")
            postBox.appendChild(postCard)

            const postBody = document.createElement("div")
            postBody.setAttribute("class", "card-body")
            postCard.appendChild(postBody)

            const postTitle = document.createElement("p")
            postTitle.setAttribute("class", "card-text")
            postTitle.textContent = element["title"]
            postBody.appendChild(postTitle)

            const postPlacingBtn = document.createElement("div")
            postPlacingBtn.setAttribute("class", "d-flex justify-content-between align-items-center")
            postBody.appendChild(postPlacingBtn)

            const postGroupBtn = document.createElement("div")
            postGroupBtn.setAttribute("class", "btn-group")
            postPlacingBtn.appendChild(postGroupBtn)

            const postBtnOne = document.createElement("button")
            postBtnOne.setAttribute("type", "button")
            postBtnOne.setAttribute("class", "btn btn-sm btn-outline-secondary")
            postBtnOne.setAttribute("data-target", "myModal")
            postBtnOne.setAttribute("data-toggle", "modal");
            postGroupBtn.appendChild(postBtnOne)

            const postBtnOneText = document.createElement("p")
            postBtnOneText.setAttribute("class", "card-text")
            const view = "View"
            postBtnOneText.textContent = view
            postBtnOne.appendChild(postBtnOneText)
            const botonModal = document.querySelector('[data-modal="mi-modal"]');
            postBtnOne.addEventListener('click', function() {
                modal.style.display = 'block';
            });


            const postBtnTwo = document.createElement("button")
            postBtnTwo.setAttribute("type", "button")
            postBtnTwo.setAttribute("class", "btn btn-sm btn-outline-secondary")
            postGroupBtn.appendChild(postBtnTwo)

            const postBtnTwoText = document.createElement("p")
            postBtnTwoText.setAttribute("class", "card-text")
            const remove = "Delete"
            postBtnTwoText.textContent = remove
            postBtnTwo.appendChild(postBtnTwoText)

            const modalText = document.createElement("div")
            modalText.setAttribute("class", "modal-dialog modal-dialog-centered modal-dialog-scrollable")
            modalText.setAttribute("id", "myModal")
            modal.appendChild(modalText)


        })
    })
