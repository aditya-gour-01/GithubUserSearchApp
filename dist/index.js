"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const getUsername = document.querySelector("#user");
const formSubmit = document.querySelector("#form");
const main_container = document.querySelector(".main_container");
const resultinfo = document.querySelector(".result-info");
//reuseable function
async function myCustomFetch(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`N/W response was not ok- status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
function fetchUserData(url) {
    myCustomFetch(url, {}).then((userInfo) => {
        for (const user of userInfo) {
            showResultinUI(user);
        }
    });
}
const showResultinUI = (user) => {
    const { avatar_url, login, html_url } = user;
    main_container.insertAdjacentHTML("beforeend", `<div class="card"> 
    <img src="${avatar_url}" alt="${login}"/>
    <hr/>
    <div class="card-footer">
    <p style="color: white; font-size: 20px;">${login}</p>
    <a href="${html_url}" target="_blank">Github link</a>\
    </div>
    </div>`);
};
//default function calling everytime
fetchUserData("https://api.github.com/users");
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const search = getUsername.value.toLowerCase().trim();
    if (!search)
        return;
    try {
        const url = `https://api.github.com/search/users?q=${search}`;
        // Clear previous results
        main_container.innerHTML = "";
        resultinfo.innerHTML = "";
        const data = await myCustomFetch(url, {});
        if (data.items.length === 0) {
            resultinfo.innerHTML = "";
            main_container.innerHTML = `<p style="color:white; font-size:18px; text-align:center; margin-top:20px;">No users found</p>`;
            return;
        }
        else {
            resultinfo.innerHTML = `
      <p style="color:white; font-size:18px; text-align:center; margin-top:20px;">
        Showing top ${Math.min(10, data.items.length)} results, search username for better deep diving
      </p>
    `;
            data.items.slice(0, 10).forEach((user) => {
                showResultinUI(user);
            });
        }
    }
    catch (error) {
        main_container.innerHTML = `<p style="color:white text-align:center;">Error fetching users</p>`;
        console.log(error);
    }
});
//# sourceMappingURL=index.js.map