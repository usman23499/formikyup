import { useFormik } from "formik";
import * as yup from 'yup';

function Formikformwithyup() {

    const formik=useFormik({

        initialValues:{
            email:"",// here we set initial value
            password:""
        },
        onSubmit:(value)=>{
            console.log(value)
          // for save data or call api here 
        },
         // now set here validation  as yup
         // SET UP OF YUP AND ASLO SEE WEBSITE FOR MORE
         validationSchema: yup.object({
             email:yup.string().email().required('Tis field is requied'),
             password: yup.string()
             .min(6,"Password is too short")
             .max(12,"Password is too long")
         })
        
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
  
  export default Formikformwithyup;
  