import "./Home.css"
import pic from "../assets/pic.jpg"
import "animate.css"
import {useState} from "react";

function CompUser({className, picSrc}: { className: string, picSrc: string }) {
    return (<div className={className}>
        <img className="object-cover" alt="" style={{borderRadius: "50%", height: "100%", width: "100%"}} src={picSrc}/>
    </div>)
}

function loadImage(url: string, handel: ()=>any) {
    const tempImg=new Image()
    tempImg.src=url
    tempImg.onload=handel
}

export default function Home() {
    const [showImgSrc,setShowImgSrc]=useState("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
    const [imgLoaded,setImgLoaded]=useState(false)
    loadImage(pic,()=>{
        setShowImgSrc(pic)
        setImgLoaded(true)
    })
    return (<div className="mx-auto box-border m-0 overflow-x-hidden">
        <main className="flex flex-col w-full items-center">
            <section className="flex  flex-col w-full md:flex-row  my-2 gap-2 animate__fadeInUp animate__animated">
                <div className="rounded-2xl bg-gray-700  flex flex-1 m-2 flex-row flex-wrap justify-between ">
                    <div className="flex items-center  flex-auto left-item ">
                        <div className="h-16 w-18 m-4  flex justify-center items-center text-4xl nfp-logo">NFP</div>
                        {/*<img alt="react" className="h-16 w-16 m-4 rotate-img" src={reactLogo}/>*/}
                        <h2 className="flex-1 text-2xl text-blue-300 mx-auto  text-center">NFP图像处理</h2>
                    </div>
                    <div className="text-gray-400 m-2 mx-3 flex flex-1 items-center">
                        <p className="mx-auto whitespace-nowrap">"有趣的网页图像处理工具"</p>
                    </div>
                </div>
                <div className="rounded-2xl bg-gray-400 flex-1 m-2 flex items-center justify-center">
                    <h2 className="text-gray-800 text-xl md:text-2xl flex-auto text-center nfs-card">
                        NFScript <span className="imp-word">简单、强大</span>的媒体脚本
                    </h2>
                    <div className="h-16 w-18 m-4  flex justify-center items-center text-4xl nfs-logo">NFS</div>
                    {/*<img alt="vite" className="h-16 w-16 m-4 rotate-img" src={viteLogo}/>*/}
                </div>

            </section>
            <section className="flex flex-col md:flex-row w-full  m-2 gap-2 ">
                <div className="flex flex-1 flex-col gap-4 mx-2 animate__fadeInLeft animate__animated">
                    <div className="card-shadow flex-auto gap-4" style={{height:"23rem"}}>
                        <img alt="demo-img" src={showImgSrc} className={`object-cover rounded-3xl w-full h-full ${imgLoaded?'img-show-1':''} bg-gray-700`}/>
                    </div>
                    <div className="flex-auto flex  flex-row gap-4 ">
                        <div className="flex-1 card-shadow filter-code-card h-48">
                            <div className="filter-code">
                                <p>filter: hue-rotate(90deg);</p>
                            </div>
                            <img alt="demo-img" src={showImgSrc} className="object-cover rounded-3xl w-full h-full img-show-2 bg-gray-700"/>
                        </div>
                        <div className="flex-1 card-shadow filter-code-card h-48">
                            <div className="filter-code">
                                <p>filter: hue-rotate(180deg);</p>
                            </div>
                            <img alt="demo-img" src={showImgSrc} className="object-cover rounded-3xl w-full h-full img-show-3 bg-gray-700 "/>
                        </div>
                    </div>
                </div>
                <div className="flex-1 gap-4 m-2 flex justify-center animate__fadeInRight animate__animated">
                    <div className="nfs-code-card">
                        <div className="nfs-code">
                            <h1 className="w-full nfs-code__header">草原之旅.nfs</h1>
                            <p><span className="nfs-code__line">1•</span><span className="nfs-code__cmd">*开始</span>
                            </p>
                            <p><span className="nfs-code__line">2•</span><span className="nfs-code__cmd">背景</span>
                                <span className="nfs-code__value"> 草原</span><span
                                    className="nfs-code__select"> 淡入</span></p>
                            <p><span className="nfs-code__line">3•</span><span className="nfs-code__cmd">设置音乐</span>
                                <span
                                    className="nfs-code__value"> 春天里</span> <span
                                    className="nfs-code__select"> 淡入</span>
                            </p>
                            <p><span className="nfs-code__line">4•</span><span className="nfs-code__cmd">张三</span>
                                <span>:</span>
                                <span className="nfs-code__value">天气不错</span>
                                <span className="text-amber-300">\n</span>
                                <span className="nfs-code__value">我们去草原玩吧！</span>
                            </p>
                            <div><span className="nfs-code__line">5•</span><span className="nfs-code__cmd">背</span>
                                <span>|</span>
                                <div className="nfs-code__tip">
                                    <p>背景</p>
                                    <p>背景音乐</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="flex w-full">
                <div className="mx-auto my-4">
                    <h1 className="text-gray-50 text-xl text-center">
                        合作伙伴
                    </h1>
                    <div className="flex flex-row flex-wrap md:w-4/5 mx-auto justify-center items-center">
                        {['https://sponsors.vuejs.org/images/mqtt_x.png',
                            'https://sponsors.vuejs.org/images/casinoburst_com.png',
                            'https://sponsors.vuejs.org/images/mqtt_x.png',
                            'https://sponsors.vuejs.org/images/mqtt_x.png',
                            'https://sponsors.vuejs.org/images/mqtt_x.png',
                            'https://sponsors.vuejs.org/images/mqtt_x.png',
                            'https://sponsors.vuejs.org/images/mqtt_x.png'
                        ].map((picUrl, index) => <CompUser className="h-20 w-20 m-2 opacity-50 hover:opacity-100"
                                                           picSrc={picUrl}
                                                           key={"comp-user" + index}/>)}
                    </div>
                </div>
            </section>
        </main>
    </div>)
}