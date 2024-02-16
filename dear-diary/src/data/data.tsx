export interface UserData {
    email: string;
    name: string;
}
export const setUserData = (json: UserData) => {
    localStorage.setItem('name', json.name);
    localStorage.setItem('email', json.email);
    localStorage.setItem('logged', 'true');
}


export const getLogged = () => {
    return localStorage.getItem('logged') === 'true';
}
