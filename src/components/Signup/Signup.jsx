import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Signup = () => {
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const from = "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password, photoURL, fullName } = data;

        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, photoURL)
                    .then(() => {
                        toast.success("Congratulations! You're now part of our community. Start exploring!");
                        navigate(from);
                    });
            });
    };

    return (
        <section className="flex h-screen flex-row-reverse">
            <div className="hidden lg:flex items-center justify-center flex-1">
                <div className="w-full">
                    <img src="https://images.unsplash.com/photo-1545922016-87c93aaca2ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="plane flying" className="object-cover w-full h-screen" />
                </div>
            </div>
            <div className="w-full bg-background text-text lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-center text-primary tracking-widest">Signup</h1>
                    <h1 className="font-semibold mb-6 opacity-40 text-center">Join Our Community for free </h1>
                    <form className="space-y-4" onSubmit={ handleSubmit(onSubmit) }>
                        <div>
                            <label className="block font-medium">Name</label>
                            <input type="text" id="name" name="name" placeholder="First Name & Last Name" className="mt-1 p-2 w-full border rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500 bg-primary-70"  { ...register("fullName", { required: true }) } />
                            { errors.fullName && <p className="pt-2 text-red-400 italic font-semibold opacity-70">This field is required*</p> }
                        </div>
                        <div>
                            <label className="block font-medium">Email</label>
                            <input type="text" id="email" name="email" placeholder="user@gmail.com" className="mt-1 p-2 w-full border rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500 bg-primary-70" { ...register("email", { required: true }) } />
                            { errors.email && <p className="pt-2 text-red-400 italic font-semibold opacity-70">This field is required*</p> }
                        </div>
                        <div>
                            <label className="block font-medium">PhotoURL</label>
                            <input type="text" id="photourl" name="email" placeholder="www.photourl.com" className="mt-1 p-2 w-full border rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500 bg-primary-70" { ...register("photoURL", { required: true }) } />
                            { errors.photoURL && <p className="pt-2 text-red-400 italic font-semibold opacity-70">This field is required*</p> }
                        </div>
                        <div>
                            <label className="block font-medium">Password</label>
                            <input type="password" id="password" name="password" placeholder="******" className="mt-1 p-2 w-full border rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500 bg-primary-70" { ...register("password", { required: true, minLength: 6, pattern: /^(?=.*?[A-Z])(?=.*?[a-z]).{6,}$/ }) } />
                            { errors.password && errors.password.type === "required" && <p className="pt-2 text-red-400 italic font-semibold opacity-70">This field is required*</p> }
                            { errors.password && errors.password.type === "minLength" && <p className="pt-2 text-red-400 italic font-semibold opacity-70">Password must be at least 6 characters*</p> }
                            { errors.password && errors.password.type === "pattern" && <p className="pt-2 text-red-400 italic font-semibold opacity-70">Password must contain at least one uppercase letter and one lowercase letter</p> }
                        </div>
                        <div>
                            <button type="submit" className="flex w-full items-center justify-center px-4 py-2 text-base font-bold leading-6 text-inverse-text whitespace-no-wrap bg-primary border-2 border-transparent rounded-md shadow-sm hover:bg-transparent hover:text-text hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500">
                                Signup
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 opacity-70 text-center">
                        <p>Already have an account? <Link to="/login" className="hover:underline text-primary font-bold tracking-wider">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;