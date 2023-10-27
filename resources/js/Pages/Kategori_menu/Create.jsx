import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    const { data, setData, errors, post } = useForm({
        nama: "",
        deskripsi: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("kategori_menu.store"));
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            user={props.auth.user}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Kategori Menu
                </h2>
            }
        >
            <Head title="Posts" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={route("kategori_menu.index")}
                                >
                                    Back
                                </Link>
                            </div>
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">
                                            Nama Kategori
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Nama Kategori"
                                            name="nama"
                                            value={data.nama}
                                            onChange={(e) =>
                                                setData("nama", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.nama}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Deskripsi</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="Deskripsi"
                                            name="deskripsi"
                                            errors={errors.deskripsi}
                                            value={data.deskripsi}
                                            onChange={(e) =>
                                                setData(
                                                    "deskripsi",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.deskripsi}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
