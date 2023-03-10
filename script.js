const myJson = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "Riel",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "amyrobson",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "maxblagun",
      },
      replies: [
        {
          id: 3,
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: "1 week ago",
          score: 4,
          replyingTo: "maxblagun",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramsesmiron",
          },
        },
        {
          id: 4,
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: "2 days ago",
          score: 2,
          replyingTo: "ramsesmiron",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "Riel",
          },
        },
      ],
    },
  ],
};

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
  
      <p class="commentText"><span class="highlight">@${firstReply.replyingTo}, </span>${firstReply.content}</p>
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
  
  <li class="reply" id="currentUser">
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
                <p class="commentText"><span class="highlight">@${currentUserReply.replyingTo}, </span>${currentUserReply.content}
                </p>
                <button class="scoreBtn">
                  <img
                    src="images/icon-plus.svg"
                    alt="add to score"
                    class="addToScore"
                  />${currentUserReply.score}<img
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
                  />Delete</button>
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
  e.stopPropagation();

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
  } else if (e.target.classList.contains("addToScore")) {
    addToScore(e.target);
  } else if (e.target.classList.contains("subtractFromScore")) {
    substractFromScore(e.target);
  } else if (e.target.classList.contains("editBtn")) {
    displayEditMode(e.target);
  } else if (e.target.classList.contains("updateBtn")) {
    postEditedReply(e.target);
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
                placeholder="add your Reply"
                class="replyTextArea"
            ></textarea>
            <div class="coverImgBtn">
                <img
                src="${myJson.currentUser.image.webp}"
                alt=""
                srcset=""
                class="userImg"
                />
                <button class="inputReplyBtn">Reply</button>
            </div>
    </form>
  
  
  `;
  replyInputSectionCreationButton.disabled = true;
  replyInputSectionCreationButton.classList.add("opacity");
  const textarea = commentEntity.querySelector(".replyTextArea");
  const userName =
    commentEntity.parentElement.parentElement.querySelector(".name");
  console.log(userName.innerText);
  textarea.innerText = `@${userName.innerText}, `;
};

const postReply = (replyBtn) => {
  console.log(replyBtn.parentElement.parentElement);
  const replyForm = replyBtn.parentElement.parentElement;
  const textAreaContent =
    replyBtn.parentElement.previousElementSibling.value.trim();

  let text;

  const replyingTo =
    replyBtn.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.querySelector(
      ".name"
    ).innerText;

  if (textAreaContent.split(" ").indexOf(`@${replyingTo},`) === 0) {
    console.log("work");
    const textArray = textAreaContent.split(",").splice(1, 1);

    text = textArray.toString();
  } else {
    text = textAreaContent;
  }
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
                <p class="commentText"><span class="highlight">@${replyingTo}, </span>${text}
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
                  />Delete</button>
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
  replyInputSectionCreationButton.classList.remove("opacity");
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

const addToScore = (plusBtn) => {
  const score = parseFloat(plusBtn.parentElement.innerText.trim());
  if (plusBtn.classList.contains("disabled")) return;

  plusBtn.parentElement.innerHTML = `
  
                  <img
                    src="images/icon-plus.svg"
                    alt="add to score"
                    class="addToScore disabled"
                   
                  />${score + 1}<img
                    src="images/icon-minus.svg"
                    alt="subtract from score"
                    class="subtractFromScore"
                  />


  `;
};

const substractFromScore = (minusBtn) => {
  const plusBtn = minusBtn.previousElementSibling;
  if (!plusBtn.classList.contains("disabled")) return;

  const score = parseFloat(minusBtn.parentElement.innerText.trim());

  minusBtn.parentElement.innerHTML = `
  
  <img
                    src="images/icon-plus.svg"
                    alt="add to score"
                    class="addToScore"
                   
                  />${score - 1}<img
                    src="images/icon-minus.svg"
                    alt="subtract from score"
                    class="subtractFromScore"
                  />
  
  `;
};

const displayEditMode = (editBtn) => {
  //do
  disableAllReplyButton();
  if (editBtn.classList.contains("clicked")) return;
  const li = editBtn.parentElement;
  console.log(li);
  li.classList.add("edit");
  const text = li.firstElementChild.nextElementSibling.innerText.trim();
  console.log(text);
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
               
                <textarea
                    name="input Reply"
                    id=""
                    cols=""
                    rows=""
                    placeholder=""
                    class="replyTextArea edit editTextArea"
                ></textarea>
                
                  <button class="updateBtn">UPDATE</button>
                
       
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
                <button class="editBtn clicked opacity">
                  <img
                    src="images/icon-edit.svg"
                    alt="edit button"
                    srcset=""
                  />Edit
                </button>
  
  `;
  const textArea = li.querySelector(".replyTextArea");
  textArea.value = text;
};

const postEditedReply = (updateBtn) => {
  enableAllReplyButton();
  const li = updateBtn.parentElement;
  const allText =
    updateBtn.parentElement.firstElementChild.nextElementSibling.value.trim();
  //console.log(allText.split("").innerText("@"));
  let replyingTo;
  let text;
  if (allText.split("").indexOf("@") === 0) {
    replyingTo = allText.split(",").splice(0, 1).toString() + ",";
    text = allText.split(",").splice(1, 1).toString();
  } else {
    replyingTo = "";
    text = allText;
  }

  console.log(text);
  li.classList.remove("edit");
  li.innerHTML = `
  
  <div class="commentHeader">
                  <img
                    src="${myJson.currentUser.image.webp}"
                    alt="riel"
                    srcset=""
                    class="userImg"
                  />
                  <span class="name">${myJson.currentUser.username}</span>
                  <span class="you">you</span>
                  <span class="timeOfComment">secs ago</span>
                </div>
                <p class="commentText"><span class="highlight">${replyingTo}</span>${text}
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
                  />Delete</button>
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

const disableAllReplyButton = () => {
  const replyBtns = commentLists.querySelectorAll(".replyBtn");
  replyBtns.forEach((replyBtn) => {
    replyBtn.disabled = true;
    replyBtn.classList.add("opacity");
  });
};

const enableAllReplyButton = () => {
  const replyBtns = commentLists.querySelectorAll(".replyBtn");
  replyBtns.forEach((replyBtn) => {
    replyBtn.disabled = false;
    replyBtn.classList.remove("opacity");
  });
};
