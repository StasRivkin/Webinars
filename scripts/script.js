const openModal = document.querySelector(".add-button");
const modal = document.querySelector(".modal-wrapper");
const close = document.querySelector(".close-icon");
const submit = document.querySelector(".submit-button");
const user_name = document.querySelector("#name");
const user_email = document.querySelector("#email");
const user_salary = document.querySelector("#salary");
const user_age = document.querySelector("#age");
const user_gender = document.querySelector("#gender");
const table = document.querySelector(".table");
const sort_name = document.querySelector(".sort-name");
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

submit.addEventListener("click", () => {
  const container = document.createElement("div");
  container.className = "list-item";
  /* TODO: do it generic */
  /* name */
  const name_div = document.createElement("div");
  const name_text = document.createTextNode(user_name.value);
  name_div.appendChild(name_text);
  name_div.className = "name";
  container.appendChild(name_div);
  /* email */
  const email_div = document.createElement("div");
  const email_text = document.createTextNode(user_email.value);
  email_div.appendChild(email_text);
  email_div.className = "email";
  container.appendChild(email_div);
  /* salary */
  const salary_div = document.createElement("div");
  const salary_text = document.createTextNode(user_salary.value);
  salary_div.appendChild(salary_text);
  salary_div.className = "salary";
  container.appendChild(salary_div);
  /* age */
  const age_div = document.createElement("div");
  const age_text = document.createTextNode(user_age.value);
  age_div.appendChild(age_text);
  age_div.className = "age";
  container.appendChild(age_div);
  /* gender */
  const gender_div = document.createElement("div");
  const gender_text = document.createTextNode(user_gender.value);
  gender_div.appendChild(gender_text);
  gender_div.className = "gender";
  container.appendChild(gender_div);

  table.appendChild(container);

  user_name.value = "";
  user_email.value = "";
  user_age.value = "";
  user_salary.value = "";
  user_gender.value = "";
  modal.style.display = "none";
});

sort_name.addEventListener("click", () => {
  const items_to_sort = [];
  const items = document.querySelectorAll(".list-item");
  items.forEach((item) => items_to_sort.push(item));
  items_to_sort.sort((a, b) => {
    return a.firstElementChild.textContent.localeCompare(
      b.firstElementChild.textContent
    );
  });

  for (let i = 0; i < items.length; i++) {
    items[i].remove();
  }
  items_to_sort.forEach((item) => {
    table.appendChild(item);
  })
});



/* return this._books.reduce((max, item) => item.year > max ? item.year : max, this._books[0].year)
 */

/* 
if(item.year > max){
    return year;
}

else{
    return max
}
 */