import React from 'react'


interface props { 1: number }


const mutation: React.FC<props> = () => {

    // PRIMITIVE TYPES ( DOESNT CHANGE THE MAIN SOURE )
    let number1 = "12";
    let number2 = number1;
    number2 = "10"
    console.info(number1, number2)


    // REFRECNE TYPES ( CHANGE THE MAIN SOURE )
    let obj1 = {
        id: 1,
        title: "Fake Title"
    };

    let obj2 = obj1;
    console.info(obj1, obj2)

    obj2.title = "REAL TITLE"
    console.info(obj1, obj2)





















    return (
        <div>
            <h1 className="p-4 text-center font-black text-3xl text-black bg-[#FABB14]">  MUTATIONS  </h1>
        </div>
    )
}

export default mutation
