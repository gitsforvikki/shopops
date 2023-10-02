import React from "react";

let UserLogin =()=>{  
  return(
    <React.Fragment>
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div>
          <span className="text-2xl">Sign in your account</span>
          <div className="bg-indigo-400 h-2 mt-5 rounded-t-md"></div>
          <div className="shadow-md hover:shadow-2xl">
            <form className="px-8 py-6 bg-white">
              <div className="mb-3">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                <input type="email" id="email" className=" border-none px-4 py-2 rounded hover:outline-none  
                   focus:outline-none focus:ring-1 focus:ring-indigo-400 " placeholder="name@shopops.com" required/>
              </div>

              <div  className="mb-3">
                <label for="Password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
                <input type="password" id="email" className=" w-full border px-4 py-2 rounded hover:outline-none 
                  focus:outline-none focus:ring-1 focus:ring-indigo-400" placeholder="********" required/>
              </div>
              <div className="my-6 flex justify-between items-baseline">
                <button type="submit" className="bg-indigo-500 px-4 py-2 text-white rounded hover:bg-indigo-600  hover:shadow-indigo-500 hover:shadow-4lg">Login</button>
                <a href="#" className="text-sm hover:underline">forgot password?</a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default UserLogin;