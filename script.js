const postsUrl = "http://localhost:3000/posts"
const userUrL = "http://localhost:3000/users"
const commentsUrl = "http://localhost:3000/comments"
const boxPost = document.querySelector("#box-post")
const modal = document.querySelector("#modal")


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
            postBtnOne.addEventListener('click', function() {
                modalWhole.style.display = 'block';
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

            //Modal
            const modalWhole = document.createElement("div")
            modalWhole.setAttribute("class", "modal")
            modalWhole.setAttribute("tabindex", "-1")
            modalWhole.setAttribute("role", "dialog")
            modalWhole.setAttribute("aria-labelledby", "exampleModalCenteredLabel")
            modalWhole.setAttribute("aria-hidden", "true")
            modal.appendChild(modalWhole)

            const modalBox = document.createElement("div")
            modalBox.setAttribute("class", "modal-dialog modal-dialog-centered modal-dialog-scrollable")
            modalBox.setAttribute("id", "myModal")
            modalWhole.appendChild(modalBox)

            const modalContent = document.createElement("div")
            modalContent.setAttribute("class", "modal-content")
            modalBox.appendChild(modalContent)

            const modalHeader = document.createElement("div")
            modalHeader.setAttribute("class", "modal-header")
            modalContent.appendChild(modalHeader)

            const modalTitle = document.createElement("h5")
            modalTitle.setAttribute("class", "modal-title")
            modalTitle.textContent = element["title"]
            modalHeader.appendChild(modalTitle)

            const modalBtnClose = document.createElement("button")
            modalBtnClose.setAttribute("type", "button")
            modalBtnClose.setAttribute("class", "close")
            modalBtnClose.setAttribute("data-dismiss", "modal")
            modalBtnClose.setAttribute("aria-label", "Close")
            modalHeader.appendChild(modalBtnClose)

            const spanBtnClose = document.createElement("span")
            spanBtnClose.setAttribute("aria-hidden", "true")
            modalBtnClose.appendChild(spanBtnClose)

            const modalBody = document.createElement("div")
            modalBody.setAttribute("class", "modal-body")
            modalBody.textContent = element["body"]
            modalBox.appendChild(modalBody)
            
            const modalFooter = document.createElement("div")
            modalFooter.setAttribute("class", "modal-footer")
            modalHeader.appendChild(modalFooter)

            const modalFooterBtnClose = document.createElement("button")
            modalFooterBtnClose.setAttribute("type", "button")
            modalFooterBtnClose.setAttribute("class", "btn btn-secondary")
            modalFooterBtnClose.setAttribute("data-dismiss", "modal")
            modalFooter.appendChild(modalFooterBtnClose)

            const modalFooterBtnModify = document.createElement("button")
            modalFooterBtnModify.setAttribute("type", "button")
            modalFooterBtnModify.setAttribute("class", "btn btn-primary")
            modalFooter.appendChild(modalFooterBtnModify)
            


        })
    })
    
