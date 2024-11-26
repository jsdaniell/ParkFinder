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

    function markAsOccuped() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "plate": plate
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(URL_API + `spaces/${showModal}/entry`, requestOptions)
            .then(async (response) => {
                const result = await response.json();

                setSpaces(spaces.map((space) => {
                    if (space.id === showModal) {
                        return result;
                    }

                    return space;
                }));

                setShowModal(false);
            })
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    function markAsNotOccuped() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(URL_API + `spaces/${showModal}/exit`, requestOptions)
            .then(async (response) => {
                const result = await response.json();

                setSpaces(spaces.map((space) => {
                    if (space.id === showModal) {
                        return result;
                    }

                    return space;
                }));

                setShowModal(false);
            })
    }


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

                console.info(result);

                setSpaces(result);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="flex relative min-h-full items-center flex-1 flex-col justify-start px-6 lg:px-8">
            <SideBar />
            <ModalWithBackdrop show={Boolean(showModal)} onClose={() => {
                setShowModal(false)
                setPlate("")
            }}>
                <div className="flex flex-col space-y-4">
                    <InputWithLabel
                        value={plate}
                        label="Placa"
                        type="text"
                        disabled={spaces.find((space) => space.id === showModal)?.occuped}
                        onChange={(e) => setPlate(e.target.value)}
                    />
                    <Button 
                    onClick={spaces.find((space) => space.id === showModal)?.occuped 
                    ? markAsNotOccuped 
                    : markAsOccuped }>
                        {spaces.find((space) => space.id === showModal)?.occuped ? "Desocupar" : "Ocupar"}</Button>
                </div>
            </ModalWithBackdrop>
            <div className="flex flex-wrap w-full pl-24 py-10 justify-start">
                {spaces.map((space) => (
                    <CardStatus
                        onClick={() => {
                            setShowModal(space.id)
                            setPlate(space.plate)
                        }}
                        key={space.id}
                        name={space.name}
                        occuped={space.occuped}
                        plate={space.plate}
                        entryHour={space.lastentry}
                    />
                ))}
            </div>
        </div>
    )
}