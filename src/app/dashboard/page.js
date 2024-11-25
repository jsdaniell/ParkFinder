"use client"
import CardStatus from "@/components/CardStatus/CardStatus";
import SideBar from "@/components/SideBar/SideBar";
import { useEffect, useState } from "react";
import { URL_API } from "@/utils/constants/serviceConstants";
import ModalWithBackdrop from "@/components/ModalWithBackdrop/ModalWithBackdrop";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import Button from "@/components/Button/Button";

export default function DashboardPage() {
    const [spaces, setSpaces] = useState([]);
    const [showModal, setShowModal] = useState("");
    const [plate, setPlate] = useState("");

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

    return (
        <div className="flex relative min-h-full items-center flex-1 flex-col justify-start px-6 lg:px-8">
            <SideBar />
            <ModalWithBackdrop show={Boolean(showModal)} onClose={() => setShowModal(false)}>
                <div className="flex flex-col space-y-4">
                    <InputWithLabel  
                    value={spaces.find((space) => space.id === showModal)?.plate} 
                    label="Placa" 
                    type="text" 
                    disabled={spaces.find((space) => space.id === showModal)?.occuped} 
                    onChange={(e) => setPlate(e.target.value)}
                    />
                    <Button>{spaces.find((space) => space.id === showModal)?.occuped ? "Desocupar" : "Ocupar"}</Button>
                </div>
            </ModalWithBackdrop>
            <div className="flex flex-wrap w-full pl-24 py-10 justify-start">
                {spaces.map((space) => (
                    <CardStatus onClick={() => setShowModal(space.id)} key={space.id} name={space.name} occuped={space.occuped} plate={space.plate} />
                ))}
            </div>
        </div>
    )
}