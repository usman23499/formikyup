import { useFormik } from "formik";

function Formikform() {

    const formik=useFormik({

        initialValues:{
            email:"",// here we set initial value
            password:""
        },
        onSubmit:(value)=>{
            console.log(value)
          // for save data or call api here 
        },
         // now set here validation 
         validate:(value)=>{
             var error={}
             if(!value.email){
                 error.email="Email is requied" // if emial is empty tu ye aae screen pe
             }
             if(!value.password){
                error.password="Password is requied"
            }
        return error 
        }
        
    })


    return (



      <div >
          {/* now is form ke on submit pe formik ka on submit chale ga */}
       <form onSubmit={formik.handleSubmit}> 

       <label>
           Email:
           <input type="text" id="email" 
           
           onChange={formik.handleChange}
           value={formik.values.email}
           
           />
       </label>
       <br/>
       {/* if email is empty then */}
       {formik.errors.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:""}
       <br/>
       <label>
           Password:
           {/* id must be equal to initail value ke name se like both jaga psaaword hona chale */}
           <input type="password" id="password"
          
           onChange={formik.handleChange}
           value={formik.values.password}
           />

{formik.errors.password ? <div style={{color:"red"}}>{formik.errors.password}</div>:""}
       </label>
       <br/>
       <input type="submit" />



       </form>
      </div>
    );
  }
  
  export default Formikform;
  