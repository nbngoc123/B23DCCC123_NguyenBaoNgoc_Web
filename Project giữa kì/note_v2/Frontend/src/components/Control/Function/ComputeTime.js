import { format } from 'date-fns';

export const calculateElapsedTime = (newItem) => {
    const createdAt = new Date(newItem.created_at);
    const currentTime = new Date();

    // Tính khoảng cách thời gian (mili giây)
    const elapsedMilliseconds = currentTime - createdAt;
    // Quy đổi ra giờ
    const elapsedHours = elapsedMilliseconds / (1000 * 60 * 60);
    return elapsedHours.toFixed(2); // Lấy hai chữ số thập phân
};


export const calculateRateProcess = (newItem) => {
    const createdAt = new Date(newItem.created_at);
    const dueDate = new Date(newItem.due_date);

    // Tính tổng thời gian từ created_at đến due_date
    const totalMilliseconds = dueDate - createdAt;
    const totalHours = totalMilliseconds / (1000 * 60 * 60); // Quy đổi ra giờ
    // if (totalHours === 0) {
    //     return 100; 
    //   }
    // Lấy thời gian đã trôi qua từ created_at đến hiện tại
    const elapsedHours = calculateElapsedTime(newItem);

    // Tính tỷ lệ phần trăm hoàn thành (giới hạn từ 0 đến 1)
    const rate = Math.min(elapsedHours / totalHours, 1);
    return Math.min(rate * 100, 100).toFixed(2); // Tính phần trăm và lấy hai chữ số thập phân
};