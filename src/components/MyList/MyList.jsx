import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
    const { user } = useAuth() || {};
    const [myList, setMyList] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://tourist-spot-server-nu.vercel.app/my-list/${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                setMyList(data);
            })
    }, [user, control]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#24516b",
            cancelButtonColor: "rgb(254, 113, 113)",
            confirmButtonText: "Yes, delete it!",
            background: "#24516b",
            color: "#eef0f1"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourist-spot-server-nu.vercel.app/delete/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Tourist spot deleted successfully.",
                                icon: "success",
                                background: "#24516b",
                                color: "#eef0f1",
                                showConfirmButton: false
                            });

                            setControl(!control);
                        }
                    })
            }
        });
    };

    const TABLE_HEAD = ["Tourist Sport Name", "Location", "Average Cost", "Seasonality", "Travel Time", "Total Visitors Per Year", ""];

    return (
        <section className={ `bg-background p-6 flex flex-col items-center` }>
            <h3 className="text-2xl text-primary">List of { user.displayName }</h3>
            {
                myList.length > 0 ? (
                    <>
                        <div className="flex flex-wrap stack my-6 w-full container lg:p-0 px-6">
                            { myList.slice(0, 3).map(myList => (
                                <div key={ myList.uid }>
                                    <img
                                        className="h-40 w-80 max-w-full rounded-lg object-cover object-center"
                                        src={ myList.image }
                                        alt="gallery-photo"
                                    />
                                </div>
                            )) }
                        </div>
                        <Card className="h-fit w-full overflow-scroll container mx-auto mt-6">
                            <table className="w-full min-w-max table-auto text-left font-medium border border-primary-10">
                                <thead>
                                    <tr>
                                        { TABLE_HEAD.map((head) => (
                                            <th key={ head } className="border-b border-blue-gray-100 bg-background p-4">
                                                <p
                                                    className="leading-none opacity-70"
                                                >
                                                    { head }
                                                </p>
                                            </th>
                                        )) }
                                    </tr>
                                </thead>
                                <tbody>
                                    { myList.map(myList => (
                                        <tr key={ myList.tourist_spot_name } className="bg-background">
                                            <td className="p-4">
                                                <p>
                                                    { myList.tourist_spot_name }
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <p>
                                                    { myList.location }
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <p>
                                                    { myList.average_cost }
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <p>
                                                    { myList.seasonality }
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <p>
                                                    { myList.travel_time }
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <p>
                                                    { myList.totalVisitorsPerYear }
                                                </p>
                                            </td>
                                            <td>
                                                <Link to={ `/update-tourist-spot/${myList._id}` }>
                                                    <button className="relative rounded px-5 py-2 overflow-hidden group bg-accent hover:bg-gradient-to-r hover:from-accent hover:to-secondary hover:ring-2 hover:ring-offset-2 hover:ring-accent transition-all ease-out duration-500">
                                                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-background opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                                        <p className="relative text-text font-semibold">Update</p>
                                                    </button>
                                                </Link>
                                                <button className="relative rounded px-5 py-2 overflow-hidden group bg-red-300 hover:bg-gradient-to-r hover:from-red-300 hover:to-red-200 hover:ring-2 hover:ring-offset-2 hover:ring-red-300 transition-all ease-out duration-500 ml-2" onClick={ () => handleDelete(myList._id) }>
                                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-background opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                                    <p className="relative text-text font-semibold">Delete</p>
                                                </button>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        </Card>
                    </>
                ) : (
                    <div className="h-[32.5vh] flex items-center justify-center font-semibold text-lg w-full bg-cover bg-center bg-no-repeat mt-2" style={ { backgroundImage: "url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" } }>
                        No tourist spot found.
                    </div>
                )
            }
        </section>
    );
};

export default MyList;