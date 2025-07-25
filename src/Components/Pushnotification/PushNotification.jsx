import React, { useState } from 'react'
import upload from '../../assets/Admin_Assets/upload_area.svg';
import axios from 'axios';
import toast from 'react-hot-toast';

const PushNotification = () => {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [price, setprice] = useState('')


    const imageHandler = ()=>{

    }
    // const [upload, setupload] = useState(null)
    const add_product = ()=>{

    }
     const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


    const [projectpic, setprojectpic] = useState(null);
    const uploadprojectpic = async () => {
    if (!projectpic) return null;
    const data = new FormData();
    data.append('file', projectpic);
    data.append('upload_preset', 'images-zozac');
    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dbq5gkepx/image/upload', data);
      return res.data.secure_url;
    } catch (error) {
      toast.error('Image upload failed', error);
      return null;
    }
  };
const handleSubmitproject = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const uploaded = await uploadprojectpic();
      // await axios.post(`https://pefscom-backend.onrender.com/api/user/add-project/${user._id}`, {
        
      //   imageUrlwork: uploaded
      // });
      toast.success("Uploaded successfully");

    } catch (error) {
      toast.error("Submission failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const uploadFile = async () => {
    if (!image) return null;
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'images-zozac');
    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dbq5gkepx/image/upload', data);
      return res.data.secure_url;
    } catch (error) {
      toast.error('Image upload failed', error);
      return null;
    }
  };
  

   return (
    <form onSubmit={handleSubmitproject} action="">
     <div className='addproducts'>
       <div className="addproducts-item">
         <div className="addproduct-itemfield">
           <p>Product Title</p>
           <input value={content} onChange={(e)=> setcontent(e.target.value)} type="text" name="name" placeholder='Type Here' />
         </div>
       </div>
 
       <div className="addproducts-price">
         <div className="addproduct-itemfield">
           <p>Title</p>
           <input value={title} onChange={(e)=> settitle(e.target.value)} type="text" name="old_price" placeholder='Type Here' />
         </div>
         <div className="addproduct-itemfield">
           <p>Offer Price</p>
           <input value={price} onChange={(e)=> setprice(e.target.value)} type="text" name="new_price" placeholder='Type Here' />
         </div>
       </div>
 
       <div className="addproduct-itemfield">
         {/* <p>Product Category</p>
         <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
           <option value="">Select</option>
           <option value="men">Men</option>
           <option value="kid">Kid</option>
           <option value="women">Women</option>
         </select> */}
       </div>
 
       <div className="addproduct-itemfield">
         <label htmlFor="file-input">
         <img src={image && URL.createObjectURL(image)  || upload} alt="Upload" className="addproduct-thumbnail-image" />
              
           {/* className='addproduct-thumbnail-image' /> */}
         
         </label>
           {/* <input id="image-input" type="file" accept="image/*" hidden onChange={handleImageChange} /> */}
         <input onChange={handleImageChange} type="file" name='image' id='file-input' hidden />
       </div>
 
       <button onClick={add_product} className='addproduct-btn' disabled={loading}>
         {loading ? "Processing..." : "Add"}
       </button>
     </div>
     </form>
   );
}

export default PushNotification
