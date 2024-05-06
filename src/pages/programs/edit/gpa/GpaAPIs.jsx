import axios from "axios";

const  AddGPA = async (Data)=>{
     try { 
        console.log(Data);
        const res = await axios.post('https://localhost:7095/api/CumulativeAverage', {
            cumulativeAverageRequest: Data
        })
        return res;  
     } catch(err) { 
        console.log(err); 
        return err;
     }
}

const GetGPA = async (id) => {
   try {
       
       const res = await axios.get(`https://localhost:7095/api/CumulativeAverage/${id}`);
      
       return res;
   } catch (err) {
       // Better error handling
      return err;
       throw err;
   }
};
export { GetGPA, AddGPA };
const  UpdateGPA = async (Data , id)=>{
    try { 
       const res = await axios.put('https://localhost:7095/api/CumulativeAverage' + id , {
           cumulativeAverageRequest: Data
       })
       return res.status;  
    } catch(err) { 
       console.log(err); 
       return result;
    }
}
