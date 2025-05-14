import React, { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import notFound from "../../assets/images/note.webp";
import CountUp from "react-countup";

const Hero = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [product, setProduct] = useState([]);
  const successMassage = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const createProduct = () => {
    if (
      productUrl.trim() === "" ||
      productName.trim() == "" ||
      productPrice.trim() === ""
    ) {
      toast.error("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "color",
      });
    } else {
      let newProduct = {
        id: product.length + 1,
        img: productUrl,
        name: productName,
        price: productPrice,
        quantity: 1,
      };
      let result = [...product, newProduct];
      setProduct(result);
      localStorage.setItem("product", JSON.stringify(result));
      setProductName("");
      setProductPrice("");
      setProductUrl("");
      successMassage();

      console.log(product);
    }
  };
  const deleteProduct = (proId) => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    res = res.filter((el) => el.id !== proId);
    localStorage.setItem("product", JSON.stringify(res));
    setProduct(res);
  };
  const getProduct = () => {
    let get = JSON.parse(localStorage.getItem("product")) || [];
    setProduct(get);
  };
  let totalPrice = product.reduce((acc, el) => {
    return acc + Number(el.price) * el.quantity;
    // return acc+ +el.price 2
  }, 0);
  const incrementQuantity = (proId) => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    res = res.map((el) =>
      el.id === proId ? { ...el, quantity: el.quantity + 1 } : el
    );
    localStorage.setItem("product", JSON.stringify(res));
    setProduct(res);
  };
  const decrementQuantity = (proId) => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    res = res.map((el) =>
      el.id === proId
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
        : el
    );
    localStorage.setItem("product", JSON.stringify(res));
    setProduct(res);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="my-[50px]">
      <div className="container">
        <div className="w-[400px] flex items-center justify-center flex-col mx-auto mt-[40px] gap-3">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setProductUrl(e.target.value)}
              value={productUrl}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Url
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Product Price
            </label>
          </div>
          <button
            onClick={() => createProduct()}
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Create Product
          </button>
        </div>
        {/* table */}

        {product.length ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[80%] mx-auto mt-[30px]">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.map((el, idx) => (
                  <tr
                    key={idx}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4">
                      <Zoom>
                        <img
                          src={el.img}
                          className="w-16 md:w-16 max-w-full max-h-full "
                          alt="Apple Watch"
                        />
                      </Zoom>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <Link to={"/details"}>{el.name}</Link>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => decrementQuantity(el.id)}
                          className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>{el.quantity}</div>
                        <button
                          onClick={() => incrementQuantity(el.id)}
                          className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {el.price}$
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => deleteProduct(el.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h1 className="text-3xl mt-[30px] dark:text-rose-700">
              Total Price: {""}
              <CountUp
                start={0}
                end={totalPrice}
                duration={1.6}
                separator=","
                decimals={0}
                decimal=""
                suffix="$"
              />
            </h1>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img src={notFound} alt="img" />
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};
export default Hero;
