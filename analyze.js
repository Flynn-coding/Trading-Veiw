document.getElementById("analyzeButton").addEventListener("click", async () => {
    const walletAddress = document.getElementById("walletAddress").value;
    if (!walletAddress) return alert("Please enter a wallet address");

    try {
        let response = await fetch(`https://api.solscan.io/account?wallet=${walletAddress}`);
        let data = await response.json();

        let transactionInfo = document.getElementById("transactionInfo");
        transactionInfo.innerHTML = '';  // Clear previous data

        data.transactions.forEach(tx => {
            let txInfo = `<div>${tx.date}: ${tx.type} - ${tx.amount}</div>`;
            transactionInfo.innerHTML += txInfo;
        });
    } catch (error) {
        console.error("Error fetching transaction data:", error);
        document.getElementById("transactionInfo").textContent = "Error fetching data. Please try again.";
    }
});
