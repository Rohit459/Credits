const calculateCredits = (transactions) => {
    const months = Object.keys(transactions);
    let total = 0;
    months.forEach(month => {
        const creditsPerMonth = transactions[month].reduce((accumulator, currentValue) => {
            const amountOver100 = currentValue - 100 < 0 ? 0 :  currentValue - 100;
            const creditsAbove100 =  amountOver100 * 2;
            const amountOver50 = currentValue - (amountOver100 + 50);
            const credits50 = amountOver50 > 0 ? amountOver50 : 0;
            // console.log(amountOver100, amountOver50)
            // console.log(creditsAbove100, credits50)
            return accumulator + creditsAbove100 + credits50;
        }, 0);
        total += creditsPerMonth;
        console.log(`credits accquired for the month of ${month} are ${creditsPerMonth}`);
    });
    console.log(`Total credits available: ${total}`);
}


calculateCredits({
    january: [120, 130, 140],
    february: [100,90, 40],
    march: [20,180,90]
})


// sample dataset
const sample = {
    january: [120, 130, 140],
    february: [100, 90, 40],
    march: [20,180,90]
}
