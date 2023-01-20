import React from 'react';
import expert1 from '../../../Photos/experts/expert-1.jpg'
import expert2 from '../../../Photos/experts/expert-2.jpg'
import expert3 from '../../../Photos/experts/expert-3.jpg'
import expert4 from '../../../Photos/experts/expert-4.jpg'
import expert5 from '../../../Photos/experts/expert-5.jpg'
import expert6 from '../../../Photos/experts/expert-6.png'
import Expert from '../Expert/Expert';


const experts =[
    {id:1, name:"John Doe", image:expert1},
    {id:2, name:"Willamson", image:expert2},
    {id:3, name:"Kathrik Sin", image:expert3},
    {id:4, name:"Henderson", image:expert4},
    {id:5, name:"Shakiriana", image:expert5},
    {id:6, name:"Naingolan", image:expert6}
]
const Experts = () => {
    return (
        <div>
            <h2 className='text-5xl text-green-600 text-center my-16 font-bold'>Our Experts</h2>
            <div className='grid grid-cols-1 p-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>
                {
                    experts.map(expert=><Expert
                    key={expert.id}
                    expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;