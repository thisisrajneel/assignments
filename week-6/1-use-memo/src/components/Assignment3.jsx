import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 }
        // Add more items as needed
    ]);

    const [name, setName] = useState('')
    const [value, setValue] = useState(0)

    // Your code starts here
    const totalValue = useMemo(() => {
        let totalVal = 0

        items.forEach(e => {
            totalVal += Number(e.value)
        })

        return totalVal
    }, [items]);
    // Your code ends here
    return (
        <div>
            <p>name : </p>
            <input type='text' 
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <p>value: </p>
            <input type='number' 
                    placeholder='value'
                    value={value}
                    onChange={(e) => Number(setValue(e.target.value))}
            ></input>
            <br />
            <button onClick={() => {
                let newItem = {
                    name: name,
                    value: value
                }

                setItems(items.concat(newItem))
            }}>
                add
            </button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
