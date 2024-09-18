'use client'
import React from 'react'


function Onboarding() {
    const [currentStep, setCurrentStep] = React.useState(0);
    const [userData, setUserData] = React.useState({
        userType: 'Individual',
        name: '',
        description: '',
        pets: [
            {
                type: '',
                name: '',
                age: '',
                bio: '',
            }
        ]
    });
    function nextStep() {
        if (currentStep === steps.length - 1) {
            return;
        }
        setCurrentStep(currentStep + 1);
    }

    function prevStep() {
        if (currentStep === 0) {
            return;
        }
        setCurrentStep(currentStep - 1);
    }

    function addNewPets() {
        setUserData({
            ...userData,
            pets: [
                ...userData.pets,
                {
                    type: '',
                    name: '',
                    age: '',
                    bio: '',
                }
            ]
        })
    }


    function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(userData);
    }

    const handleUserTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            userType: e.target.value,
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log('e.target', e.target)
        console.log('name', name)
        console.log('value', value)
        setUserData((prevData) => {
            if (name.startsWith('pet')) {
                const field = name.substring(3).toLowerCase();
                return {
                    ...prevData,
                    pets: prevData.pets.map((pet) => {
                        return ({ ...pet, [field]: value })
                    }
                    ),
                };
            }

            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const steps = [
        {
            title: 'Onboarding',
            description: 'Step 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: (
                <div className='w-10 mt-8'>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="radio" name="userType" className="radio" value="Individual" checked={userData.userType === "Individual"} onChange={handleUserTypeChange} />
                            <span className="label-text ml-2">Individual</span>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="radio" name="userType" className="radio" value="Shelter" checked={userData.userType === "Shelter"} onChange={handleUserTypeChange} />
                            <span className="label-text ml-2">Shelter</span>
                        </label>
                    </div>
                </div>
            )
        },
        {
            title: 'Individual: About',
            description: 'Step 2: Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: (
                <div className='mt-8 w-full'>

                    <div className="label">
                        <span className="label-text">Name</span>
                    </div>
                    <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={handleInputChange} />

                    <div className="label">
                        <span className="label-text">??</span>
                    </div>
                    <input name="??" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={handleInputChange} />

                    <div className="label">
                        <span className="label-text">Description</span>
                    </div>
                    <textarea name='description' className="textarea textarea-bordered w-full max-w-xs" placeholder="Bio" onChange={handleInputChange}></textarea>
                </div>
            )
        },
        {
            title: 'Individual: Pets',
            description: 'Step 3: Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: (
                <div className='mt-8'>
                    {userData.pets.map((pet, index) => (
                        <div key={index} className='my-4'>
                            <div className='border max-w-xs p-4'>
                                <div className="label">
                                    <span className="label-text">Pet Type</span>
                                </div>
                                <select name='petType' className="select select-bordered w-full max-w-xs" onChange={handleInputChange}>
                                    <option defaultValue={'Cat'}>Cat</option>
                                    <option>Dog</option>
                                    <option>Dragon</option>
                                </select>
                                <div className="label">
                                    <span className="label-text">Pet Name</span>
                                </div>
                                <input name='petName' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={handleInputChange} />
                                <div className="label">
                                    <span className="label-text">Age</span>
                                </div>
                                <input name='petAge' type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={handleInputChange} />
                                <div className="label">
                                    <span className="label-text">Bio</span>
                                </div>
                                <textarea name='petBio' className="textarea textarea-bordered w-full max-w-xs" placeholder="Bio" onChange={handleInputChange} ></textarea>
                            </div>
                        </div>
                    ))
                    }

                    <div>
                        <button className="btn btn-primary w-24" onClick={addNewPets}>Add</button>
                    </div>
                </div >
            )
        },
    ]


    return (
        <div className='p-8'>
            <div className='mb-4'>
                <ul className="steps">
                    <li className={`step ${currentStep >= 0 ? 'step-primary' : ''}`}></li>
                    <li className={`step ${currentStep >= 1 ? 'step-primary' : ''}`}></li>
                    <li className={`step ${currentStep >= 2 ? 'step-primary' : ''}`}></li>
                </ul>
            </div>
            <h1 className='text-4xl font-bold'>{steps[currentStep].title}</h1>
            <p>{steps[currentStep].description}</p>
            <form onSubmit={handleSubmit}>
                {steps[currentStep].content}
                <div className='mt-4'>
                    <button className="btn btn-secondary w-24" onClick={prevStep}>Back</button>
                    {/* {currentStep < steps.length - 1 ? ( */}
                    <button type="button" onClick={nextStep} className="btn btn-primary ml-2 w-24">
                        Next
                    </button>
                    {/* ) : (
                        <button type="submit" className="btn btn-primary ml-2 w-24">
                            Submit
                        </button>
                    )} */}
                </div>
            </form>
        </div>
    )
}

export default Onboarding