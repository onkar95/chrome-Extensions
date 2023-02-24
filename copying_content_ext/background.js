
let menuobj = {
    id: "copyText",
    title: "copy Text",
    contexts: ["page"],

}
chrome.contextMenus.create(menuobj);


chrome.contextMenus.onClicked.addListener(async function (clickData) {
    console.log("background.js", clickData)
    if (clickData.menuItemId === "copyText") {
        await chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
            const tabID = tabs[0].id
            await chrome.scripting.executeScript({
                target: { tabId: tabID },
                func: () => {
                    navigator.clipboard.readText()
                        .then(() => {
                            console.log('Current clipboard oldText:');

                            // Write new data to clipboard
                            const newData = document.body.innerText;
                            navigator.clipboard.writeText(newData)
                                .then(() => {
                                    console.log('New data written to clipboard:', newData);
                                })
                                .catch(err => {
                                    console.error('Failed to write data to clipboard:', err);
                                });
                        })
                        .catch(err => {
                            console.error('Failed to read clipboard data:', err);
                        });
                },
            });
        });
    }
});


