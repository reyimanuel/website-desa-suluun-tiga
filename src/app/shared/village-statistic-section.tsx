import { Users, UserPlus, UserMinus, ArrowUpDown, Calendar, MapPin, Home, TrendingUp } from "lucide-react"

export function VillageStatisticSection() {
    const reportData = {
        month: "JUNI",
        year: "2025",
        initialPopulation: {
            wniMale: 507,
            wnaFemale: 488,
            total: 995,
            households: 369,
        },
        changes: {
            births: 0,
            deaths: 0,
            newcomers: 2, // WNA female
            leaving: 1, // WNI male
        },
        finalPopulation: {
            wniMale: 506,
            wnaFemale: 490,
            total: 996,
            households: 369,
        },
    }

    const netChange = reportData.changes.newcomers - reportData.changes.leaving
    const malePercentage = ((reportData.finalPopulation.wniMale / reportData.finalPopulation.total) * 100).toFixed(1)
    const femalePercentage = ((reportData.finalPopulation.wnaFemale / reportData.finalPopulation.total) * 100).toFixed(1)
    const avgHouseholdSize = (reportData.finalPopulation.total / reportData.finalPopulation.households).toFixed(1)

    return (
        <section className="py-16 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-100 mb-4">Statistik Populasi Desa</h2>
                        <p className="text-gray-400 text-lg mb-2">Laporan Perkembangan Penduduk</p>
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>
                                    {reportData.month} {reportData.year}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Total Population Overview */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Total Penduduk</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-emerald-900/20 border border-emerald-700 rounded-lg p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    <Users className="h-10 w-10 text-emerald-400" />
                                </div>
                                <h3 className="text-4xl font-bold mb-2 text-emerald-400">{reportData.finalPopulation.total}</h3>
                                <p className="text-gray-300 font-medium">Jumlah Penduduk</p>
                            </div>

                            <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    <Users className="h-8 w-8 text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-2 text-gray-100">{reportData.finalPopulation.wniMale}</h3>
                                <p className="text-gray-300 font-medium">Laki-laki ({malePercentage}%)</p>
                            </div>

                            <div className="bg-purple-900/20 border border-purple-700 rounded-lg p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    <Users className="h-8 w-8 text-purple-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-2 text-gray-100">{reportData.finalPopulation.wnaFemale}</h3>
                                <p className="text-gray-300 font-medium">Perempuan ({femalePercentage}%)</p>
                            </div>

                            <div className="bg-orange-900/20 border border-orange-700 rounded-lg p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    <Home className="h-8 w-8 text-orange-400" />
                                </div>
                                <h3 className="text-3xl font-bold mb-2 text-gray-100">{reportData.finalPopulation.households}</h3>
                                <p className="text-gray-300 font-medium">Rumah Tangga</p>
                            </div>
                        </div>
                    </div>

                    {/* Population Changes Detail */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Detail Populasi</h3>
                        <div className="bg-gray-700 rounded-lg border border-gray-600 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-600">
                                        <tr>
                                            <th className="text-left py-4 px-6 text-gray-200 font-semibold">Category</th>
                                            <th className="text-center py-4 px-4 text-gray-200 font-semibold">Laki-laki</th>
                                            <th className="text-center py-4 px-4 text-gray-200 font-semibold">Perempuan</th>
                                            <th className="text-center py-4 px-4 text-gray-200 font-semibold">Total</th>
                                            <th className="text-center py-4 px-4 text-gray-200 font-semibold">KK</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-600 bg-gray-600/30 font-semibold">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <Users className="h-5 w-5 text-blue-400" />
                                                    <div>
                                                        <div className="text-gray-100">PENDUDUK / KELUARGA AWAL</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-100">{reportData.initialPopulation.wniMale}</td>
                                            <td className="text-center py-4 px-4 text-gray-100">{reportData.initialPopulation.wnaFemale}</td>
                                            <td className="text-center py-4 px-4 text-gray-100 font-bold">
                                                {reportData.initialPopulation.total}
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-100">{reportData.initialPopulation.households}</td>
                                        </tr>

                                        <tr className="border-b border-gray-600 hover:bg-gray-600/50">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <UserPlus className="h-5 w-5 text-green-400" />
                                                    <div>
                                                        <div className="text-gray-100">KELAHIRAN / KELUARGA BARU AWAL</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                        </tr>

                                        <tr className="border-b border-gray-600 hover:bg-gray-600/50">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <UserMinus className="h-5 w-5 text-red-400" />
                                                    <div>
                                                        <div className="text-gray-100">KEMATIAN</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                        </tr>

                                        <tr className="border-b border-gray-600 hover:bg-gray-600/50">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <ArrowUpDown className="h-5 w-5 text-purple-400" />
                                                    <div>
                                                        <div className="text-gray-100">PENDATANG</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">2</td>
                                            <td className="text-center py-4 px-4 text-gray-100">2</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                        </tr>

                                        <tr className="border-b border-gray-600 hover:bg-gray-600/50">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <UserMinus className="h-5 w-5 text-orange-400" />
                                                    <div>
                                                        <div className="text-gray-100">PINDAH / KELUARGA PERGI</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-100">1</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">1</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                        </tr>

                                        <tr className="border-b border-gray-600 hover:bg-gray-600/50">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <Users className="h-5 w-5 text-gray-400" />
                                                    <div>
                                                        <div className="text-gray-100">PENDUDUK HILANG</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                            <td className="text-center py-4 px-4 text-gray-100">-</td>
                                        </tr>

                                        <tr className="bg-gray-600/30 font-semibold">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <Users className="h-5 w-5 text-emerald-400" />
                                                    <div>
                                                        <div className="text-gray-100">PENDUDUK / KELUARGA AKHIR</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center py-4 px-4 text-gray-100">{reportData.finalPopulation.wniMale}</td>
                                            <td className="text-center py-4 px-4 text-gray-100">{reportData.finalPopulation.wnaFemale}</td>
                                            <td className="text-center py-4 px-4 text-emerald-400 font-bold text-xl">
                                                {reportData.finalPopulation.total}
                                            </td>
                                            <td className="text-center py-4 px-4 text-blue-400">{reportData.finalPopulation.households}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Gender Distribution */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Distribusi Populasi</h3>
                        <div className="bg-gray-700 rounded-lg border border-gray-600 p-8">
                            <div className="max-w-2xl mx-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                                        <span className="text-gray-300">Laki-laki</span>
                                    </div>
                                    <div className="text-gray-100 font-semibold">
                                        {reportData.finalPopulation.wniMale} ({malePercentage}%)
                                    </div>
                                </div>
                                <div className="w-full bg-gray-600 rounded-full h-4 mb-6">
                                    <div
                                        className="bg-blue-500 h-4 rounded-full transition-all duration-1000"
                                        style={{ width: `${malePercentage}%` }}
                                    ></div>
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 bg-purple-500 rounded"></div>
                                        <span className="text-gray-300">Perempuan</span>
                                    </div>
                                    <div className="text-gray-100 font-semibold">
                                        {reportData.finalPopulation.wnaFemale} ({femalePercentage}%)
                                    </div>
                                </div>
                                <div className="w-full bg-gray-600 rounded-full h-4">
                                    <div
                                        className="bg-purple-500 h-4 rounded-full transition-all duration-1000"
                                        style={{ width: `${femalePercentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Report Summary */}
                    <div className="text-center">
                        <div className="bg-gray-700 rounded-lg border border-gray-600 p-8">
                            <h3 className="text-xl font-bold text-gray-100 mb-4">Data Populasi</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-emerald-400 mb-2">{reportData.finalPopulation.total}</div>
                                    <div className="text-gray-300">Ttoal Populasi</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-400 mb-2">{reportData.finalPopulation.households}</div>
                                    <div className="text-gray-300">Total Rumah Tangga</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
