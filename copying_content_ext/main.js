// const buttonid = document.getElementById('button')


// document.addEventListener('DOMContentLoaded', async function () {
//     alert("jhg")

// })



// async function copyThePageContent() {

//     document.addEventListener('contextmenu', (event) => {
//         event.preventDefault();
//         alert('right-clicked 2')
//         navigator.clipboard.readText()
//             .then(() => {
//                 console.log('Current clipboard oldText:');

//                 // Write new data to clipboard
//                 const newData = document.body.innerText;
//                 navigator.clipboard.writeText(newData)
//                     .then(() => {
//                         console.log('New data written to clipboard:', newData);
//                     })
//                     .catch(err => {
//                         console.error('Failed to write data to clipboard:', err);
//                     });
//             })
//             .catch(err => {
//                 console.error('Failed to read clipboard data:', err);
//             });
//     })


// }


// chrome.contextMenus.onClicked.addListener(function (clickData) {
//     if (clickData.menuItemId == "copyText" && clickData.selectionText) {
//         if (isInt(clickData.selectionText)) {

//         }
//     }
// });
