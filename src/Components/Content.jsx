function Content () {
    return <div>
        <div  id="home" className="bg-gray-800 m-0 pl-20 pt-32 relative">
    <p className="text-yellow-500 text-lg pb-10">
        Hello, Welcome
    </p>
    <h2 className="text-white text-4xl font-bold pb-5">
        I am Muscab Mohamud 
    </h2>
    <p className="text-lg text-gray-300 pb-3 ">
        Step into my world. Here, you'll find insights 
        into my life <br /> my skills my education, and my dreams 
        for tomorrow. <br /> Let's embark on this journey together.
    </p>
    <button className="bg-yellow-500 mt-3 font-semibold text-lg px-6 py-3 mb-24 rounded-xl">
        Contact me
    </button>
    <div>
        <img src="/src/assets/Muscp.png" className="w-[400px] rounded-3xl absolute top-10 right-32"/>
    </div>
</div>

{/* About page */}

<div id="about" className="flex bg-gray-900 py-24 pl-24">
    <div className="">
        <div className=" relative w-[450px] h-[500px] border-[16px] rounded-3xl border-yellow-500 bg-transparent">
            <img src="/src/assets/Muscab.png" className="absolute bottom-5 left-7 w-[550px] h-[480px] rounded-2xl" />
        </div>
    </div>
    <div className="pl-32 pt-24">
        <h2 className="text-white text-4xl font-bold">About <span className="text-yellow-500">me</span></h2>
        <p className="text-gray-300 font-semibold pr-14 pt-5">
            Hello, I'm Muscab, a medical Student passionate about Programming. 
            Welcome to my personal corner on the web! I'm currently student, 
            striving to coding and to become a doctor. <br /> <br />
            Through this website, I aim to share insights into my journey, 
            skills, intrests and aspirations.
        </p>
        <button className="bg-yellow-500 font-semibold mt-10 text-lg px-6 py-3 mb-24 rounded-xl">
            Contact me
        </button>
    </div>
</div>

{/* Skills Page */}

<div id="skills" className="bg-gray-800 m-0 pl-28 pb-5 pt-32 pr-5">
    <h2 className="text-4xl text-white font-bold pb-10">
        My Skill <span className="text-yellow-500">Set</span> 
    </h2>
    <p className="text-lg text-gray-300 font-semibold">
        I am passionate about combining my expertise in Web Development, <br />
        my ongoing journey as a Medical Student, and my commitment to Cybersecurity. <br />
        With a diverse skill set and a drive for continuous learning, <br />
        I strive to bridge the gap between technology and healthcare.
    </p>
    <div className="flex pt-10 pb-14 justify-center">
        <div className="bg-gray-900 px-7 py-6 rounded-2xl mr-5">
            <i className="fa-solid fa-code text-4xl text-yellow-500 ml-28 mb-5"></i>
            <h3 className="text-white text-3xl font-bold pl-12">
                <span className="pl-7">Dynamic</span> <br /> <span className="pl-0">Web Creator</span>
            </h3>
            <p className="text-lg text-gray-500 font-semibold pt-6 pb-6">
                <span className="pl-3">Creating dynamic, user friendly </span>  
                <br /> websites with expertise in frontend 
                <br /> & backend technologieslike <br /> HTML, CSS, JavaScript, React.
            </p>
        </div>
        <div className="bg-gray-900 px-7 py-6 rounded-2xl mr-5">
            <i className="fa-solid fa-user-doctor text-4xl text-yellow-500 ml-32 mb-5"></i>
            <h3 className="text-white text-3xl font-bold pl-12">
                <span className="pl-7">Dedicated</span> <br /> Health Leaner
            </h3>
            <p className="text-lg text-gray-500 font-semibold pt-6 pb-6">
                <span className="pl-7">Dedicated medical student with</span> <br /> 
                strong clinical knowledge and research<br /> 
                <span className="pl-5">skills, focused on understanding</span> <br /> 
                <span className="pl-20">human health.</span>
                   
            </p>
        </div>
        <div className="bg-gray-900 px-7 py-6 rounded-2xl mr-5">
            <i className="fa-solid fa-shield-halved text-4xl text-yellow-500 ml-28 mb-5"></i>
            <h3 className="text-white text-3xl font-bold pl-4">
                <span className="pl-20">Cyber</span> <br />Threat Protector
            </h3>
            <p className="text-lg text-gray-500 font-semibold pt-6 pb-6">
                <span className="pl-1.5">Ensuring secure digital solutions</span> <br /> 
                with expertise in network security, <br /> 
                <span className="pl-5">threat analysis, and incident </span><br /> 
                <span className="pl-16">response practices.</span>
            </p>
               
        </div>
    </div>
</div>

{/* Portifolio Page */}

<div id="portfolio" className="bg-gray-900 px-24 pt-14 ">
    <h2 className="text-4xl text-white font-bold pb-5 pl-[37%]">
        My <span className="text-yellow-500">Portfolio</span> 
    </h2>
    <p className="text-gray-500 text-base font-medium pl-[28%] pb-10">
        Explore snapshots reflecting my journey from professional 
        <br /> 
        <span className="pl-3">endeavors to personal milestones. Discover who I am.</span>
    </p>
    <div className="pb-10 flex">
        <img src="/src/assets/school.jpeg" className="w-[450px] rounded-3xl mr-10" />
        <div className="inline-block">
            <div className="flex mt-5">
                <img src="/src/assets/dj.jpeg" className="w-[250px] h-[250px] rounded-2xl mr-6 mb-6" />
                <img src="/src/assets/speaker.jpeg" className="w-[250px] h-[250px] rounded-2xl" />
            </div>
            <div className="flex ">
                <img src="/src/assets/top.jpeg" className="w-[250px] h-[250px] rounded-2xl  mr-6" />
                <img src="/src/assets/medical.jpeg" className="w-[250px] h-[250px] rounded-2xl" />
            </div>
        </div>
    </div>
</div>

{/* Contact Page */}
<div id="contact" className="bg-gray-800 m-0 pl-28 pb-5 pt-32">
    <h2 className="text-4xl text-white font-bold pb-10 pl-[33%]">
        Contact<span className="text-yellow-500"> Me</span> 
    </h2>
    <p className="pl-[20%] text-gray-500 text-lg font-semibold">
        Reach out and connect with me directly. Let's start a conversation  <br />
        <span className="pl-16">about collaboration or opportunities.</span>
    </p>
    <div className="flex pt-10">
        <div className="mr-40">
            <ul className="text-lg font-semibold text-white">
                <li className="mb-5"><span className="text-yellow-500">Address _</span> Heliwa-Mogadishu-Somalia</li>
                <li className="mb-5"><span className="text-yellow-500">Phone _</span>  +252 684 350 967</li>
                <li className="mb-5"><span className="text-yellow-500">Email _</span> muscabmaxamuud356@gmail.com</li>
                <li className="mb-5"><span className="text-yellow-500">Website _</span> www.Muscab19.com</li>
            </ul>
        </div>
        <div className="inline-block">
            <input type="text" className="w-[300px] py-4 pl-2 bg-gray-900 rounded-xl" placeholder="Name" />  <br />  <br />
            <input type="text" className="w-[500px] pb-[130px] bg-gray-900 pt-3 pl-3 rounded-xl border-[1px solid white]" placeholder="Message" />  <br />
            <button className="bg-yellow-500 font-semibold mt-10 text-lg px-6 py-3 mb-24 rounded-xl">
                Contact me
            </button>
        </div>
    </div>
    <hr className="mr-32" />
    <p className="text-gray-400 pl-[30%]">
        All rights are reserved by @Muscap
    </p>
</div>
    </div>
}

export default Content 