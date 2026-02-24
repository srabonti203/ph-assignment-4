// collect ids
function collectId(id) {
  element = document.getElementById(id);
  return element;
}

let interviewList = [];
let rejectedList = [];
let currentArr = [];

let totalCount = collectId("total-count");
let availJobCount = collectId("avail-job-count");

const allCarts = collectId("all-carts");
let interviewCount = collectId("interview-count");
let rejectedCount = collectId("reject-count");

const filterSection = collectId("filtered-section");

let allBtn = collectId("all-btn");
let interviewBtn = collectId("interview-btn");
let rejectedBtn = collectId("rejected-btn");

// total job,interview,rejected count
function calculateCount() {
  totalCount.innerText = allCarts.children.length;
  availJobCount.innerText = allCarts.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// button toggling
function toggleStyle(id) {
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

  if (id == "all-btn") {
    allCarts.classList.remove("hidden");
    filterSection.classList.add("hidden");
    return;
  }
  if (id == "interview-btn") {
    allCarts.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderCart(interviewList);
    return;
  }
  if (id == "rejected-btn") {
    allCarts.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderCart(rejectedList);
    return;
  }
}

//adding event bubble to allcarts to push interview and rejected to the array and count
allCarts.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-success")) {
    const parentNode = event.target.parentNode.parentNode;
    parentNode.classList.add("hidden");
    const companyName = parentNode.querySelector("h3").innerText;
    const jobTittle = parentNode.querySelector(".post").innerText;
    const jobLocation = parentNode.querySelector(".job-location").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const status = parentNode.querySelector(".status");
    status.innerText = "INTERVIEW";
    const description = parentNode.querySelector(".description").innerText;

    let cartInfo = {
      companyName,
      jobTittle,
      jobLocation,
      jobType,
      salary,
      status: "INTERVIEW",
      description,
    };

    const companyExist = interviewList.find(
      (item) => item.companyName == cartInfo.companyName,
    );
    if (!companyExist) {
      interviewList.push(cartInfo);
    }
    rejectedList = rejectedList.filter(
      (item) => item.companyName != cartInfo.companyName,
    );
    calculateCount();
  }
  if (event.target.classList.contains("btn-error")) {
    const parentNode = event.target.parentNode.parentNode;
    parentNode.classList.add("hidden");
    const companyName = parentNode.querySelector("h3").innerText;
    const jobTittle = parentNode.querySelector(".post").innerText;
    const jobLocation = parentNode.querySelector(".job-location").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const status = parentNode.querySelector(".status");
    status.innerText = "REJECTED";
    const description = parentNode.querySelector(".description").innerText;

    let cartInfo = {
      companyName,
      jobTittle,
      jobLocation,
      jobType,
      salary,
      status: "REJECTED",
      description,
    };

    const companyExist = rejectedList.find(
      (item) => item.companyName == cartInfo.companyName,
    );
    if (!companyExist) {
      rejectedList.push(cartInfo);
    }
    interviewList = interviewList.filter(
      (item) => item.companyName != cartInfo.companyName,
    );
    calculateCount();
  }
});
//extracting filterd cart and pushing it to the filtered-section in html
function renderCart(currentArr) {
  filterSection.innerHTML = "";
  if (currentArr.length == 0) {
    let div = document.createElement("div");
    div.className = "cart bg-base-100 p-4 md:p-4";
    div.innerHTML = `
    <div
          class="no-interview-job bg-base-100 p-6 text-center flex flex-col items-center justify-center"
        >
          <img src="./jobs.png" alt="" class="w-40 mx-auto mb-4" />

          <h3 class="font-bold text-lg">No jobs available</h3>

          <p class="text-sm text-slate-500">
            Check back soon for new job opportunities
          </p>
        </div>
    `;
    filterSection.appendChild(div);
    return;
  } else {
    for (let current of currentArr) {
      let div = document.createElement("div");
      div.className = "cart bg-base-100 space-y-5 p-4 md:p-4";
      div.innerHTML = `
     <div class="flex justify-between items-center">
            <h3 class="font-bold">${current.companyName}</h3>
            <div
              class="w-8 h-8 rounded-full flex justify-center items-center btn btn-error"
            >
              <i class="fa-regular fa-trash-can"></i>
            </div>
          </div>

          <p class="post text-sm text-slate-500">${current.jobTittle}</p>

          <div class="job-info flex gap-3 text-sm text-slate-500">
            <p class="job-location">${current.jobLocation}</p>
            <div class="w-1.5 h-1.5 mt-2 bg-slate-500 rounded-full"></div>
            <p class="job-type">${current.jobType}</p>
            <div class="w-1.5 h-1.5 mt-2 bg-slate-500 rounded-full"></div>
            <p class="salary">${current.salary}</p>
          </div>

          <div
            class="status text-black bg-cyan-100/50 w-30 h-8 flex items-center justify-center font-bold text-sm"
          >
            ${current.status}
          </div>

          <p class="description text-sm text-slate-500">
            ${current.description}
          </p>

          <div>
            <button class="btn btn-outline btn-success">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
          </div>
    `;
      filterSection.appendChild(div);
    }
  }
}
