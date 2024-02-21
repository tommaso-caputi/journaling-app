export interface UserData {
    email: string;
    name: string;
    password: string;
}

export const setUserData = (json: UserData) => {
    localStorage.setItem('name', json.name);
    localStorage.setItem('email', json.email);
    localStorage.setItem('password', json.password);
}

export const setLogged = (bool: string) => {
    localStorage.setItem('logged', bool);
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
    return s;
};

export interface Entry {
    content: string;
    date: string;
    title: string;
    topics: string[];
}

export const addNewEntry = (entry: Entry) => {
    const entries = JSON.parse(localStorage.getItem('entries') || '[]') as Entry[];
    entries.unshift(entry);
    localStorage.setItem('entries', JSON.stringify(entries));
}

export const addFeelingToNewEntry = (f: string) => {
    let newEntry = JSON.parse(localStorage.getItem('newEntry') || '{}');
    newEntry['feeling'] = f;
    newEntry['topics'] = [];
    localStorage.setItem('newEntry', JSON.stringify(newEntry));
}

export const addTopicToNewEntry = (t: string) => {
    let newEntry = JSON.parse(localStorage.getItem('newEntry') || '{}');
    if (newEntry['topics'].includes(t)) {
        newEntry['topics'] = newEntry['topics'].filter((topic: string) => topic !== t);
    } else {
        newEntry['topics'].push(t);
    }
    localStorage.setItem('newEntry', JSON.stringify(newEntry));
}

export const addDataToNewEntry = (title: string, date: string, content: string, place: string) => {
    let newEntry = JSON.parse(localStorage.getItem('newEntry') || '{}');
    newEntry['title'] = title;
    newEntry['date'] = date;
    newEntry['content'] = content;
    newEntry['place'] = place;
    localStorage.setItem('newEntry', JSON.stringify(newEntry));

    addNewEntry(newEntry);
}
