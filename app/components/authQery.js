export const handleSignup = async (data) => {

    try {
        const response = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let users = await response.json();
        const isAlreadyUser = users.some(item => item.email === data.email);

        if (isAlreadyUser) {
            setError('isAlreadyUser', { type: "custom", message: 'User already exists!' });
            return;
        }
        const postResponse = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!postResponse.ok) {
            throw new Error(`HTTP error! Status: ${postResponse.status}`);
        }
        const userData = await postResponse.json();
        reset();
        setError('userAdded', { type: "custom", message: `Hello ${userData.name},Your account created successfully.` });

        console.log('User added:', userData);
    } catch (error) {
        console.error('Error:', error);
    }
};