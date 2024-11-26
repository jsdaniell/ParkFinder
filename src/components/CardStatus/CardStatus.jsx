import { CarSimple } from "@phosphor-icons/react/dist/ssr";

export default function CardStatus({name = "Name", occuped = false, plate = "", onClick = () => {}, entryHour = "00:00:00"}) {
    return (
        <div onClick={onClick} className="bg-blue-950 cursor-pointer rounded-2xl flex flex-col justify-between m-2 text-white p-3 px-5 space-y-3 flex-shrink">
            <div className="flex">
                <div className="flex-1 flex justify-start font-bold">
                   {name}
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <div className={`h-3 w-3 ${!occuped ? "bg-green-500" : "bg-red-500"} rounded-full`}></div>
                </div>
            </div>
            <div className="flex flex-grow space-x-3 flex-row justify-center items-center">
                <CarSimple size={28} />
                <p className="font-black text-xl">{plate || "Desocupada"}</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex-1 flex justify-center">
                    E: &nbsp; <span className="font-bold">{occuped ? entryHour : "00:00:00"}</span>
                </div>
            </div>
        </div>
    )
}