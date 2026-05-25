# 🚀 GitHub User Search App (TypeScript)

A mini project built using **TypeScript, HTML, CSS, and GitHub API** that allows users to search GitHub profiles dynamically and display them in a clean UI.

---

# 📌 Project Overview

This application fetches GitHub user data and displays it in a card-based UI. It supports:

- Default user listing on page load
- Dynamic search using GitHub Search API
- Display of top results
- Handling of empty results and API errors

---

# 🧠 Core Concepts Covered

## 1. DOM Manipulation (`querySelector`)

Used to access HTML elements and interact with them.

```ts
const input = document.querySelector("#user")
```

- `#user` → input field
- `#form` → form submission
- `.main_container` → card display area
- `.result-info` → message display

👉 Enables reading user input and updating UI dynamically.

---

## 2. TypeScript Type Assertions

```ts
as HTMLInputElement
```

👉 Tells TypeScript the exact type of DOM element.

**Why important:**
- Enables safe access to properties like `.value`
- Prevents runtime errors

---

## 3. Interfaces (Type Safety)

```ts
interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface SearchResponse {
  items: UserData[];
}
```

👉 Defines structure of API response.

**Benefits:**
- Autocomplete
- Error prevention
- Clear data structure

---

## 4. Generics (`<T>`) in API Calls

```ts
async function myCustomFetch<T>(url: string): Promise<T>
```

👉 Makes the function reusable for different data types.

Usage:
```ts
myCustomFetch<UserData[]>(url)
myCustomFetch<SearchResponse>(url)
```

**Why used:**
- Avoids `any`
- Ensures correct data type from API

---

## 5. Fetch API + Async/Await

```ts
const response = await fetch(url);
const data = await response.json();
```

👉 Used to call external APIs asynchronously.

**Includes:**
- Error handling (`response.ok`)
- JSON parsing

---

## 6. Dynamic API Calls

```ts
const url = `https://api.github.com/search/users?q=${search}`;
```

👉 User input is injected into API URL.

**Result:**
- Real-time search functionality

---

## 7. Event Handling

```ts
formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

👉 Handles form submission.

**Key concept:**
- `preventDefault()` prevents page reload

---

## 8. Input Processing

```ts
const search = input.value.toLowerCase().trim();
```

👉 Cleans user input:
- `trim()` → removes spaces
- `toLowerCase()` → case-insensitive search

---

## 9. Conditional Rendering

```ts
if (data.items.length === 0)
```

👉 Handles different UI states:

| Condition | UI Behavior |
|----------|-----------|
| Users found | Show results |
| No users | Show "No users found" |
| Error | Show error message |

---

## 10. Dynamic UI Rendering

```ts
main_container.insertAdjacentHTML("beforeend", `<div>...</div>`)
```

👉 Adds HTML dynamically without replacing existing content.

### Positions:
- `beforebegin`
- `afterbegin`
- `beforeend` ✅ (used)
- `afterend`

---

## 11. Clearing UI

```ts
main_container.innerHTML = "";
```

👉 Clears previous results before showing new ones.

---

## 12. Array Methods (`slice`)

```ts
data.items.slice(0, 10)
```

👉 Limits results to top 10 users.

**Why used:**
- Cleaner UI
- Better performance

---

## 13. Result Messaging

```ts
Showing top ${Math.min(10, data.items.length)} results
```

👉 Dynamically updates message based on result count.

---

# 🔄 Application Flow

1. Page loads → default users displayed
2. User enters username
3. Form submitted
4. API called with search query
5. Old results cleared
6. If no users → show message
7. Else:
   - Show result info
   - Display top 10 users

---

# ⚠️ Error Handling

```ts
if (!response.ok) throw new Error(...)
```

```ts
catch(error)
```

👉 Handles:
- Network issues
- Invalid responses

---

# ✨ Features

- 🔍 GitHub user search
- 📦 API integration
- 🎨 Dynamic card UI
- ⚡ Fast filtering using API
- 🔒 Type safety with TypeScript
- 📊 Result limiting (Top 10)
- 🚫 Proper empty state handling

---

# 🛠 Tech Stack

- TypeScript
- HTML5
- CSS3
- GitHub REST API

---

# 🚀 Improvements Implemented

- Replaced manual filtering with API search
- Added result limit (top 10)
- Added result message section
- Handled empty and error states
- Improved UI separation (info vs content)

---

# 📈 Future Enhancements

- Add debounce (for real-time typing search)
- Add loading spinner
- Add pagination
- Show user profile details

---

# 🧠 Final Summary

This project demonstrates a complete workflow of building a real-world frontend application using TypeScript, including API integration, dynamic UI updates, proper state handling, and performance optimizations.

---

# How to Run this project

- Prerequisties: install typescript in machine.
- Clone this repo into your local
- Make sure the tsconfig(configuration file) of typescript is configured correctly with input and output directories.
- Open code editor and in terminal run this command **tsc -w** to compile the typescript code into JS in watch mode so if any changes made will reflect real time and at times shows the error too if any.
- Once corresponding JS file is generated, click Go-Live at bottom of VS code or start the server and listen to localhost this will have the application loaded upfront and if you dont see anything here, comment out the line in the generated JS file where exports is used at top of file, adding screeshot below for your reference.

---

<img width="958" height="170" alt="image" src="https://github.com/user-attachments/assets/210a8035-e01d-4f6a-aeff-2e3437e471da" />

