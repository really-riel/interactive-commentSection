import myJson from "/interactive-commentSection/data.json" assert { type: "json" };

console.log(myJson.comments[1].replies);

const commentLists = document.querySelector(".commentLists");
const main = document.querySelector(".main");
const initApp = () => {
  createComments();
  commentLists.addEventListener("click", carryOutSpecificFunctions);
  const sendBtn = document.querySelector(".addCommentBtn");
  sendBtn.addEventListener("click", createNewComments);
};

document.addEventListener("DOMContentLoaded", initApp);

const createComments = () => {
  myJson.comments.forEach((comment) => {
    const li = document.createElement("li");
    li.classList.add("comment");
    li.setAttribute("id", `${comment.id}`);
    li.innerHTML = `
    <div class="commentContentContainer">
    <div class="commentContent">
      <div class="commentHeader">
        <img src="${comment.user.image.webp}" alt="" srcset="" class="userImg" />
        <span class="name">${comment.user.username}</span>
        <span class="timeOfComment">${comment.createdAt}</span>
      </div>
  
      <p class="commentText">${comment.content}</p>
      <button class="scoreBtn">
        <img src="images/icon-plus.svg" alt="add to score" class="addToScore" />
        ${comment.score}
        <img
          src="images/icon-minus.svg"
          alt="subtract from score"
          class="subtractFromScore"
        />
      </button>
      <button class="replyBtn">
        <img src="images/icon-reply.svg" alt="" />
        Reply
      </button>
    </div>
    <div class="replyFormContainer"></div>
  </div>
  <ul class="replyContainer">
    <div class="verticalLine"></div>
    <div class="replyContentCover"></div>
  </ul>
      
               
        `;

    commentLists.appendChild(li);
  });
  loadFirstReply();
  loadCurrentUserReply();
  createAddCommentSection();
};

const loadFirstReply = () => {
  const firstReply = myJson.comments[1].replies[0];

  const secondcomment = document.getElementById("2");

  secondcomment.lastElementChild.lastElementChild.innerHTML += `
    
  <div class="commentContentContainer">
    <div class="commentContent">
      <div class="commentHeader">
        <img src="${firstReply.user.image.webp}" alt="" srcset="" class="userImg" />
        <span class="name">${firstReply.user.username}</span>
        <span class="timeOfComment">${firstReply.createdAt}</span>
      </div>
  
      <p class="commentText"><span class="highlight">@${firstReply.replyingTo}</span>${firstReply.content}</p>
      <button class="scoreBtn">
        <img src="images/icon-plus.svg" alt="add to score" class="addToScore" />
        ${firstReply.score}
        <img
          src="images/icon-minus.svg"
          alt="subtract from score"
          class="subtractFromScore"
        />
      </button>
      <button class="replyBtn">
        <img src="images/icon-reply.svg" alt="" />
        Reply
      </button>
    </div>
    <div class="replyFormContainer"></div>
  </div>
  <ul class="replyContainer">
    
    <div class="replyContentCover"></div>
  </ul>
          
    
    `;
};

const loadCurrentUserReply = () => {
  const currentUserReply = myJson.comments[1].replies[1];

  const secondcomment = document.getElementById("2");

  secondcomment.lastElementChild.lastElementChild.lastElementChild.firstElementChild.innerHTML += `
  
  <li class="reply" id="${currentUserReply.id}">
                <div class="commentHeader">
                  <img
                    src="${currentUserReply.user.image.webp}"
                    alt=""
                    srcset=""
                    class="userImg"
                  />
                  <span class="name">${currentUserReply.user.username}</span>
                  <span class="you">you</span>
                  <span class="timeOfComment">${currentUserReply.createdAt}</span>
                </div>
                <p class="commentText"><span class="highlight">@${currentUserReply.replyingTo}</span>
                  ${currentUserReply.content}
                </p>
                <button class="scoreBtn">
                  <img
                    src="images/icon-plus.svg"
                    alt="add to score"
                    class="addToScore"
                  />
                  ${currentUserReply.score}
                  <img
                    src="images/icon-minus.svg"
                    alt="subtract from score"
                    class="subtractFromScore"
                  />
                </button>
                <button class="deleteBtn">
                  <img
                    src="images/icon-delete.svg"
                    alt="delete Button"
                    srcset=""
                  />
                  Delete
                </button>
                <button class="editBtn">
                  <img
                    src="images/icon-edit.svg"
                    alt="edit button"
                    srcset=""
                  />Edit
                </button>
              </li>
  
  `;
};

const createAddCommentSection = () => {
  const li = document.createElement("li");

  li.classList.add("comment");

  li.innerHTML = `
    <form action="" class="replyInputForm">
            <textarea
              name="input Reply"
              id=""
              cols=""
              rows=""
              placeholder="Add a comment..."
              class="replyTextArea"
            ></textarea>
            <div class="coverImgBtn">
              <img
                src="${myJson.currentUser.image.webp}"
                alt=""
                srcset=""
                class="userImg"
              />
              <button class="addCommentBtn">SEND</button>
            </div>
          </form>
    
    
    `;
  const ul = document.createElement("ul");
  ul.classList.add("inputCommentSection");
  main.appendChild(ul);

  ul.appendChild(li);
};

const carryOutSpecificFunctions = (e) => {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("replyBtn")) {
    createReplyInputSection(e.target);
  } else if (e.target.classList.contains("inputReplyBtn")) {
    postReply(e.target);
  } else if (e.target.classList.contains("deleteBtn")) {
    createDeletePopUp(e.target);
  } else if (e.target.classList.contains("cancelBtn")) {
    cancelDeletePopUp(e.target);
  } else if (e.target.classList.contains("yesDeleteBtn")) {
    console.log("only God can help us");
    deleteReply(e.target);
  }
};

