let listArray = [];

let dob = document.getElementById("dobtxt");
let img = document.getElementById("imgtxt");
let name = document.getElementById("nametxt");
let email = document.getElementById("mailtxt");
let gender;
let outputs = document.getElementById("output-div");

let uploadedImage;

img.addEventListener("change", function () {
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    uploadedImage = reader.result;
  });
  console.log("this.files[0]", this.files[0]);
  reader.readAsDataURL(this.files[0]);
});

const submit = () => {

  if ((name.value && email.value && img.value && dob.value) == "") {
   alert("Enter Your Details");
  }
  else
  {


   if (document.getElementById("maletxt").checked)
     gender = document.getElementById("maletxt").value;
   else if (document.getElementById("femaletxt").checked)
     gender = document.getElementById("femaletxt").value;
   else if (document.getElementById("othertxt").checked)
     gender = document.getElementById("othertxt").value;

   console.log(
     "check value",
     name.value,
     email.value,
     img.value,
     dob.value,
     gender
   );

   console.log("output", outputs);
   const mainDivData = document.createElement("div");
   let cardData = document.createElement("div"); // give unique id
   let detailsData = document.createElement("div");
   const nameElement = document.createElement("span");
   const emailElement = document.createElement("span");
   const dobElement = document.createElement("span");
   const genderElement = document.createElement("span");
   const cross = document.createElement("span");

   nameElement.innerHTML = name.value;
   emailElement.innerHTML = email.value;
   dobElement.innerHTML = dob.value;
   genderElement.innerHTML = gender;
   cross.innerHTML = "&times;";
   let imgData = document.createElement("div");

   let imageElement = document.createElement("img");
   console.log("uploadedImage", uploadedImage);
   imageElement.src = uploadedImage;

   mainDivData.className = "admit-card";
   imgData.className = "image";
   cardData.className = "details";
   cross.className = "cross";
   outputs.className = "output";

   imgData.appendChild(imageElement);
   cardData.appendChild(nameElement);
   cardData.appendChild(emailElement);
   cardData.appendChild(dobElement);
   cardData.appendChild(genderElement);
   cardData.appendChild(detailsData);
   
   mainDivData.appendChild(cross);
   mainDivData.appendChild(cardData);
   mainDivData.appendChild(imgData);
   outputs.appendChild(mainDivData);





  }
};

const clearin = () => {
  name.value = "";
  email.value = "";
  dob.value = "";
  img.value = "";

 const chbx = document.getElementsByName("gender");

  for(let i=0; i < chbx.length; i++) {
    chbx[i].checked = false;
  }

  mainDivData.style.display = "none";

};



    
      
