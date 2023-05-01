import { useRouter } from "next/router";

const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div className="
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        hover:bg-blue-300
        hover:bg-opacity-10
        cursor-pointer
        transition
        "></div>
    );
}
export default SidebarLogo;