import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function LoginPage(){
    const navigate = useNavigate();
    const [form,setform] = useState({
        email:'',
        password:''
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setform((prev)=>({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', form, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log('Login successful, navigating to dashboard...');
                navigate('/dashboard');
            } else {
                alert('Login failed: ' + response.data.msg);
            }
            
            setform({
                email: '',
                password: ''
            });
        } catch (error) {
            console.error('Login error:', error);
            alert(error.response?.data?.msg || 'An error occurred during login');
        }
    };


    return(
        <>
        <div className="relative h-full w-full">
            <img src="/src/assets/loginc1.png" alt="car" className="h-screen w-full object-cover" />
            

            <div className="absolute top-0 bg-transparent w-screen h-screen flex justify-center items-center">
             <div className="h-[800px] w-[800px] flex justify-center items-center">

                <div className="rounded-[50px] relative h-[600px] w-[700px]  flex justify-center">
                    
                    <form onSubmit={handleSubmit} className="absolute top-[50px] flex flex-col text-3xl"> 
                        <div className="flex flex-col gap-[10px] w-[600px]">
                             <label htmlFor="email" className="text-white text-bold text-[2rem]">Email : </label>
                             <input value={form.email} onChange={handleChange} className="bg-white pl-[10px] h-[60px] border-2 border-black rounded-[10px]" type="email" name="email" id="email" placeholder="Enter Email Here"></input>
                        </div>

                        <div className="flex flex-col gap-[10px]">
                             <label htmlFor="password" className="text-white text-bold text-[2rem]">Password : </label>
                             <input value={form.password} onChange={handleChange} className="bg-white pl-[10px] h-[60px] border-2 border-black rounded-[10px]" type="password" name="password" id="password" placeholder="Enter Password Here"></input>
                        </div>
                        
                        <button type="submit" className="w-[300px] ml-[150px] mt-[20px] text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-[1.8rem] rounded-lg text-sm px-5 py-2.5 text-center">Log-in</button>

                    </form>
    

                </div>



             </div>
        </div>
      
      
        </div>

      
        </>
    );
}

export default LoginPage;