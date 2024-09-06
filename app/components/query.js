
export const fetchHomeData = async ({ pageParam = 1 }) => {

    try {
        const response = await fetch('/api/homeData', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error('Fetching error', error);
    }
};
export const fetchAboutData = async ({ pageParam = 1 }) => {

    try {
        const response = await fetch('/api/aboutData', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error('Fetching error', error);
    }
};
export const fetchOtherData = async ({ pageParam = 1 }) => {
    console.log('fetchAboutData - Called');

    try {
        const response = await fetch('/api/otherData', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error('Fetching error', error);
    }
};