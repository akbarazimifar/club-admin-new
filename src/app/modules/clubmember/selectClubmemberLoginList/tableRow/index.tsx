import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import ModalDetails from "../tableRow/buttonModal/ModalDetails";
import React, { useState } from "react";
import { actionTypes as actionTypesWorkWithUsAttach } from "../../../../../redux/formManager/workWithUs/workWithUs_Attachment_select/index";
import { useDispatch, useSelector } from "react-redux";
import { stat } from "fs";
import StatusModal from "./statusModal/StatusModal";
interface elem {
  pagnation: any;
  index: any;
  stateReducer: any;
  head: any;
  item: any;
  setflagApi: any;
  apiSubmit: any;
}

export default function Index({
  index,
  pagnation,
  stateReducer,
  head,
  item,
  setflagApi,
  apiSubmit
}: elem) {
  const dispatch = useDispatch();
  const stateReducerId = useSelector(
    (state: any) => state.contactUs_select_Id_reducer
  );
  const [flagDetails, setFlagDetails] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [stateClick, setStateClick] = useState(false);
  const handleClickModal = (e: any, item: any) => {
    let obj = {
      _id: item.id
    };

    setStateClick(item);
    setFlagDetails(true);
    let _data = {
      data: obj
    };
    dispatch({
      type: actionTypesWorkWithUsAttach.selectWotkWithUsAttachmentAsync,
      payload: _data
    });
  };
  return (
    <TableRow key={index}>
      <TableCell align="center">
        {pagnation.number !== 1
          ? pagnation.number * stateReducer.size -
            stateReducer.size +
            (index + 1)
          : index + 1}
      </TableCell>

      {head
        .filter(
          (column: any, index: any) => index !== 0 && index !== head.length
        )
        .map((column: any, index: any) => {
          let value = item.body[column.title];
          return (
            <TableCell align="center">
              {column.format ? column.format(value) : value}
            </TableCell>
          );
        })}
      <TableCell align="center">
        {/*<button className="btnsYellow" onClick={() => handleClickModal()}>*/}
        {/*  مشاهده ضمائم*/}
        {/*</button>*/}
        {/*<ButtonDetails*/}
        {/*  data={item}*/}
        {/*  flagDetails={flagDetails}*/}
        {/*  setFlagDetails={setFlagDetails}*/}
        {/*/>*/}

        {/*<ButtonDetails*/}
        {/*  info={{*/}
        {/*    title: "جزئیات",*/}
        {/*    color: "primary",*/}
        {/*    modal: "ModalDetails"*/}
        {/*  }}*/}
        {/*  data={item}*/}
        {/*/>*/}
      </TableCell>
    </TableRow>
  );
}
