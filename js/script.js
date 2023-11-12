/* NAVIGATION FUNCTIONALITY */

/* THE USER WANTS TO ASK A QUESTION */

const askField = document.querySelector(".ask_inner");
const popupContainer = document.querySelector(".popup_container");
const fieldPopup = popupContainer.querySelector(".field_popup");
askField.onclick = () => {
  popupContainer.classList.add("active");
  fieldPopup.classList.add("active");
  const closeBtn = popupContainer.querySelector(".popup_header svg");
  closeBtn.onclick = () => {
    popupContainer.classList.remove("active");
    fieldPopup.classList.remove("active");
  };
};

/* SIDE BAR ACTIVATION */

const sideBarIcon = document.querySelector(".side_bar_icon");
const sideBar = document.querySelector(".side_bar_container ul");
const sideBarBlur = document.querySelector(".side_bar_blur");

sideBarIcon.onclick = () => {
  sideBar.classList.toggle("active");
  sideBarBlur.classList.toggle("active");
};
// ASK QUESTION

const btn = document.getElementById("button");
const loading = popupContainer.querySelector(".loading");
const success = popupContainer.querySelector(".success");
const failed = popupContainer.querySelector(".failed");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  popupContainer.classList.add("active");
  loading.classList.add("active");

  const serviceID = "service_hkmipd8";
  const templateID = "template_vt3gb2d";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      loading.classList.remove("active");
      fieldPopup.classList.remove("active");
      success.classList.add("active");
      const emailReview = success.querySelector(".data_review .email");
      const questionReview = success.querySelector(".data_review .question");
      emailReview.textContent = document.querySelector("#Email").value;
      questionReview.textContent = document.querySelector("#Question").value;
      success.querySelector("#okBtn").onclick = () => {
        location.reload();
      };
    },
    () => {
      loading.classList.remove("active");
      fieldPopup.classList.remove("active");
      failed.classList.add("active");
      failed.querySelector("#okBtn").onclick = () => {
        location.reload();
      };
    }
  );
});
