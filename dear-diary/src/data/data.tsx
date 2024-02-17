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
export const sha256 = async (s: string) => {
    const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
};