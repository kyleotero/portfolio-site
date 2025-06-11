export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen font-copyduck text-xl sm:text-2xl lg:text-4xl m-0 overflow-hidden">
      <div className="text-center px-4">
        <header>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">kyle otero</h1>
        </header>

        <div>
          <p className="mt-2 text-lg sm:text-xl lg:text-2xl">software engineer</p>
          <p className="mt-2 text-sm sm:text-base lg:text-lg>studying cs (and a bit of psych) @ wilfrid laurier university</p>
          <p className="mt-2 text-sm sm:text-base lg:text-lg">
            former @
            <span className="hover:text-[#ff3008] mx-1">doordash</span>,
            <span className="hover:text-[#632ba6] mx-1">datadog</span>,
            <span className="hover:text-[#0061fe] mx-1">dropbox</span>
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 justify-center items-center">
          <a
            href="https://www.linkedin.com/in/kotero/"
            className="underline decoration-black text-black hover:text-[#ff3008] hover:decoration-[#ff3008] text-sm sm:text-base lg:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            href="https://docsend.com/view/wra6qd36wma6zack"
            className="underline decoration-black text-black hover:text-[#ff3008] hover:decoration-[#ff3008] text-sm sm:text-base lg:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          <a
            href="https://github.com/kyleotero"
            className="underline decoration-black text-black hover:text-[#ff3008] hover:decoration-[#ff3008] text-sm sm:text-base lg:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
}
