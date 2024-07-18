import MainBody from "./components/MainBody";
import { useNavigate } from "react-router-dom";

const DevComSection = () => {
    const navigate = useNavigate();
    const Navigate = () => {
      navigate('/contact-us');
    };

  return (
    <>
      <div className="size-full overflow-y-auto ">
        <div className="relative size-full bg-[url('https://image.freepik.com/free-vector/spot-light-background_1284-4685.jpg')] bg-cover rounded-2xl">
          <div className="w-[65%] absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-semibold text-zinc-800 tracking-wide opacity-95 flex justify-center items-center flex-col">
            <div>
              <span className="text-5xl text-indigo-600 opacity-100">
                Dev Com
              </span>{" "}
              is community for developers Where they can share their ideas
              related to the mehenga discord
            </div>
            <button
              className="w-fit bg-yellow-500 text-white text-lg font-normal 
            mt-4 py-2 px-3 rounded-full hover:text-yellow-500 hover:bg-white border-2 border-yellow-500 tracking-normal transition-all"
              onClick={Navigate}
            >
              Have an Idea we can help with?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function DevCom() {
  return <MainBody data={<DevComSection />} open={true} />;
}

export default DevCom;
