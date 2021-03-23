document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants
// function that takes in an event
  //with the event we grab the current target, which is the li that was clicked on
  //and toggle its class name to be either visited or ""

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const handleFavoriteSubmit = (e) => {
    e.preventDefault();
    //get the name input element
    const favoriteInput = document.querySelector(".favorite-input");
    //get the value and clear it
    const favorite = favoriteInput.value;
    favoriteInput.value = "";
    //create a new li element and set the text to the value of the input field
    const newListLi = document.getElementById("li");
    newListLi.textContent = favorite;
    //get the ul of places and append the newlist element
    const favoriteList = document.getElementById("sf-places");
    favoriteList.appendChild(newListLi);
  };
  //selects the submit button of class favorite submit
  const listSubmitButton = document.querySelector(".favorite-submit");
  //adds an event listener for click and executes handleFavoriteSubmit
  listSubmitButton.addEventListener("click", handleFavoriteSubmit);


  // adding new photos

  const showPhotoForm = (e) => {
    //store the photoform div in a var
    const photoFormDiv = document.querySelector(".photo-form-container");
    //clicking the photoform button shows or hides the form to add a photo
    if (photoFormDiv.className === "photo-form-container") {
      photoFormDiv.className = "photo-form-container hidden";
    } else {
      photoFormDiv.className = "photo-form-container";
    }
  };
  
});
// grab the show photo button, and add an event listener that calls showphotoform when clicked
const photFormShowButton = document.querySelector(".photo-show-button");
photoFormShowButton.addEventListener("click", showPhotoForm);
//event handler
const handlePhotoSubmit = (e) => {
  e.preventDefault();
  //create a var containing the photo-url-input
  const photoUrlInput = document.querySelector(".photo-url-input");
  //stores and resets the value
  const photoUrl = photoUrlInput.value;
  photoUrlInput.value = "";
//var creating a new img element setting the src = to photourl
  const newImg = document.createElement("img");
  newImg.src = photoUrl;
//appends a new photo li element
  const newPhotoLi = document.createElement("li");
  newPhotoLi.appendChild(newImg);
//appends the new photo li to the dog photo list
  const dogPhotosList = document.querySelector(".dog-photos");
  dogPhotosList.appendChild(newPhotoLi);
}
