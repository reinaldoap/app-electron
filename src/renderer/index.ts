window.addEventListener("DOMContentLoaded", async () => {
    console.log('Agora vai o bixão mesmo!');
    const message = await window.api.getMessage();
    document.getElementById("message")!.innerText = message;
});
