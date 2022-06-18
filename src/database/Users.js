const barbers = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'JohnDoe@gmail.com',
        address: 'cherry street',
        price: '20$',
        clientReview: [
            {
                id: 1,
                rate: 1,
                description: "that was awful man"
            },
            {
                id: 2,
                rate: 2,
                description: "that was awful man"
            },
        ]
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'JaneDoe@gmail.com',
        address: 'blueberry street',
        price: '30$',
        clientReview: [
            {
                id: 1,
                rate: 4,
                description: "that was great man"
            },
            {
                id: 2,
                rate: 5,
                description: "that was great man"
            },
        ]
    },
]
const clients = [
    {
        id: 1,
        email: 'iamjessie@gmail.com',
        password: '123456789'
    },
    {
        id: 2,
        email: 'iamjames@gmail.com',
        password: '123456789',
        BarberOrders: []
    },
]

export const registerBarber = (newUser) => {
    const { firstName, lastName, email, address, price } = newUser;
    const authUser = barberUsers.find(o => o.email == email);

    if(!authUser && firstName && lastName && address && price && email) {
        const uId = Date.now();

        barbers.push({
            id: uId,
            firstName,
            lastName,
            email,
            address,
            price,
            clientReview: []
        })
        
        return true;
    }

    return false;
}

export const registerClient = (newUser) => {
    const { email, password } = newUser;
    const authUser = clientUsers.find(o => o.email == email);

    if(!authUser && email && password) {
        clientUsers.push({
            email,
            password,
            BarberOrders: []
        })
        
        return true;
    }

    return false;
}

export const login = (user) => {
    const { email, password } = user;

    const authUser = clientUsers.find(o => o.email == email && o.password == password);

    if(authUser) {
        return { ...authUser }
    }

    return false;
}

export const hasSubscribed = (email, barberId) => {
    const activeUser = clientUsers.find(o => o.email == email);

    if(activeUser) {
        return activeUser.BarberOrders.indexOf(barberId) !== -1;
    }

    return false;
}

export const addBarber = (email, barberId) => {
    const activeUser = clientUsers.find(o => o.email == email);

    if(activeUser) {
        activeUser.BarberOrders.push(barberId);
    }

    return false;
}

export const fetchBarberDetail = (id) => {
    const barber = barberUsers.find(o => o.id == id)

    if(barber) {
        return { ...barber }
    }

    return null;
}

export const addBarberReview = (id, {review, description}) => {
    const barber = barberUsers.find(o => o.id == id)

    if(barber) {
        const uId = Date.now();

        barber.userRates.push({id: uId, review, description})
        return true;
    }


    return null
}

export const fetchBarbers = () => {
    return barberUsers.map(o => o);
}