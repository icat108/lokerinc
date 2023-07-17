import React from "react";


// import react Icons 
import {BiTimeFive} from 'react-icons/bi'


// import logo 
import logo1 from '../../assets/getwifi.png'


// For All the jobs in here

const Data = [
    {
        id:1,
        image: logo1,
        title: 'Web Developer',
        time: 'Urgent',
        location: 'Canada',
        desc: 'Producing clean, efficient code based on specifications Testing and deploying programs and systems',
        company: 'Wahana Inspirasi Fondasi Indonesia'
    },
    {
        id:2,
        image: logo1,
        title: 'Sofware Enginer',
        time: 'Urgent',
        location: 'Indonesia',
        desc: 'Full stack development. Our current stack includes React as frontend, Node and Python as backend',
        company: 'Wahana Inspirasi Fondasi Indonesia'
    },
    {
        id:3,
        image: logo1,
        title: 'Sofware Development',
        time: 'Urgent',
        location: 'Indonesia',
        desc: 'Node.js Express.js Vue.js PHP Laravel Golang .NET Python',
        company: 'Wahana Inspirasi Fondasi Indonesia'
    },
    
    {
        id:4,
        image: logo1,
        title: 'UI/UX Designer',
        time: 'Urgent',
        location: 'Indonesia',
        desc: 'create the user interface for an app, website, or other interactive media',
        company: 'Wahana Inspirasi Fondasi Indonesia'
    },
    
    // {
    //     id:5,
    //     image: logo1,
    //     title: 'Sofware Enginer',
    //     time: 'Urgent',
    //     location: 'Indonesia',
    //     desc: 'Lorem Ipsum , dolor sit amet constrectur adipiscing elit. Corupte, laboriosam!',
    //     company: 'Wahana Pondasi Indonesia'
    // },
    
    // {
    //     id:6,
    //     image: logo1,
    //     title: 'Sofware Enginer',
    //     time: 'Urgent',
    //     location: 'Indonesia',
    //     desc: 'Lorem Ipsum , dolor sit amet constrectur adipiscing elit. Corupte, laboriosam!',
    //     company: 'Wahana Pondasi Indonesia'
    // },
    // {
    //     id:7,
    //     image: logo1,
    //     title: 'Data Enginer',
    //     time: 'Urgent',
    //     location: 'Indonesia',
    //     desc: 'Lorem Ipsum , dolor sit amet constrectur adipiscing elit. Corupte, laboriosam!',
    //     company: 'Wahana Pondasi Indonesia'
    // },
    
    // {
    //     id:8,
    //     image: logo1,
    //     title: 'Sofware Enginer',
    //     time: 'Urgent',
    //     location: 'Indonesia',
    //     desc: 'Lorem Ipsum , dolor sit amet constrectur adipiscing elit. Corupte, laboriosam!',
    //     company: 'Wahana Pondasi Indonesia'
    // },
    
    
    
]


        // this is a single company, lets see how to map it

const Job = () => {
    return(
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {
                    Data.map(({id,image,title,time,location,desc,company}) => {

                        return(
                                // this will return a single job post based on the ID  
                            <div key={id}className="group group/item singleJob w-[250px] p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                    <span className="flex justify-between items-center gap-4">
                        <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">{title}</h1>
                        <span className="flex items-center text-[#ccc] gap-1">
                            <BiTimeFive />{time}
                        </span>
                    </span>

                    <h6 className="text-[13] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">{location}</h6>
                        
                        <p>
                            {desc}
                        </p>

                        <div className="company flex items-center gap-2">
                            <img src={image} alt="Company Logo" className="w-[10%]" />
                            <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
                        </div>


                        <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-[#2ef2aa] group-hover/item:text-textColor group-hover:text-white">
                            Apply Now
                        </button>

                </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Job