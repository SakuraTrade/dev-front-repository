import { useForm } from "react-hook-form";
const SignupMain = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmitHandler = (data) => {
    window.alert(JSON.stringify(data));
  };

  return (
    <div className="w-[400px] h-screen m-auto py-16">
      <h2 className="mb-8 text-xl font-bold">회원 가입</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <label className="w-full text-lg text-gray-700">Email</label>
        <input
          className="w-full p-4 bg-gray-300 border-1 rounded-sm mb-4"
          type="text"
          placeholder="Enter the email"
          {...register("Email", { required: true })}
        ></input>
        {errors.Email && <p>Email is required</p>}
        <label className="w-full text-lg text-gray-700">Password</label>
        <input
          className="w-full p-4 bg-gray-300 border-1 rounded-sm mb-4"
          type="password"
          placeholder="Enter the password"
          {...register("password", { required: true })}
        ></input>
        {errors.password && <p>Password is required</p>}
        <button
          type="submit"
          className="bg-green-500 w-full text-white py-2 rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupMain;
