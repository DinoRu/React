import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Tables = () => {
  const rows = [
    {
      id: 11121314,
      product: "Acer Nitro S",
      img: "http://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20211227/Nitro5-an515-58-rgbkb-black-modelpreview.png",
      date: "1 March",
      customer: "John Smith",
      amount: 1200,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 21222324,
      product: "PlayStations 5",
      img: "https://i.ytimg.com/vi/22c8c_o1XzY/maxresdefault.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online",
      status: "Pending",
    },
    {
      id: 21222325,
      product: "HP pavillon",
      img: "https://itti.com.np/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/c/s/csm_hp_pavilion_product_2_070a23dabc_2.jpg",
      customer: "Hewel & Placard",
      date: "1 March",
      amount: 750,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 21222326,
      product: "Asus ROG srix",
      img: "https://www.notebookcheck-ru.com/uploads/tx_nbc2/oasahxv162owufac_setting_000_1_90_end_1000.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Cash on Delivery",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cell">
                  <img src={row.img} alt="" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
