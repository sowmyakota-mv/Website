function StatsSection(){
    return(
        <section className="py-10 bg-gray-50"> 
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
                    <div className="flex-1">
                        <h3 className="text-4xl font-bold text-blue-600">1000+</h3>
                        <p className="text-gray-600 text-lg mt-2">Admission Success</p>
                    </div>
                    <div className="hidden md:block w-px bg-gray-300 h-16"></div>
                    <div className="flex-1">
                        <h3 className="text-4xl font-bold text-blue-600">95%</h3>
                        <p className="text-gray-600 text-lg mt-2">Placement Success</p>
                    </div>
                    <div className="hidden md:block w-px bg-gray-300 h-16"></div>
                    <div>
                        <h3 className="text-4xl font-bold text-blue-600">98%</h3>
                        <p className="text-gray-600 text-lg mt-2">Overall Success Rate</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection