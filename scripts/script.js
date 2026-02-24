let interviewList = [];
let rejectedList = [];

// total job,interview,rejected count
let totalCount = collectId("total-count");
const allCarts = collectId("all-carts");
let interviewCount = collectId("interview-count");
let rejectedCount = collectId("reject-count");
function calculateCount() {
  totalCount.innerText = allCarts.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// button toggling
function toggleStyle(id) {
  let allBtn = collectId("all-btn");
  let interviewBtn = collectId("interview-btn");
  let rejectedBtn = collectId("rejected-btn");
  //remove blue from all button
  allBtn.classList.remove("text-white", "bg-sky-600");
  interviewBtn.classList.remove("text-white", "bg-sky-600");
  rejectedBtn.classList.remove("text-white", "bg-sky-600");
  //adding white bg to all btn
  allBtn.classList.add("bg-base-100", "text-black");
  interviewBtn.classList.add("bg-base-100", "text-black");
  rejectedBtn.classList.add("bg-base-100", "text-black");
  //removing white bg from the selected btn and adding blue bg
  let selected = document.getElementById(id);
  selected.classList.remove("bg-base-100", "text-black");
  selected.classList.add("text-white", "bg-sky-600");
  console.log(id);
}
