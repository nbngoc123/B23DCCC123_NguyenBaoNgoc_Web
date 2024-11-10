const calculateElapsedTime = (created_at) => {
    const createdAt = new Date(created_at);
    const currentTime = new Date();

    // Calculate the elapsed time in milliseconds
    const elapsedMilliseconds = currentTime - createdAt;
    // Convert milliseconds to hours
    const elapsedHours = elapsedMilliseconds / (1000 * 60 * 60);
    return parseFloat(elapsedHours.toFixed(2)); // Return as number with two decimal places
};

const calculateRateProcess = (created_at, due_date) => {
    const createdAt = new Date(created_at);
    const dueDate = new Date(due_date);

    // Calculate the total time from created_at to due_date in hours
    const totalMilliseconds = dueDate - createdAt;
    const totalHours = totalMilliseconds / (1000 * 60 * 60); 

    // Get the elapsed hours since creation
    const elapsedHours = calculateElapsedTime(created_at);

    // Calculate the completion rate, capped between 0 and 1
    const rate = Math.min(elapsedHours / totalHours, 1);
    return parseFloat((rate * 100).toFixed(2)); // Return percentage with two decimal places
};


const calculateResult = (type, created_at, due_date) => {
    if (type === 'process') {
        return calculateRateProcess(created_at, due_date);
    } else {
        return calculateElapsedTime(created_at);
    }
};

module.exports = {
    calculateRateProcess,
    calculateElapsedTime
};
