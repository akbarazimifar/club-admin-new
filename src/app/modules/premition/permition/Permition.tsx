import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import AccordionComonent from "./AccordionComponent";
import Category from "./Category";
import ModalAdd from "./ModalAdd/Modal";
import { PREMISSON_DATA } from "../../../pages/permition/permition/PREMISSON_DATA";

const useStyles = makeStyles(theme => ({
  btnAdd: {
    backgroundColor: "#28A745",
    width: "100%",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    color: "white"
  },
  btnsActive: {
    backgroundColor: "#4a9ef1",
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    transition: "all 0.5s"
  },
  btns: {
    backgroundColor: "white",
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    borderBottom: "1px solid #b9b9b9",
    ".clearBtn:hover": {
      visibility: "visible",
      opacity: "1"
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  clearBtn: {
    visibility: "visible",
    opacity: "1",
    transition: "all 0.5s"

    // "&:hover": {
    //   visibility: "visible",
    //   opacity: "1"
    // }
  },
  clearBtnNone: {
    visibility: "hidden",
    opacity: "0",
    transition: "all 0.5s"

    // "&:hover": {
    //   visibility: "visible",
    //   opacity: "1"
    // }
  }
}));

const Permition = () => {
  let classes = useStyles();
  const [expanded, setExpanded] = React.useState<any>(false);
  const [openModal, setOpenModal] = React.useState<any>(false);
  const [clickBtn, setClickBtn] = React.useState<any>(1);
  const [state, setState] = useState(itemCheckBox);
  const [stateCategory, setStateCategory] = useState(itemBtn);

  return (
    <>
      <div>
        <div className="w-100 d-flex justify-content-end mb-5">
          <div>
            {" "}
            <button className="btnsGreen">ثبت</button>
            <button className="btnsGray">انصراف</button>
          </div>
        </div>
        <div className="row">
          <Category
            stateCategory={stateCategory}
            classes={classes}
            setOpenModal={setOpenModal}
            clickBtn={clickBtn}
            setClickBtn={setClickBtn}
          />
          <div className="col-10">
            <div className="bg-white">
              <div className="w-100 p-5">
                <input
                  style={{
                    borderRadius: "5px",
                    height: "50px",
                    border: "1px solid #b9b9b9"
                  }}
                  type="text"
                  className="w-100 shadow-lg"
                />
              </div>
              <div>
                {state.map((itm, ind) => (
                  <AccordionComonent
                    itm={itm}
                    expanded={expanded}
                    setExpanded={setExpanded}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAdd
        openModal={openModal}
        setOpenModal={setOpenModal}
        classes={classes}
      />
    </>
  );
};
let itemCheckBox = [
  {
    title: "مدیریت کاربران  ",
    state: "panel1",
    children: [
      { lable: "مدیریت کاربران  ", id: 0, active: true },
      { lable: "لیست کاربران", id: 1, active: true },
      { lable: " کاربران", id: 2, active: true }
    ]
  },
  {
    title: "امتیازات",
    state: "panel2",
    children: [
      { lable: "مدیریت کاربران  ", id: 0, active: true },
      { lable: "لیست کاربران", id: 1, active: true },
      { lable: " کاربران", id: 2, active: true }
    ]
  },
  {
    title: "سیگنال",
    state: "panel3",
    children: [
      { lable: "مدیریت کاربران  ", id: 0, active: true },
      { lable: "لیست کاربران", id: 1, active: true },
      { lable: " کاربران", id: 2, active: true }
    ]
  }
];
let itemBtn = [
  {
    title: "مدیر سیستم",
    id: 1
  },
  {
    title: "پشتیبان",
    id: 2
  },
  {
    title: "مدیر",
    id: 3
  }
];

export default Permition;
