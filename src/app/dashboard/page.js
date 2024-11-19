import CardStatus from "@/components/CardStatus/CardStatus";
import SideBar from "@/components/SideBar/SideBar";

export default function DashboardPage() {
    return (
        <div className="flex relative min-h-full items-center flex-1 flex-col justify-start px-6 lg:px-8">
            <SideBar />
            <div className="flex flex-wrap w-full pl-24 py-10 justify-start">
                <CardStatus />
                <CardStatus />
                <CardStatus />
                <CardStatus />
                <CardStatus />
                <CardStatus />
                <CardStatus />
                <CardStatus />
                <CardStatus />
                <CardStatus />
                <CardStatus />
                <CardStatus />
            </div>
        </div>
    )
}