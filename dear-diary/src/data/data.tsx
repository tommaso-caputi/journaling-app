export interface UserData {
    email: string;
    name: string;
    password: string;
}
export const setUserData = (json: UserData) => {
    localStorage.setItem('name', json.name);
    localStorage.setItem('email', json.email);
    localStorage.setItem('password', json.password);
    localStorage.setItem('logged', 'true');
}


export const getLogged = () => {
    return localStorage.getItem('logged') === 'true';
}

export const savePin = (pin: string) => {
    localStorage.setItem('pin', pin);
}
export const getPin = () => {
    return localStorage.getItem('pin');
}