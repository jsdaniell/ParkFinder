"use client"
import Button from "@/components/Button/Button";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import ModalWithBackdrop from "@/components/ModalWithBackdrop/ModalWithBackdrop";
import SideBar from "@/components/SideBar/SideBar";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";
import { URL_API } from "@/utils/constants/serviceConstants";

export default function ParkPage() {
    const [showModal,  setShowModal] = useState(false)
    const [spaces, setSpaces] = useState([]);
    const [name, setName] = useState("");
    const [floor, setFloor] = useState("");

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          };

        fetch(URL_API + "spaces", requestOptions)
            .then(async (response) => {
                const result = await response.json();

                setSpaces(result);
            })
            .catch((error) => console.error(error));
    }, []);

    function registerSpace() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": name,
            "floor": Number(floor)
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(URL_API + "spaces", requestOptions)
            .then(async (response) => {
                const result = await response.json();

                setSpaces([...spaces, result]);
                setShowModal(false);
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className="flex relative min-h-full items-center flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <SideBar />
            <ModalWithBackdrop show={showModal} onClose={() => setShowModal(false)}>
                <div className="flex flex-col space-y-4">
                    <InputWithLabel label="Nome" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                    <InputWithLabel label="N° Andar" type="number" onChange={(e) => setFloor(e.target.value)} value={floor} />
                    <Button onClick={registerSpace}>Adicionar</Button>
                </div>
            </ModalWithBackdrop>
            <div className="flex flex-col flex-grow w-full justify-start items-end pl-24">
                <div className="flex">
                    <Button onClick={() => setShowModal(true)}>
                        Adicionar Vaga
                    </Button>
                </div>
                <div className="flex flex-col space-y-3 w-full mt-6">
                    {spaces.map((space) => (
                        <div key={space.id} className="flex w-full justify-between bg-gray-200 rounded-xl p-4">
                        <div className="flex">
                            {space.name}
                        </div>
                        <div className="flex cursor-pointer">
                            <Trash size={20} />
                        </div>
                    </div>
                    ))}
                </div>
            </div> 
        </div>
    )
}