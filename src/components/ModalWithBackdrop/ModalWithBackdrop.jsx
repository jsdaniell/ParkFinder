import { X } from "@phosphor-icons/react/dist/ssr";

export default function ModalWithBackdrop({ children, show, onClose }) {
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black 
        bg-opacity-50 ${show ? 'visible' : 'hidden'} flex`}>
            <div className="bg-white p-4 rounded-lg w-96">
                <div className="flex justify-end">
                    <button onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}