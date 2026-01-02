// Hardcoded stock prices (dictionary)
const stockPrices = {
    AAPL: 180,
    TSLA: 250,
    MSFT: 320,
    AMZN: 140,
    GOOG: 130
};

function calculateInvestment() {
    let stockName = document.getElementById("stockName").value.toUpperCase();
    let quantity = parseInt(document.getElementById("quantity").value);

    if (!stockPrices[stockName] || quantity <= 0) {
        document.getElementById("output").textContent =
            "Invalid stock name or quantity.";
        return;
    }

    let totalValue = stockPrices[stockName] * quantity;

    document.getElementById("output").textContent =
        "Total investment value: $" + totalValue;
}

// Optional: Save result to a .txt file
function saveToTxt() {
    let text = document.getElementById("output").textContent;

    if (text === "") {
        return;
    }

    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "investment.txt";
    link.click();
}

// Optional: Save result to a .csv file
function saveToCsv() {
    let stockName = document.getElementById("stockName").value.toUpperCase();
    let quantity = document.getElementById("quantity").value;
    let totalText = document.getElementById("output").textContent;

    if (totalText === "") {
        return;
    }

    let csvContent = "Stock,Quantity,Total Value\n";
    csvContent += stockName + "," + quantity + "," + totalText.split("$")[1];

    let blob = new Blob([csvContent], { type: "text/csv" });
    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "investment.csv";
    link.click();
}