const createReplyInputSection = (replyInputSectionCreationButton) => {
  console.log(replyInputSectionCreationButton);
  const commentEntity =
    replyInputSectionCreationButton.parentElement.nextElementSibling;
  console.log(commentEntity);
  commentEntity.innerHTML += `
    <form action=""         class="replyInputForm">
            <textarea
                name="input Reply"
                id=""
                cols=""
                rows=""
                placeholder=""
                class="replyTextArea"
            ></textarea>
            <div class="coverImgBtn">
                <img
                src="/images/avatars/image-juliusomo.png"
                alt=""
                srcset=""
                class="userImg"
                />
                <button class="inputReplyBtn">Reply</button>
            </div>
    </form>
  
  
  `;
  replyInputSectionCreationButton.disabled = true;
  const textarea = commentEntity.querySelector(".replyTextArea");
  const userName =
    commentEntity.parentElement.parentElement.querySelector(".name");
  console.log(userName.innerText);
  textarea.innerText = `@${userName.innerText},
  `;
};

const postReply = (replyBtn) => {
  console.log(replyBtn.parentElement.parentElement);
  const replyForm = replyBtn.parentElement.parentElement;
  const textAreaContent =
    replyBtn.parentElement.previousElementSibling.value.trim();
  const textArray = textAreaContent.split(",").splice(1, 1);
  const text = textArray.toString();
  console.log(textArray.toString());

  const replyingTo =
    replyBtn.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.querySelector(
      ".name"
    ).innerText;

  console.log(replyingTo);
  const currentUserReply = myJson.comments[1].replies[1];
  const replyDisplay =
    replyBtn.parentElement.parentElement.parentElement.parentElement
      .nextElementSibling.lastElementChild;

  replyDisplay.innerHTML += `
  <li class="reply" id="">
                <div class="commentHeader">
                  <img
                    src="${currentUserReply.user.image.webp}"
                    alt=""
                    srcset=""
                    class="userImg"
                  />
                  <span class="name">${currentUserReply.user.username}</span>
                  <span class="you">you</span>
                  <span class="timeOfComment">${currentUserReply.createdAt}</span>
                </div>
                <p class="commentText"><span class="highlight">@${replyingTo}</span>${text}
                </p>
                <button class="scoreBtn">
                  <img
                    src="images/icon-plus.svg"
                    alt="add to score"
                    class="addToScore"
                  />0<img
                    src="images/icon-minus.svg"
                    alt="subtract from score"
                    class="subtractFromScore"
                  />
                </button>
                <button class="deleteBtn">
                  <img
                    src="images/icon-delete.svg"
                    alt="delete Button"
                    srcset=""
                  />
                  Delete
                </button>
                <button class="editBtn">
                  <img
                    src="images/icon-edit.svg"
                    alt="edit button"
                    srcset=""
                  />Edit
                </button>
              </li>
  
  
  `;
  const replyInputSectionCreationButton =
    replyForm.parentElement.previousElementSibling.lastElementChild;
  replyInputSectionCreationButton.disabled = false;
  console.log(replyInputSectionCreationButton);
  replyForm.remove();
};

const createDeletePopUp = (deleteBtn) => {
  //do
  const li = deleteBtn.parentElement;
  console.log(li);
  li.innerHTML += `
  <div class="deletePopUp">
      <div class="deleteOptionsDisplay">
        <h3>Delete comment</h3>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div class="buttonContainer">
          <button class="cancelBtn">NO, CANCEL</button>
          <button class="yesDeleteBtn">YES, DELETE</button>
        </div>
      </div>
    </div>
  `;
};

const cancelDeletePopUp = (cancelBtn) => {
  const deletePopUp = cancelBtn.parentElement.parentElement.parentElement;
  deletePopUp.remove();
};

const deleteReply = (deleteBtn) => {
  const reply =
    deleteBtn.parentElement.parentElement.parentElement.parentElement;
  const deletePopUp = deleteBtn.parentElement.parentElement.parentElement;
  console.log(reply);
  reply.remove();
  deletePopUp.remove();
};

const createNewComments = (e) => {
  e.preventDefault();

  const sendBtn = e.target;
  const textArea = sendBtn.parentElement.previousElementSibling;
  const commentText = sendBtn.parentElement.previousElementSibling.value.trim();
  console.log(commentText);

  const li = document.createElement("li");
  li.classList.add("reply");
  li.innerHTML = `
  
  <div class="commentHeader">
                  <img
                    src="${myJson.currentUser.image.webp}"
                    alt="${myJson.currentUser.username}"
                    srcset=""
                    class="userImg"
                  />
                  <span class="name">${myJson.currentUser.username}</span>
                  <span class="you">you</span>
                  <span class="timeOfComment">secs ago</span>
                </div>
                <p class="commentText">
                  ${commentText}
                </p>
                <button class="scoreBtn">
                  <img
                    src="images/icon-plus.svg"
                    alt="add to score"
                    class="addToScore"
                  />0<img
                    src="images/icon-minus.svg"
                    alt="subtract from score"
                    class="subtractFromScore"
                  />
                </button>
                <button class="deleteBtn">
                  <img
                    src="images/icon-delete.svg"
                    alt="delete Button"
                    srcset=""
                  />
                  Delete
                </button>
                <button class="editBtn">
                  <img
                    src="images/icon-edit.svg"
                    alt="edit button"
                    srcset=""
                  />Edit
                </button>
  
  `;
  commentLists.appendChild(li);
  textArea.value = "";
};
