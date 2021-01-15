const app = {
    totalPages: 1,
} 

const set = ({prop, value}) => (app[prop] = value)
const get = (prop) => (app[prop])

const generateId = (base='') => {
    const currentDate = new Date();
    return base + currentDate.getTime();
}