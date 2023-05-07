const postsUrl = "http://localhost:3000/posts"
const userUrL = "http://localhost:3000/users"
const commentsUrl = "http://localhost:3000/comments"
const boxPost = document.querySelector("#box-post")
const modal = document.querySelector("#modal")
const secondModal = document.querySelector("#second-modal")


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
            postBtnOneText.setAttribute("data-bs-toggle", "modal")
            postBtnOneText.setAttribute("data-bs-target", "#exampleModal")
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

            //First Modal 
            const modalWhole = document.createElement("div")
            modalWhole.setAttribute("class", "modal")
            modalWhole.setAttribute("tabindex", "-1")
            modalWhole.setAttribute("role", "dialog")
            modalWhole.setAttribute("aria-labelledby", "exampleModalCenteredLabel")
            modalWhole.setAttribute("aria-hidden", "true")
            modal.appendChild(modalWhole)

            const modalBox = document.createElement("div")
            modalBox.setAttribute("class", "modal-dialog modal-dialog-centered modal-dialog-scrollable")
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

            const btnClose = document.createElement("button")
            btnClose.innerHTML = '<i class="bi"></i>'
            btnClose.setAttribute("type", "button")
            btnClose.setAttribute("class", "btn-close")
            btnClose.setAttribute("data-bs-dismiss", "modal")
            btnClose.setAttribute("aria-label", "Close")
            modalHeader.appendChild(btnClose)
            btnClose.addEventListener("click", function(){
                modalWhole.style.display = 'none';
            })

            // <i class="bi bi-pencil-square">

            const modalBody = document.createElement("div")
            modalBody.setAttribute("class", "modal-body")
            modalBody.textContent = element["body"]
            modalContent.appendChild(modalBody)
            
            const modalFooter = document.createElement("div")
            modalFooter.setAttribute("class", "modal-footer")
            modalContent.appendChild(modalFooter)

            const modalFooterBtnComments = document.createElement("button")
            modalFooterBtnComments.setAttribute("type", "button")
            modalFooterBtnComments.setAttribute("class", "btn btn-secondary")
            modalFooterBtnComments.setAttribute("data-dismiss", "modal")
            postBtnOneText.setAttribute("data-bs-toggle", "modal")
            postBtnOneText.setAttribute("data-bs-target", "#exampleModal")
            modalFooterBtnComments.textContent = "Open Comments"
            modalFooter.appendChild(modalFooterBtnComments)
            modalFooterBtnComments.addEventListener("click", function(){
                const secondModalEl = new bootstrap.Modal(secondModal);
                secondModalEl.show()
                //style.display = 'block';
                modalWhole.style.display = 'none';
            })

            fetch(commentsUrl)
                .then((res) => res.json())
                .then((dataComment) => {
                    dataComment.forEach((elementComment) => {
                        const secondModalWhole = document.createElement("div")
                        secondModalWhole.setAttribute("class", "modal")
                        secondModalWhole.setAttribute("tabindex", "-1")
                        secondModalWhole.setAttribute("role", "dialog")
                        secondModalWhole.setAttribute("aria-labelledby", "exampleModalCenteredLabel")
                        secondModalWhole.setAttribute("aria-hidden", "true")
                        secondModal.appendChild(secondModalWhole)

                        const secondModalBox = document.createElement("div")
                        secondModalBox.setAttribute("class", "modal-dialog modal-dialog-centered modal-dialog-scrollable")
                        secondModalWhole.appendChild(secondModalBox)

                        const secondModalContent = document.createElement("div")
                        secondModalContent.setAttribute("class", "modal-content")
                        secondModalBox.appendChild(secondModalContent)

                        const secondModalHeader = document.createElement("div")
                        secondModalHeader.setAttribute("class", "modal-header")
                        secondModalContent.appendChild(secondModalHeader)

                        const secondModalTitle = document.createElement("h5")
                        secondModalTitle.setAttribute("class", "modal-title")
                        secondModalTitle.textContent = elementComment["name"]
                        secondModalHeader.appendChild(secondModalTitle)

                        const secondBtnClose = document.createElement("button")
                        secondBtnClose.innerHTML = '<i class="bi"></i>'
                        secondBtnClose.setAttribute("type", "button")
                        secondBtnClose.setAttribute("class", "btn-close")
                        secondBtnClose.setAttribute("data-bs-dismiss", "modal")
                        secondBtnClose.setAttribute("aria-label", "Close")
                        secondModalHeader.appendChild(secondBtnClose)

                        // <i class="bi bi-pencil-square">

                        const secondModalBody = document.createElement("div")
                        secondModalBody.setAttribute("class", "modal-body")
                        secondModalBody.textContent = elementComment["body"]
                        secondModalContent.appendChild(secondModalBody)
            
                        const secondModalFooter = document.createElement("div")
                        secondModalFooter.setAttribute("class", "modal-footer")
                        secondModalContent.appendChild(secondModalFooter)

                        const secondModalFooterBtnComments = document.createElement("button")
                        secondModalFooterBtnComments.setAttribute("type", "button")
                        secondModalFooterBtnComments.setAttribute("class", "btn btn-secondary")
                        secondModalFooterBtnComments.setAttribute("data-dismiss", "modal")
                        secondModalFooterBtnComments.textContent = "Open Comments"
                        secondModalFooter.appendChild(secondModalFooterBtnComments)
                        })
                    })

                        // const secondModalFooterBtnModify = document.createElement("button")
                        // secondModalFooterBtnModify.setAttribute("type", "button")
                        // secondModalFooterBtnModify.setAttribute("class", "btn btn-primary")
                        // secondModalFooterBtnModify.textContent = "Modify"
                        // secondModalFooter.appendChild(secondModalFooterBtnModify)

        })
    })
