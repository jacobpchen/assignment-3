// 1) Select the section with an id of container without using querySelector.

/* const selectedContainer = document.getElementById("container")
console.log(selectedContainer) */

// 2) Select the section with an id of container using querySelector.

/* const selectedContainerBySelector = document.querySelector('#container')
console.log(selectedContainerBySelector)
 */

// 3) Select all of the list items with a class of "second".

/* const selectClassSecond = document.querySelectorAll(".second")
selectClassSecond.forEach(element => console.log(element)) */

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.

/* const listItemClassThird = document.querySelector("#container")
console.log(listItemClassThird.lastElementChild.lastElementChild) */

// 5) Give the section with an id of container the text "Hello!".

/* selectedContainerBySelector.innerHTML += "Hello" */

// 6) Add the class main to the div with a class of footer.

/* const footer = document.querySelector('.footer')
console.log(footer)
footer.classList.add("main") */

// 7) Remove the class main on the div with a class of footer.
/* footer.classList.remove("main") */

// 8) Create a new li element.
/* const newLi = document.createElement('li') */

// 9) Give the li the text "four".
/* newLi.innerText = "four"
console.log(newLi)
 */
// 10) Append the li to the ul element.
/* document.querySelector('ul').append(newLi)
 */
// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".

/* const getItemsInsideOl = document.querySelectorAll('ol')

getItemsInsideOl.forEach(element => {
    element.style.background = "green"
})
 */
// 13) Remove the div with a class of footer.

/* let removeFooter = document.querySelector(".footer")
removeFooter.remove()
 */

