import { getCurrentTab } from "./utils.js";

// adding a new bookmark row to the popup
const addNewBookmark = () => {};

const viewBookmarks = (currentBookmarks = []) => {
    const bookmarksElement = document.getElementById("bookmarks")
    bookmarksElement.innerHTML = ""

    if (currentBookmarks.length > 0) {
        for (let i = 0; i < currentBookmarks.length; i++) {
            const bookmark = currentBookmarks[i]
            addNewBookmark(bookmarksElement ,bookmark)
        }
        console.log("there are bookmarks")
    } else {
        bookmarksElement.innerHTML = '<i class ="row">No bookmarks to show.</i>'
        console.log("there are NO bookmarks")
    }
};

const onPlay = e => {};

const onDelete = e => {};

const setBookmarkAttributes =  () => {};

document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getCurrentTab()
    const queryParams = activeTab.url.split("?")[1]
    const urlParams = new URLSearchParams(queryParams)

    const currentVideo = urlParams.get("v")

    if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
        chrome.storage.sync.get([currentVideo], (data) => {
            const currentVideoBookmarks = data[currentVideo] ? JSON.parse(data[currentVideo]): []

            viewBookmarks(currentVideoBookmarks)
        })
    } else {
        container = document.getElementsByClassName("container")[0]
        container.innerHTML = '<div class="title"> This is not a youtube video page.</div>'
    }

});
