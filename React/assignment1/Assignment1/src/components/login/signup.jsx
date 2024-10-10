import {useState} from "react";
import emailjs from "@emailjs/browser";
const SignUp = () => {

    const [userInfo, updateState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        age: "",
        gender: "",
        nationality: "",
        phonenumber: "",
        password: "",
        confirmpassword: "",
    });

    const [errors, setError] = useState({
        firstname: "",
        lastname: "",
        email: "",
        age: "",
        gender: "",
        nationality: "",
        phonenumber: "",
        password: "",
        confirmpassword: "",
    });


    const change = (e) => {
        updateState({...userInfo, [e.target.name]: e.target.value});
        setError({...errors, [e.target.name]: ''});
    };

    const validate = () => {
        let valid = true;
        const newErrors = {};

        if (!userInfo.firstname) {
            newErrors.firstname = "Name is required";
            valid = false;
          } else if (userInfo.firstname.length < 3) {
            newErrors.firstname = "Name must be at least 3 characters";
            valid = false;
          }

          if (!userInfo.lastname) {
            newErrors.lastname = "Name is required";
            valid = false;
          } else if (userInfo.lastname.length < 3) {
            newErrors.lastname = "Name must be at least 3 characters";
            valid = false;
          }

          if (!userInfo.email) {
            newErrors.email = "Email is required";
            valid = false;
          } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
            newErrors.email = "Email is invalid";
            valid = false;
          }

          if (!userInfo.age) {
            newErrors.age = "Age is required";
            valid = false;
          } else if(userInfo.age < 0){
            newErrors.age = "Age must be valid!";
          }

          if (!userInfo.gender) {
            newErrors.gender = "Gender is required";
            valid = false;
          } else if(userInfo.gender.toLowerCase() !== 'male'){
            newErrors.gender = "Must be valid gender!";
          }else if(userInfo.gender.toLowerCase() !== 'female'){
            newErrors.gender = "Must be valid gender!";
          }

          if (!userInfo.nationality) {
            newErrors.nationality = "Nationality is required";
            valid = false;
          } else if(typeof userInfo.nationality != 'string'){
            newErrors.nationality = "Must be a valid nation!";
          }

          if (!userInfo.phonenumber) {
            newErrors.phonenumber = "Phone No. is required";
            valid = false;
          } else if(typeof userInfo.phonenumber != 'number'){
            newErrors.phonenumber = "Phone No. must be valid!";
          }

          if (!userInfo.password) {
            newErrors.password = "Password is required";
            valid = false;
          } else if(userInfo.password.length < 7){
            newErrors.password = "Password should be at least 7 characters!";
          }

          if (!userInfo.confirmpassword) {
            newErrors.confirmpassword = "Confirm your password";
            valid = false;
          } else if(userInfo.confirmpassword !== userInfo.password){
            newErrors.confirmpassword = "Must be same as Password!";
          }

          setError(newErrors);
          return valid;
    };



    const sendEmail = (e) => {
        e.preventDefault();
        console.log(userInfo);

       if(validate()){

           emailjs
            .send(
            'service_etaxubk',
            'template_2zphv2z',
            userInfo,
            {
                publicKey: 'isqaKFaAI2JhYBZGu',
              })
            .then(
                () => {
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
        }else{
           console.log("Validation failed");
          }

    };


    return(
        <div className="h-auto w-full flex items-center justify-center bg-gradient-to-tr from-violet-700 to-fuchsia-500 p-11">
        <form onSubmit={sendEmail} className="h-full w-[600px] bg-white flex flex-col gap-3 items-center p-10 rounded-2xl">
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    First Name
                </label>
                <input
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Enter first name"
                name="firstname"
                value={userInfo.firstname}
                onChange={change}
                />
                {errors.firstname && <span style={{ color: 'red' }}>{errors.firstname}</span>}
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Last Name
                </label>
                <input
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Enter last name"
                name="lastname"
                value={userInfo.lastname}
                onChange={change}
                />
                {errors.lastname && <span style={{ color: 'red' }}>{errors.lastname}</span>}
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Email
                </label>
                <input type="email"
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Enter your email address"
                name="email"
                value={userInfo.email}
                onChange={change}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Age
                </label>
                <input type="number"
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Enter your age"
                name="age"
                value={userInfo.age}
                min={1}
                onChange={change}
                />
                {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Gender
                </label>
                <input
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Enter your gender"
                name="gender"
                value={userInfo.gender}
                onChange={change}
                />
                {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Nationality
                </label>
                <input
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Enter your nationality"
                name="nationality"
                value={userInfo.nationality}
                onChange={change}
                />
                {errors.nationality && <span style={{ color: 'red' }}>{errors.nationality}</span>}
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Phone No.
                </label>
                <input
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Enter your telephone number"
                name="phonenumber"
                value={userInfo.phonenumber}
                onChange={change}
                />
                {errors.phonenumber && <span style={{ color: 'red' }}>{errors.phonenumber}</span>}
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Password
                </label>
                <input type="password"
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Password"
                name="password"
                value={userInfo.password}
                onChange={change}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Confirm Password
                </label>
                <input type="password"
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Confirm password"
                name="confirmpassword"
                value={userInfo.confirmpassword}
                onChange={change}
                />
                {errors.confirmpassword && <span style={{ color: 'red' }}>{errors.confirmpassword}</span>}
            </div>
            <input type="submit" value="Submit" className="h-[50px] w-52 bg-gradient-to-tr from-violet-700 to-fuchsia-500  text-white text-xl font-medium italic rounded-lg cursor-pointer" />
        </form>
        </div>
    )
}

export default SignUp