import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, router } from "@inertiajs/react";

export default function Dashboard(props) {
    const { kategori_menu } = usePage().props;
    console.log("MY PROPS:", props.kategori_menu);
    function destroy(e) {
        if (confirm("Are you sure you want to delete this Kategori Menu?")) {
            router.delete(route("kategori_menu.destroy", e.currentTarget.id));
        }
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            user={props.auth.user}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Kategori Menu
                </h2>
            }
        >
            <Head title="List Menu" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={route("kategori_menu.create")}
                                >
                                    Create Kategori
                                </Link>
                            </div>
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">
                                            Nama Kategori
                                        </th>
                                        <th className="px-4 py-2">Deskripsi</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kategori_menu &&
                                        kategori_menu.map((item, i) => (
                                            <tr key={i}>
                                                <td className="border px-4 py-2">
                                                    {item.id}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.nama}
                                                </td>
                                                <td className="border px-4 py-2">
                                                    {item.deskripsi}
                                                </td>

                                                <td className="border px-4 py-2">
                                                    <Link
                                                        tabIndex="1"
                                                        className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                        href={route(
                                                            "kategori_menu.edit",
                                                            item.id
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={destroy}
                                                        id={item.id}
                                                        tabIndex="-1"
                                                        type="button"
                                                        className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    {kategori_menu.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t text-center text-gray-500 mt-4"
                                                colSpan="4"
                                            >
                                                List Menu No Found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
