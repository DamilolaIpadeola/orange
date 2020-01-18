import React, {Component} from 'react';
import CanvasJSReact from './canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const options = {
    animationEnabled: true,
    subtitles: [{
        text: "75%",
        verticalAlign: "center",
        fontSize: 38,
        dockInsidePlotArea: true
    }],
    data: [{
        type: "doughnut",
        showInLegend: true,
        dataPoints: [
            { name: "Unsatisfied", y: 5 },
            { name: "Very Unsatisfied", y: 31 },
            { name: "Very Satisfied", y: 40 },
            { name: "Satisfied", y: 17 },
            { name: "Neutral", y: 7 }
        ]
    }]
}

const barOptions = {
    data: [
    {
        type: "column",
        dataPoints: [
            { label: "Apple",  y: 10  },
            { label: "Orange", y: 15  },
            { label: "Banana", y: 25  },
            { label: "Mango",  y: 30  },
            { label: "Grape",  y: 28  }
        ]
    }
    ]
}
class Analysis extends Component {
    render() {
        return (
            <div className="bg-white rounded my-2 mx-2 p-2 lg:my-6 lg:mx-8 lg:p-6">
                <div className="block lg:flex mb-6">
                    <div className="flex-1 mb-4 lg:mb-0 mr-4">
                        <div className="items-center rounded-lg bg-yellow-500 text-white w-full py-6 px-6 flex shadow-md">
                            <div className="flex-auto">
                                <small className="font-semibold">Total Savings</small>
                                <div className="text-2xl lg:text-4xl leading-none font-semibold">N1,450,000</div>
                            </div>
                            <div className="flex-initial">
                                <img src="/assets/wallet-big.png" className="h-8 lg:h-12" alt="wallet-big"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 mb-4 lg:mb-0 mr-4">
                        <div className="items-center rounded-lg bg-white text-black w-full py-6 px-6 flex shadow-md">
                            <div className="flex-auto">
                                <small className="font-semibold">Total in Investments</small>
                                <div className="text-2xl lg:text-4xl leading-none font-semibold">N3,000,000</div>
                            </div>
                            <div className="flex-initial">
                                <img src="/assets/bar-big.png" className="h-8 lg:h-12" alt="bar-big"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 mb-4 lg:mb-0 lg:mr-4">
                        <div className="items-center rounded-lg bg-white text-black w-full py-6 px-6 flex shadow-md">
                            <div className="flex-auto">
                                <small className="font-semibold">Invest Rate</small>
                                <div className="text-2xl lg:text-4xl leading-none font-semibold">15%</div>
                            </div>
                            <div className="flex-initial">
                                <img src="/assets/percent.png" className="h-8 lg:h-12" alt="percent"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block lg:flex">
                    <div className="lg:flex-initial mr-4 lg:w-1/3">
                        <div className="rounded-lg bg-white shadow-md p-2 lg:p-8 text-center">
                            <div className="text-gray-600 font-semibold">Saving Pattern</div>
                            <CanvasJSChart options = {options}/>
                        </div>
        
                    </div>
                    <div className="flex-auto">
                    <div className="rounded-lg bg-white shadow-md p-2 lg:p-8">
                        <div>

                        </div>
                        <div>
                            <div className="flex">
                                <div className="flex-auto">
                                <div className="text-gray-600 font-semibold">Transaction History</div>
                                </div>
                                <div className="flex-initial">

                                </div>
                            </div>
                            <CanvasJSChart options = {barOptions}/>
                        </div>
                        </div>
                    </div>
        
                </div>
            </div>
        )
    }
} 

export default Analysis;