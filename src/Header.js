import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="border-b-4 border-purple-700 p-4 bg-purple-600 flex justify-between items-center shadow-lg">
            <Link to="/add">
                <button className="bg-purple-800 border-2 border-purple-900 text-white px-5 py-2 rounded-2xl font-semibold shadow-md hover:bg-purple-700 hover:scale-105 transition-transform duration-300">
                    Add
                </button>
            </Link>

            <div className="flex gap-4">
                <Link to="/show">
                    <button className="bg-purple-800 border-2 border-purple-900 text-white px-5 py-2 rounded-2xl font-semibold shadow-md hover:bg-purple-700 hover:scale-105 transition-transform duration-300">
                        Show
                    </button>
                </Link>
                <Link to="/done">
                    <button className="bg-purple-800 border-2 border-purple-900 text-white px-5 py-2 rounded-2xl font-semibold shadow-md hover:bg-purple-700 hover:scale-105 transition-transform duration-300">
                        Done
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
