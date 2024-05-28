import axios from 'axios';

const Moviedetails = async () => {
  return await axios.get("https://dummyapi.online/api/movies");
};



export default { Moviedetails };
