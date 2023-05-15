import axios from 'axios'


const baseUrl = "http://localhost:8000"

const get_Todo_list = (setToDo) => {
    axios
        .get(`${baseUrl}/`)
        .then(({ data }) => {
            console.log('data --> ', data);
            setToDo(data)
        })
}

const add_new_Todo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data); 
            setText("")
            get_Todo_list(setToDo)
        })
        .catch((err) => console.log(err))
}

const delete_Todo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            get_Todo_list(setToDo)
        })
        .catch((err) => console.log(err))

}

const update_Todo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            console.log(data);
            setText("")
            setIsUpdating(false)
            get_Todo_list(setToDo)
        })
        .catch((err) => console.log(err))

}


export { get_Todo_list, add_new_Todo, update_Todo, delete_Todo }