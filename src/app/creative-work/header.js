export default function Header() {
    return (
        <div id="title" className="">
            <h2 className="pt-7 place-self-center">my little hobbies</h2>
            <div className="flex justify-center space-x-6 pb-7 border-b border-secondary">
                <a href="#drawings-paintings" className="font-averia block p-1 px-3 hover:text-textPrimary hover:bg-secondary/30 rounded-md transition ease-in-out duration-200">drawings & paintings</a>
                <a href="#photography" className="font-averia block p-1 px-3 hover:text-textPrimary hover:bg-secondary/30 rounded-md transition ease-in-out duration-200">photography</a>
                <a href="#films" className="font-averia block p-1 px-3 hover:text-textPrimary hover:bg-secondary/30 rounded-md transition ease-in-out duration-200">films & videos</a>
            </div>
        </div>
    );
}