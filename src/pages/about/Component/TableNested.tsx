import React, { useState } from 'react';
const TableNested = () => {
  const products = [
    {
      id: 1,
      Category: 'Electronics',
      Company: 'Apple',
      Product: 'iPhone 13',
      Description: 'The latest iPhone with advanced features',
      Price: 999,
      CustomDetails: [
        {
          Date: '2023-09-05',
          Customer: 'John Doe',
          Quantity: 2,
          TotalAmount: 1998,
        },
        {
          Date: '2023-09-04',
          Customer: 'Jane Smith',
          Quantity: 1,
          TotalAmount: 999,
        },
      ],
    },
    {
      id: 2,
      Category: 'Clothing',
      Company: 'Nike',
      Product: 'Running Shoes',
      Description: 'High-quality running shoes for athletes',
      Price: 89,
      CustomDetails: [
        {
          Date: '2023-09-05',
          Customer: 'Alice Johnson',
          Quantity: 3,
          TotalAmount: 267,
        },
        {
          Date: '2023-09-03',
          Customer: 'Bob Brown',
          Quantity: 2,
          TotalAmount: 178,
        },
      ],
    },
    {
      id: 3,
      Category: 'Books',
      Company: 'Penguin Books',
      Product: 'The Great Gatsby',
      Description: 'Classic novel by F. Scott Fitzgerald',
      Price: 12,
      CustomDetails: [
        {
          Date: '2023-09-02',
          Customer: 'Ella Williams',
          Quantity: 5,
          TotalAmount: 60,
        },
      ],
    },
    {
      id: 4,
      Category: 'Home Appliances',
      Company: 'Samsung',
      Product: 'Smart Refrigerator',
      Description: 'Refrigerator with smart features and spacious design',
      Price: 14,
      CustomDetails: [
        {
          Date: '2023-09-05',
          Customer: 'David Wilson',
          Quantity: 1,
          TotalAmount: 14,
        },
      ],
    },
  ];
  const TableRows = ({ data }) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <tr className="cursor-pointer">
          <td
            className={'py-9 px-2 text-base  font-normal flex items-center justify-center h-full border-t'}
          >
            <svg
              className={`text-black w-6 h-6 z-40  ${
                open ? 'rotate-180' : 'rotate-0'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setOpen(!open)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </td>
          <td
            className={'py-2 px-3 font-normal text-base border-t whitespace-nowrap'}
          >
            {data?.Category}
          </td>
          <td
            className={'py-2 px-3 font-normal text-base border-t whitespace-nowrap'}
          >
            {data?.Company}
          </td>
          <td
            className={'py-2 px-3 text-base  font-normal border-t whitespace-nowrap'}
          >
            {data?.Product}
          </td>
          <td
            className={'py-2 px-3 text-base  font-normal border-t min-w-[250px]'}
          >
            {data?.Description}
          </td>
          <td
            className={`py-5 px-3 text-base  font-normal  ${
              open ? 'border-t ' : 'border-t'
            }`}
          >
            {'$' + data?.Price}
          </td>
        </tr>
        <tr>
          <td colSpan={6} className="pl-10">
            <h1 className={`text-xl ${open ? 'block' : 'hidden'}`}>History</h1>
          </td>
        </tr>
        <tr
          className={`w-full overflow-hidden transition-[max-height] delay-1000 duration-1000 ease-in-out  ${
            open ? 'max-h-20' : 'max-h-0'
          }`}
        >
          <td colSpan={10}>
            <table
              className={`px-10 w-fit  ${open ? 'block' : 'hidden'} mx-auto`}
            >
              <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
                <th className="py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap rounded-l-lg">
                  Date
                </th>
                <th className="py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                  Customer
                </th>
                <th className="py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                  Quantity
                </th>
                <th className="py-3 px-4 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap rounded-r-lg">
                  Total Amount
                </th>
              </thead>
              <tbody>
                {data?.CustomDetails?.map((cdata, key) => (
                  <tr key={key}>
                    <td className="py-3 px-4">{cdata?.Date}</td>
                    <td className="py-3 px-4">{cdata?.Customer}</td>
                    <td className="py-3 px-4 text-center">{cdata?.Quantity}</td>
                    <td className="py-3 px-4 text-center">
                      {'$' + cdata?.TotalAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </>
    );
  };
  return (
    <div className="min-h-screen h-full bg-white flex flex-col items-center justify-center py-10 ">
      <div className="w-full max-w-4xl px-2">
        <h1 className="text-2xl font-medium">Tailwind Nested Table</h1>
        <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2">
          <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-0 borer ">
            <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
              <tr className="">
                <th className=""></th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Category
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Company
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Product
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Description
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((data, index) => (
                <TableRows key={index} data={data} />
              ))}
              <tr>
                <td colSpan={6} className="border-t"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TableNested;
