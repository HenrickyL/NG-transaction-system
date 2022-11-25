import { Heading } from "../../components/Heading"

export const Home = ()=>{
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-[70vw] h-[60vh] bg-slate-700 rounded-lg">

      <form action=""
        className="w-full h-full bg-red-500 "
        >

      </form>
      <div className="flex w-full items-center justify-between bg-red-500">
        <div className=" w-full border-4 bor bg-red-500 border-black">
          <Heading>aaa</Heading>
        </div>
        <div className="w-full border-t-4 bg-red-500 border-black">
          <Heading>aaa</Heading>
        </div>
      </div>
      </div>

    </div>
  )
}