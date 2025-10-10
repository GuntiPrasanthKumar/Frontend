import React, {useContext, useRef, useState} from 'react';
import Context from "../Context.jsx";
// import Context from "../Context.jsx";

function AddItem() {

    const { addItem } = useContext(Context);
    const fileInputRef = useRef(null);

    const [item, setItem] = useState({
        name : '',
        brand : '',
        price : '',
        size : '',
        image : '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        // const name = e.target.name;
        // const value = e.target.value;
        setItem((prev) => ({
            ...prev,
            [name] : value,
        }));
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = () => {
                setItem((prev) => ({
                    ...prev,
                    image : reader.result,
                }))
            }
            reader.readAsDataURL(file);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(item.name && item.brand && item.price && item.size && item.image){
            addItem(item);
            setItem({
                name : '',
                brand : '',
                price : '',
                size : '',
                image : '',
            });
            if(fileInputRef.current){
                fileInputRef.current.value = "";
            }
            alert("Item Added Successfully");
        } else{
            alert("Please fill all the fields");
        }
    }
    const handleClear = () => {
        setItem({
            name : '',
            brand : '',
            price : '',
            size : '',
            image : '',
        })
        if(fileInputRef.current){
            fileInputRef.current.value = "";
        }
    }
    return (
        <>
            <div className='additem-form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Item Name' name='name' value={item.name} onChange={handleInputChange}/>
                    <input type="text" placeholder='Enter Item Brand' name='brand' value={item.brand} onChange={handleInputChange}/>
                    <input type="text" placeholder='Enter Item Price' name='price' value={item.price} onChange={handleInputChange}/>
                    <input type="text" placeholder='Enter Item Size' name='size' value={item.size} onChange={handleInputChange}/>
                    <input type="file" placeholder='choose image' name='image' ref={fileInputRef} onChange={handleFileChange}/>
                    <div className='buttons'>
                        <button type='submit'>Add Item</button>
                        <button type='button' onClick={handleClear}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddItem;