
export const fetchHomeData = async ({ pageParam = 1 }) => {

    try {
        // const response = await fetch(`http://localhost:5000/HomeData?per_page=4&page=${pageParam}`);
        const response = await fetch(`http://localhost:5000/HomeData`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error('Fetching error --> http://localhost:5000/HomeData', error);
    }
};
export const fetchAboutData = async ({ pageParam = 1 }) => {

    try {
        // const response = await fetch(`http://localhost:5000/AboutData?per_page=4&page=${pageParam}`);
        const response = await fetch(`http://localhost:5000/AboutData`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error('Fetching error --> http://localhost:5000/AboutData', error);
    }
};
export const fetchOtherData = async ({ pageParam = 1 }) => {

    try {
        // const response = await fetch(`http://localhost:5000/OtherData?per_page=4&page=${pageParam}`);
        const response = await fetch(`http://localhost:5000/OtherData`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error('Fetching error --> http://localhost:5000/OtherData', error);
    }
};