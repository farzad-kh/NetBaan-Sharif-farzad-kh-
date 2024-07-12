import axios from 'axios';

const getData = async () => {
    try {
        return await axios.get("https://run.mocky.io/v3/cf756b59-d746-4518-8221-55de4a7a8611")
            .then(res => res.data)
    } catch (err) {
        console.log(err)
    }
}

export default getData


 