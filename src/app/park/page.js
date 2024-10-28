"use client"
import Button from "@/components/Button/Button";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import ModalWithBackdrop from "@/components/ModalWithBackdrop/ModalWithBackdrop";
import SideBar from "@/components/SideBar/SideBar";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

export default function ParkPage() {
    const [showModal,  setShowModal] = useState(false)

    return (
        <div className="flex relative min-h-full items-center flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <SideBar />
            <ModalWithBackdrop show={showModal} onClose={() => setShowModal(false)}>
                <div className="flex flex-col space-y-4">
                    <InputWithLabel label="N° Identificador" type="number" />
                    <Button>Salvar</Button>
                </div>
            </ModalWithBackdrop>
            <div className="flex flex-col flex-grow w-full justify-start items-end pl-24">
                <div className="flex">
                    <Button onClick={() => setShowModal(true)}>
                        Adicionar Vaga
                    </Button>
                </div>
                <div className="flex flex-col space-y-3 w-full mt-6">
                    <div className="flex w-full justify-between bg-gray-200 rounded-xl p-4">
                        <div className="flex">
                            VAGA 001
                        </div>
                        <div className="flex cursor-pointer">
                            <Trash size={20} />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}