import { hasIn, isPlainObject } from "lodash";
import swal from 'sweetalert2';


export const formErrors = (e:any):Record<string,any>=>{
    let errors = {};
    console.error(e)
    try {
        if(typeof e =='object'){
    
            if(hasIn(e,'response')){
                const {response} = e;
                const {data} = response
                if(hasIn(data,'errors')){
                errors = data.errors;
                console.log(errors)
                }
            }
           
    
        }
    } catch (error) {
        console.log(error)
    }
    return errors;

}


export const errorAlert=(e:any)=>{
  let errors = {};
  console.error(e)
  try {
      if(typeof e =='object'){
  
          if(hasIn(e,'response')){
              const {response} = e;
              const {data} = response
              let message = data.message;
              swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: message,
                
              })
          }
         
  
      }
  } catch (error) {
      console.log(error)
  }


}


export const deleteConfirm = async ()=>{

  const result = await  swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#FF9F43",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if(result.isConfirmed){
        return true;
      }else{
        return false;
      }

      //          Swal.fire("Deleted!", "Your file has been deleted.");

}