import { useRecoilState } from "recoil"
import { counter } from "./Store"
import Test from "./Test"
import { useEffect, useRef, useState } from "react"
import { collection, getDocs, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore"
import { db } from "./Firebase"
import Swal from "sweetalert2"

export default function App() {
  const [phones, setPhones] = useState([]);
  const [editIndex, setEditIndex] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const priceInput = useRef();
  const nameInput = useRef();
  const qtyInput = useRef();

  const getData = async () => {
    let final = [];
    const hamda = await getDocs(collection(db, "products"));
    hamda.forEach((phone) => {
      let objPhone = { ...phone.data(), id: phone.id }
      final.push(objPhone);
    });
    setPhones(final);
  }

  const addData = async (obj) => {
    const docRef = await addDoc(collection(db, "products"), obj);
  }

  const setData = async (obj) => {
    let doc_id = phones[selectedIndex].id;
    await setDoc(doc(db, "products", doc_id), obj);
  }

  const deleteData = async (doc_id) => {
    await deleteDoc(doc(db, "products", doc_id));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let newObj = {
      name: nameInput.current.value,
      price: +priceInput.current.value,
      qty: +qtyInput.current.value
    }
    addData(newObj).then(() => {
      alert('Data Added Success')
      getData();
    })
  }

  const handelUpdate = (event) => {
    event.preventDefault();
    let editObj = {
      name: nameInput.current.value,
      price: +priceInput.current.value,
      qty: +qtyInput.current.value
    }
    setData(editObj).then(() => {
      alert('Data Edit Success')
    })
  }

  const handleDelete = (index) => {
    Swal.fire({
      icon: "question",
      text: "Are you sure ?",
      showConfirmButton: false,
      showDenyButton: false,
      confirmButtonColor:"blue",
      confirmButtonText :"دوس هنا يا حمادة"
    }).then((res) => {
      if (res.isConfirmed) {
        let doc_id = phones[index].id;
        deleteData(doc_id).then(() => {
          alert('Product Deleted Succssfully');
          getData();
        })
      }
    })

  }
  useEffect(() => {
    getData()
  }, [])

  const openEdit = (index) => {
    nameInput.current.value = phones[index].name;
    priceInput.current.value = phones[index].price;
    qtyInput.current.value = phones[index].qty;
    setEditIndex(true);
    setSelectedIndex(index)
  }

  return (
    <div className="col-12 App">
      <form onSubmit={editIndex ? handelUpdate : handleSubmit}>
        <input ref={nameInput} type="text" className="form-control" placeholder="Enter Product Name" />
        <input ref={priceInput} type="text" className="form-control" placeholder="Enter Product Price" />
        <input ref={qtyInput} type="text" className="form-control" placeholder="Enter Product Qty" />
        <button className={`btn btn-${editIndex ? 'primary' : 'danger'}`} >{editIndex ? 'Update Product' : 'Add New Product'}</button>
      </form>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>-</th>
            <th>item name</th>
            <th>item price</th>
          </tr>
        </thead>
        <tbody>
          {
            phones.map((el, index) => {
              return (
                <tr key={el.id}>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.price}</td>
                  <td>{el.qty}</td>
                  <td>
                    <button onClick={() => openEdit(index)} className="btn btn-warning" disabled={editIndex}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)} className="btn btn-danger">Del</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

    </div>
  )
}
