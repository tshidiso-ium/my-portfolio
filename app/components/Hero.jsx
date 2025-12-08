export default function Hero() {
  return (
    <>
    <div className="z-10 bg-[url('https://firebasestorage.googleapis.com/v0/b/my-profile-95716.firebasestorage.app/o/bg-ndebele-1.png?alt=media&token=3b69864e-90d2-4c60-9ea1-ddc1b47d2675')] bg-repeat  border-t-8 border-t-blue-500 border-b-8 border-b-blue-500">
    <div className="backdrop-blur-sm" >
    <div className="z-20 pt-32 px-6 text-center max-w-4xl mx-auto py-20">
      <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4 text-white">
        Building fast, scalable web experiences ⚡️
      </h1>
      <p className="text-lg text-white dark:text-zinc-400 mb-6">
        Full-stack developer with 3+ years of experience in React, Node.js, and cloud-native tools.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#projects" className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-90">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-2 border border-white rounded hover:scale-105 hover:tra-0.5  text-white">
          Get in Touch
        </a>
      </div>
      </div>
    </div>

    </div>
    </>
  )
}