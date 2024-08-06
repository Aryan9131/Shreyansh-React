export const BASE_URL = "https://reimagined-pancake-7q5vwq7vpc99v-8000.app.github.dev/api/v1";

export const signUpUser = async (data) => {
    const response = await fetch(`${BASE_URL}/user/create-user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

export const signInUser = async (data) => {
    const response = await fetch(`${BASE_URL}/user/create-session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}
