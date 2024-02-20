export interface UserData {
    email: string;
    name: string;
    password: string;
}

export const setUserData = (json: UserData) => {
    localStorage.setItem('name', json.name);
    localStorage.setItem('email', json.email);
    localStorage.setItem('password', json.password);
    /* localStorage.setItem('logged', 'true'); */
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
    var temp = localStorage.getItem('entries');
    //localStorage.setItem('entries',) 
}


// handle generating new entry
export const addFeelingToNewEntry = (f: string) => {
    var temp = localStorage.getItem('newEntry');
    if (temp) {
        var newEntry = JSON.parse(temp);
        newEntry['feeling'] = f;
        newEntry['topics'] = []
        localStorage.setItem('newEntry', JSON.stringify(newEntry));
    } else {
        var newEntry = JSON.parse('{}');
        newEntry['feeling'] = f;
        localStorage.setItem('newEntry', JSON.stringify(newEntry));
    }
}

export const addTopicToNewEntry = (t: string) => {
    var temp = localStorage.getItem('newEntry');
    if (temp) {
        var newEntry = JSON.parse(temp);
        if (newEntry['topics'].includes(t)) {
            newEntry['topics'] = newEntry['topics'].filter((topic: string) => topic !== t);
        } else {
            newEntry['topics'].push(t);
        }
        localStorage.setItem('newEntry', JSON.stringify(newEntry));
    }
}
