function submitApplication(event) {
    event.preventDefault();

    const project = document.querySelector('input[placeholder="Enter your project name"]').value;
    const team = document.querySelector('input[placeholder="Your team"]').value;
    const blockchain = document.querySelector('input[placeholder="Ethereum, Solana, Base..."]').value;
    const funding = document.querySelector('input[placeholder="5000"]').value;

    const application = {
        project,
        team,
        blockchain,
        funding,
        status: "Under Review"
    };

    localStorage.setItem("opengrant_application", JSON.stringify(application));

    window.location.href = "dashboard.html";
}