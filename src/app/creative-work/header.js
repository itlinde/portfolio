export default function Header() {
    return (
        <div id="title" className="">
            <h2 className="p-7 place-self-center text-center leading-10">creative corner</h2>
            <div className="flex justify-center items-center space-x-1 sm:space-x-4 pb-7 border-b border-secondary">
                <a href="#drawings-paintings" className="leading-5 font-averia p-1 px-3 place-self-center text-center hover:text-textPrimary hover:bg-secondary/30 rounded-md transition ease-in-out duration-200">drawings & paintings</a>
                <a href="#photography" className="leading-5 font-averia p-1 px-3 place-self-center text-center hover:text-textPrimary hover:bg-secondary/30 rounded-md transition ease-in-out duration-200">photography</a>
                <a href="#films" className="leading-5 font-averia p-1 px-3 place-self-center text-center hover:text-textPrimary hover:bg-secondary/30 rounded-md transition ease-in-out duration-200">films & videos</a>
            </div>
        </div>
    );
}