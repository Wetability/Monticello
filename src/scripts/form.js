const validationName = (value, name, id) => {
  const DOMError = document.getElementById(id);

  if (!DOMError) {
    return false;
  }

  if (!value) {
    DOMError.innerText = `${name} is required`;
    return false;
  }

  DOMError.innerText = "";

  return true;
};

const validDomains = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "zoho.com",
  "gmx.com",
  "inbox.com",
  "fastmail.com",
  "hushmail.com",
  "lavabit.com",
  "tutanota.com",
  "startmail.com",
  "riseup.net",
  "runbox.com",
  "cock.li",
];

const validationEmail = (value, name, id) => {
  const DOMError = document.getElementById(id);

  if (!DOMError) {
    return false;
  }

  if (!value) {
    DOMError.innerText = `${name} is required`;
    return false;
  }

  if (!value.includes("@")) {
    DOMError.innerText = `${name} must include @`;
    return false;
  }

  const emailDomain = value.split("@")[1];
  if (!validDomains.includes(emailDomain)) {
    DOMError.innerText = `Invalid ${name} domain`;
    return false;
  }

  DOMError.innerText = "";
  return true;
};

function feedback() {
  const DOMForm = document.getElementById("js-form-feedback");

  if (!DOMForm) {
    return;
  }

  DOMForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    const userName = form.get("userName");

    if (!validationName(userName, "Name", "js-form-name-error")) {
      return;
    }

    const email = form.get("email");

    if (!validationEmail(email, "Email", "js-form-email-error")) {
      return;
    }

    const data = {
      userName,
      email,
    };
    const dataToString = JSON.stringify(data);
    localStorage.setItem("user", dataToString);
  });

  const user = localStorage.getItem("user");

  if (user) {
    const data = JSON.parse(user);

    const DOMUserName = document.getElementById("js-form-name");
    const DOMEmail = document.getElementById("js-form-email");

    DOMUserName.value = data.userName;
    DOMEmail.value = data.email;
  }
}

export default feedback;
