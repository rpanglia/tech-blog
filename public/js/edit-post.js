async function editFormHandler(event) {
    
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_content = document.querySelector('input[name="post-content"]').value.trim();

    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    console.log(title);
    console.log(post_content);

    const response = await fetch(`/api/posts/${id}`, 
    {
        method: "PUT",
        body: JSON.stringify({
            post_content,
            title
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response);

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector(".edit-post-form")
.addEventListener("submit", editFormHandler);