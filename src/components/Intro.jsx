function Intro() {
  return (
    <>
      {" "}
      <div className="bg-[#e8f9f5] w-full min--screen  flex flex-col items-center justify-start p-4">
       
        <div className=" inline-flex  text-3xl font-mono  ">
          <h1 className="text-5xl font-bold   transition duration-300 ease-in-out hover:drop-shadow-lg">
            Welcome to My Portfolio Webpage...🏡
          </h1>
        </div>

<div className="grid lg:grid-cols-2 sm:grid-cols-1  ">
        <div className=" hover:scale-110 duration-200 overflow-hidden w-60 mt-12 h-80 border rounded-2xl">
          <img
            src="/profimgcrop.jpg"
            alt="image here"
            className=" object-cover rounded-lg  "
          />
    </div>
    <div>
          <h1 className="text-4xl  font-bold  mt-20     transition
           duration-300 ease-in-out
            hover:drop-shadow-lg 
              hover:text-[#22d3ee]
">Balaji R </h1>
<br/>
          <p className="text-xl hover:text-[#22d3ee] ">
            Student | A Full Stack Web Developer | Java Enthusiast | Debug Pro
          </p>
     </div>
      </div>

      </div>  
    </>
  );
}
export default Intro;
