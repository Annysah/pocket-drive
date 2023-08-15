import Image from "next/image";

const Feature = () => {
  return (
    <div className="py-20 bg-gray-50 overflow-hidden">
        <div className="container m-auto px-6 space-y-6 text-gray-500 md:px-12">
            <div>
                <h2 className="mt-4 mb-4 py-2 text-center text-2xl text-black font-medium md:text-4xl leading-10" id="feature"><span className="text-orange-400">PocketDrive</span> offers you <br /> the best features you'll ever need</h2>
            </div>
            <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-1 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-3">
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                    <div className="relative p-8 space-y-8">
                        <div className="w-10">
                            <Image
                                src="/assets/login.svg"
                                alt="Work from home illustration"
                                quality={100}
                                width={30}
                                height={30}
                                layout="responsive"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-orange-400">Access Anytime</h5>
                            <p className="text-sm text-gray-600">Access your files across all devices and operating systems seamlessly.</p>
                        </div>
                    </div>
                </div>
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                    <div className="relative p-8 space-y-8">
                        <div className="w-10">
                            <Image
                                src="/assets/share.svg"
                                alt="Share illustration"
                                quality={100}
                                width={30}
                                height={30}
                                layout="responsive"
                            />
                        </div>
                        <div className="space-y-2">
                            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-orange-400">Easily Share</h5>
                            <p className="text-sm text-gray-600">Share files easily with our cloud storage solution</p>
                        </div>
                    </div>
                </div>
                <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                    <div className="relative p-8 space-y-8">
                        <div className="w-10">
                            <Image
                                src="/assets/folder.svg"
                                alt="Folder illustration"
                                quality={100}
                                width={30}
                                height={30}
                                layout="responsive"
                            />
                        </div>
                        <div className="space-y-2">
                            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-orange-400">Efficiently Organize Files</h5>
                            <p className="text-sm text-gray-600">With our robust file organization features, you can create folders easily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature