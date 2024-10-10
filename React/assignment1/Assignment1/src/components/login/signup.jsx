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


    const change = (e) => {
        updateState({...userInfo, [e.target.name]: e.target.value})
    };



    const sendEmail = (e) => {
        e.preventDefault();
        console.log(userInfo);

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
                required
                placeholder="Enter first name"
                name="firstname"
                value={userInfo.firstname}
                onChange={change}
                />
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Last Name
                </label>
                <input 
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                required
                placeholder="Enter last name"
                name="lastname"
                value={userInfo.lastname}
                onChange={change}
                />
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Email
                </label>
                <input type="email"
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                placeholder="Enter your email address"
                required
                name="email"
                value={userInfo.email}
                onChange={change}
                />
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Age
                </label>
                <input type="number"
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                required
                placeholder="Enter your age"
                name="age"
                value={userInfo.age}
                onChange={change}
                />
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Gender
                </label>
                <input 
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                required
                placeholder="Enter your gender"
                name="gender"
                value={userInfo.gender}
                onChange={change}
                />
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Nationality
                </label>
                <input 
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                required
                placeholder="Enter your nationality"
                name="nationality"
                value={userInfo.nationality}
                onChange={change}
                />
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Phone No.
                </label>
                <input 
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                required
                placeholder="Enter your telephone number"
                name="phonenumber"
                value={userInfo.phonenumber}
                onChange={change}
                />
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Password
                </label>
                <input type="password"
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                required
                placeholder="Password"
                name="password"
                value={userInfo.password}
                onChange={change}
                />
            </div>
            <div className="flex flex-col justify-start gap-1 w-full">
                <label className="font-semibold text-lg">
                    Confirm Password
                </label>
                <input type="password"
                className="border-black border h-10 w-full p-3 text-xl font-medium italic rounded-md focus:outline-none"
                required
                placeholder="Confirm password"
                name="confirmpassword"
                value={userInfo.confirmpassword}
                onChange={change}
                />
            </div>
            <input type="submit" value="Submit" className="h-[50px] w-52 bg-gradient-to-tr from-violet-700 to-fuchsia-500  text-white text-xl font-medium italic rounded-lg cursor-pointer" />
        </form>
        </div>
    )
}

export default SignUp